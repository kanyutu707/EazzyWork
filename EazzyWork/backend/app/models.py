from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.EmailField(max_length=255, unique=True)
    password=models.CharField(max_length=255)
    resume=models.CharField(max_length=255)
    username=None

    USERNAME_FIELD='email'

    REQUIRED_FIELDS=[]
    role=models.CharField(max_length=255)
   
    def  __str__(self):
        return self.first_name


class JobListing(models.Model):
    id=models.BigAutoField(primary_key=True)
    job_name=models.CharField(max_length=255)
    job_description=models.CharField(max_length=255)
    job_poster=models.CharField(max_length=255)
    job_status=models.BooleanField(default=False)
    job_price=models.IntegerField()

    

    def __str__(self):
        return self.job_name
    
class JobsTaken(models.Model):
    id=models.BigAutoField(primary_key=True)
    current_job=models.IntegerField()
    job_doer=models.CharField(max_length=255)
    job_status=models.BooleanField(default=False)
    bid_amount=models.IntegerField()

    def __str__(self):
        return self.current_job

    
