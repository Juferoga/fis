from django.contrib.auth.models import AbstractUser, BaseUserManager
from .data import *
from .managers import *
from django.db import models

class User(AbstractUser):
  phone = models.DecimalField(max_digits=20,decimal_places=0,null=True)
  role = models.TextField(choices=ROLES, verbose_name="rol", null=True)

  objects = UserManager()

  def get_phone(self):
    return self.phone
  
  def get_role(self): 
    return self.role

  def __str__(self):
    return f'{self.first_name} {self.last_name}, {self.get_role}'
  
  class Meta:
    verbose_name = "Usuario"
    verbose_name_plural = "Usuarios"