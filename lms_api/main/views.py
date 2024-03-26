from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import TeacherSerializers
from .models import *
from rest_framework.response import Response
# Create your views here.

class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializers

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializers
    
    