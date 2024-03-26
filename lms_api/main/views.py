from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import TeacherSerializers
from .models import *
from rest_framework.response import Response
# Create your views here.

class TeacherList(APIView):
    def get(self, request):
        teacher = Teacher.objects.all()
        serializer = TeacherSerializers(teacher, many=True)
        return Response(serializer.data)