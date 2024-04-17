from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import System_User, JobListing, JobsTaken
from .serializers import UserSerializer, JobSerializer, TakenJobSerializer

# Create your views here.

class UserListApiView(APIView):
  


    #list all users
    def get(self, request, *args, **kwargs):
        users=System_User.objects
        serializer=UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    #create a new user
    def post(self, request, *args, **kwargs):
        data={
            'first_name':request.data.get('first_name'),
            'last_name':request.data.get('last_name'),
            'email':request.data.get('email'),
            'password':request.data.get('password'),
            'role':request.data.get('role')
        }
        serializer=UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
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
            'job_status':request.data.get('job_status')
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
         data={
              "current_job":request.data.get("current_job"),
              "job_doer":request.data.get("job_doer"),
              "job_status":request.data.get("job_status")
            }
         serializer=TakenJobSerializer(data=data)
         if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

