from diary_main.models import GlucoseEntry
from diary_main.serializers import GlucoseEntrySerializer
from rest_framework import generics


class GlucoseEntriesList(generics.ListCreateAPIView):
    queryset = GlucoseEntry.objects.all()
    serializer_class = GlucoseEntrySerializer


class GlucoseEntriesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = GlucoseEntry.objects.all()
    serializer_class = GlucoseEntrySerializer
    lookup_field = 'guid'
