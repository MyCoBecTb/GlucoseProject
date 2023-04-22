from .models import GlucoseEntry
from .serializers import GlucoseEntrySerializer
from rest_framework import generics


class GlucoseEntriesList(generics.ListCreateAPIView):
    queryset = GlucoseEntry.objects.all()
    serializer_class = GlucoseEntrySerializer


class GlucoseEntriesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = GlucoseEntry.objects.all()
    serializer_class = GlucoseEntrySerializer
    lookup_field = 'guid'
