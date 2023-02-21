from django.db import models

class Languajes(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=150,verbose_name="Nombre",null=True)
    descripcion = models.TextField(verbose_name="Descripcion",null=True)
    image = models.ImageField(upload_to='imagenes/',verbose_name="Image",null=True)
    level = models.CharField(max_length=100,verbose_name="Level") 

class Study(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=150,verbose_name="Nombre",null=True)
    descripcion = models.TextField(verbose_name="Descripcion",null=True)
    image = models.ImageField(upload_to='imagenes/',verbose_name="Image",null=True)
    level = models.CharField(max_length=100,verbose_name="Level")  
    
    def __str__(self):
        fila = "Nombre: " +self.nombre + " - " " Descripcion: " +self.descripcion
        return fila
    def delete(self, using:None, keep_parents:False):
        self.image.storage.delete(self.image.name)
        return super().delete()   
    

    
