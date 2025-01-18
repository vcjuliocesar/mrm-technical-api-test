from django.db import models

# Create your models here.
class Vehicle(models.Model):

    brand = models.CharField(max_length = 100)
    name = models.CharField(max_length = 100)
    year = models.PositiveSmallIntegerField()
    vehicle_model = models.CharField(max_length = 100)
    price = models.DecimalField(max_digits = 10,decimal_places=2)
    status = models.BooleanField(default=True)