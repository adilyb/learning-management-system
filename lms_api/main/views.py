from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import TeacherSerializers, CategoryListSerializers, CourseSerializers
from .models import *
from rest_framework.response import Response
from rest_framework import permissions
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializers
    # permission_classes = [permissions.IsAuthenticated]
    
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializers

@csrf_exempt
def teacher_login(request):
    email = request.POST['email']
    password = request.POST['password']
    teacherData = Teacher.objects.get(email=email, password=password)
    
    if teacherData:
        return JsonResponse ({'bool':True})
    else :
        return JsonResponse ({'bool':False})
        

class CategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CategoryListSerializers
    
    
class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializers