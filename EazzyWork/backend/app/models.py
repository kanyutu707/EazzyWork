from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class System_User(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.EmailField(max_length=255)
    password=models.CharField(max_length=255)
    role=models.CharField(max_length=255)
   
    def  __str__(self):
        return self.first_name


class JobListing(models.Model):
    id=models.IntegerField(primary_key=True)
    job_name=models.CharField(max_length=255)
    job_description=models.CharField(max_length=255)
    job_poster=models.OneToOneField(System_User, on_delete=models.CASCADE)
    job_status=models.BooleanField(default=False)
    

    def __str__(self):
        return self.job_name
    
class JobsTaken(models.Model):
    id=models.IntegerField(primary_key=True)
    current_job=models.OneToOneField(JobListing, on_delete=models.CASCADE)
    job_doer=models.OneToOneField(System_User, on_delete=models.CASCADE)
    job_status=models.BooleanField(default=False)

    def __str__(self):
        return self.current_job

    
