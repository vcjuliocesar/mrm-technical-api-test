from django.db import router
from rest_framework.routers import DefaultRouter
from vehicles.api.views import VehicleViewSet

router = DefaultRouter()
router.register('vehicles',VehicleViewSet,basename='vehicle')
urlpatterns = router.urls