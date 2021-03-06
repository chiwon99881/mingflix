from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class TimeStampModel(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class User(AbstractUser):

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female')
    )

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True, max_length=255)
    profile_image = models.ImageField(null=True, blank=True)
    phone = models.CharField(max_length=140, null=True)
    gender = models.CharField(max_length=50, choices=GENDER_CHOICES, null=True)
    followers = models.ManyToManyField("self", blank=True, symmetrical=False, related_name="followers_set")
    following = models.ManyToManyField("self", blank=True, symmetrical=False, related_name="following_set")
    is_streaming = models.BooleanField(default=False)

    def __str__(self):
        return self.username

    def followers_count(self):
        return self.followers.all().count()

    def following_count(self):
        return self.following.all().count()

    def post_count(self):
        return self.videos.all().count()


class Channel(TimeStampModel):

    channel_name = models.CharField(_("Name"), max_length=255, unique=True, blank=True)
    channel_caption = models.CharField(_("Caption"), max_length=255, blank=True)
    creator = models.OneToOneField(User, on_delete=models.CASCADE, related_name="channel")
    stream_key = models.CharField(max_length=255, unique=True, null=True, blank=True)

    def __str__(self):
        return self.channel_name
