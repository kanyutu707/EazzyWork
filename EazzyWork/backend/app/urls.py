from django.urls import path, include
from .views import(
    UserListApiView,
    JobListApiView,
    TakenJobListApiView
)
urlpatterns=[
    path('users', UserListApiView.as_view()),
    path('jobs', JobListApiView.as_view()),
    path('assigned_jobs', TakenJobListApiView.as_view())
]