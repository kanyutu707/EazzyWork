from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User, JobListing, JobsTaken
import jwt, datetime
from .serializers import UserSerializer, JobSerializer, TakenJobSerializer

# Create your views here.

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed("User Not Found")
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password")
        payload = {
           'id': user.id,
           'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
           'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
       
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data={
            "jwt":token
        }
        return response
    
class UserView(APIView):
   def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
             raise AuthenticationFailed('Unauthenticated')
        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)
   
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            "message": "success"
        }
        return response
    
class UserListView(APIView):
    def get(self, request):
        users=User.objects
        serializer=UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RegisterView(APIView):
    #create a new user
    def post(self, request):
      serializer=UserSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data)
    
    
class JobListApiView(APIView):
   

     #get all jobs
     def get(self, request, *args, **kwargs):
            jobs=JobListing.objects
            serializer=JobSerializer(jobs, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
     

     # create a new job
     def post(self, request, *args, **kwargs):
         data={
            'job_name':request.data.get('job_name'),
            'job_description':request.data.get('job_description'),
            'job_poster':request.data.get('job_poster'),
            'job_status':request.data.get('job_status'),
            'job_price':request.data.get('job_price')
        }
         serializer=JobSerializer(data=data)
         if serializer.is_valid():
              serializer.save()
              return Response(serializer.data, status=status.HTTP_201_CREATED)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     
class TakenJobListApiView(APIView):
   

    def get(self, request, *args, **kwargs):
         taken_jobs=JobsTaken.objects
         serializer=TakenJobSerializer(taken_jobs, many=True)
         return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
         serializer=TakenJobSerializer(data=request.data)
         if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    
    

