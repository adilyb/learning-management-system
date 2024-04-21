from django.db import models

# Create your models here.

class Teacher(models.Model):
    full_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    skills = models.TextField()
    
    class Meta:    
        verbose_name_plural = '1.Teacher'
    
    def __str__(self):
        return self.full_name


class CourseCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    
    class Meta:
        verbose_name_plural = '2.CourseCategory'
        
    def __str__(self):
        return self.title
    

class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    featured_img = models.ImageField(upload_to='course_images/', null=True)
    tech_brief = models.TextField(null=True)
    
    class Meta:
        verbose_name_plural = '3.Course'
        
    def __str__(self):
        return self.title
    

class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.TextField()
    video = models.FileField(upload_to='chapter_videos/', null=True)
    remarks = models.TextField(null=True)
    
    class Meta:
        verbose_name_plural = '4.Chapter'
    
    def __str__(self):
        return self.title
    

class Student(models.Model):
    full_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    qualification = models.CharField(max_length=200)
    mobile_no = models.CharField(max_length=20)
    address = models.TextField()
    interested_categories = models.TextField()
    
    class Meta:
        verbose_name_plural = '5.Student'
    
    def __str__(self):
        return self.full_name
