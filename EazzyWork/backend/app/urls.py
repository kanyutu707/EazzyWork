from django.urls import path, include
from .views import(
    RegisterView,
    JobListApiView,
    TakenJobListApiView,
    LoginView,
    UserView,
    LogoutView,
    UserListView
)
urlpatterns=[
    path('users', RegisterView.as_view()),
    path('jobs', JobListApiView.as_view()),
    path('assigned_jobs', TakenJobListApiView.as_view()),
    path('Login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('Logout', LogoutView.as_view()),
    path('User_List', UserListView.as_view())

]