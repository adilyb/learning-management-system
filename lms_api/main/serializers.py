from rest_framework import serializers
from . import models

class TeacherSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['full_name', 'password', 'qualification', 'mobile_no', 'address']