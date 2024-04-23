from django.urls import path
from . import views

urlpatterns = [
    path('teacher/', views.TeacherList.as_view()),
    path('teacher/<int:pk>', views.TeacherDetail.as_view()),
    path('teacher/login', views.teacher_login),
    path('category-list', views.CategoryList.as_view()),
    path('course-add', views.CourseList.as_view()),
    path('chapter-add', views.ChapterList.as_view()),
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()),
    path('all-chapter/<int:course_id>', views.CourseChapterList.as_view()),  
    path('chapter/<int:pk>', views.ChapterDetailView.as_view()),  
    
]
