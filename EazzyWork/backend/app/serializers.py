from rest_framework import serializers
from .models import User, JobListing, JobsTaken


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["first_name", "last_name", "email", "password", "role", "resume"]
        extra_kwargs={
            'password':{'write_only':True}
        }
        
    def create(self, validated_data):
        password=validated_data.pop('password', None)
        instance=self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobListing
        fields=["id","job_name", "job_description", "job_poster",  "job_status", "job_price"]

class TakenJobSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobsTaken
        fields=["id","current_job", "job_doer", "job_status", "bid_amount"]