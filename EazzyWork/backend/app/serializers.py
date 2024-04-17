from rest_framework import serializers
from .models import System_User, JobListing, JobsTaken


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=System_User
        fields=["first_name", "last_name", "email", "password"]


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobListing
        fields=["job_name", "job_description", "job_poster",  "job_status"]

class TakenJobSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobsTaken
        fields=["current_job", "job_doer", "job_status"]