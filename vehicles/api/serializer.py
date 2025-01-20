from rest_framework import serializers
from vehicles.models import Vehicle

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:    
        model = Vehicle
        fields = '__all__'

    def validate_year(self,value):
        if value < 2000 or value > 2025:
            raise serializers.ValidationError("The year must be between 2000 and 2025.")
        return value

    def validate_price(self,value):
        if value <= 0:
            raise serializers.ValidationError("The price cannot be 0.")
        return value
            