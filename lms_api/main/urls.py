from django.urls import path
from . import views

urlpatterns = [
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>', views.TeacherDetail.as_view()),
    path('teacher/login', views.teacher_login),
    path('category-list', views.CategoryList.as_view()),
    path('course_add', views.CourseList.as_view()),
    path('chapter_add', views.ChapterList.as_view()),
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()),
    
    
    
    
    
]
