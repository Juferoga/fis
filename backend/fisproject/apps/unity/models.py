from django.db import models

class Unity(models.Model):
  pk_id       = models.AutoField(primary_key=True)
  t_name      = models.CharField(max_length=30)
  t_location  = models.CharField(max_length=30)
