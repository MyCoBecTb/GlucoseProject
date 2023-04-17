from django.db import models
import uuid

class GlucoseEntry(models.Model):
    """
    A single measurement of glucose levels in mmol/L.
    """
    glucose_value = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
    measure_time = models.BigIntegerField()
    guid = models.UUIDField(auto_created=True, default=uuid.uuid4, editable=False)
