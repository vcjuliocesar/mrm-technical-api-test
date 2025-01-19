from rest_framework import viewsets,permissions
from vehicles.models import Vehicle
from vehicles.api.serializer import VehicleSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = VehicleSerializer