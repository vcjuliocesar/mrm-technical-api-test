from rest_framework import viewsets,permissions,filters
from vehicles.models import Vehicle
from vehicles.api.serializer import VehicleSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = VehicleSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name','brand']