
from django.urls import path
from . import views
from django.conf import settings
from django.contrib.staticfiles.urls import static
urlpatterns = [
    path('', views.portafolio, name='portafolio'),
    path('show_cv/', views.show_cv, name='show_cv'),
    path('show_spp/', views.show_spp, name='show_spp'),
    path('show_pdb/', views.show_pdb, name='show_pdb'),
    
]+ static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)