from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import TeacherSerializers
from .models import *
from rest_framework.response import Response
from rest_framework import permissions
# Create your views here.

class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializers
    # permission_classes = [permissions.IsAuthenticated]
    
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializers
    
    