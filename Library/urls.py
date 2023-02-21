
from django.urls import path
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static
urlpatterns = [
    path('', views.portafolio, name='portafolio'),
    path('languages/', views.languages, name='languages'),
    path('add/', views.add, name='add'),
    path('edit/', views.edit, name='edit'),
    path('delete/<int:id>', views.delete, name='delete'),
    path('edit/<int:id>', views.languages, name='edit'),
    
]+ static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)