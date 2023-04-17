from rest_framework.serializers import ModelSerializer
from .models import GlucoseEntry

class GlucoseEntrySerializer(ModelSerializer):
    class Meta:
        model = GlucoseEntry
        fields = ['glucose_value', 'measure_time', 'guid']
