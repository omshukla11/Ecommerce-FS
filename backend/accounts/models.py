from django.db import models

from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager)
# Create your models here.


class UserManager(BaseUserManager):
    def create_superuser(self, first_name, last_name, email, password=None ,is_active=True, is_staff=True, is_admin=True, **other):
        if not email:
            raise ValueError("User must have an email address")
        if not password:
            raise ValueError("User must have an password")
        user_obj = self.model(
            email = self.normalize_email(email)
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.save(using=self._db)
        user_obj.first_name = first_name
        user_obj.last_name = last_name
        return user_obj

    def create_staffuser(self,first_name, last_name, email, password=None):
        user = self.create_superuser(
            first_name,
            last_name,
            email,
            password=password,
            is_admin=False
        )
        return user
    
    def create_user(self,first_name, last_name, email, password=None):
        user = self.create_superuser(
            first_name,
            last_name,
            email,
            password=password,
            is_admin=False,
            is_staff=False,
            is_active=False
        )
        return user

    


class User(AbstractBaseUser):

    email     = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    active    = models.BooleanField(default=True)
    staff     = models.BooleanField(default=False)
    admin     = models.BooleanField(default=False)
    profile_pic = models.ImageField(default='default.jpg', upload_to='userprofilepics/')

    USERNAME_FIELD = 'email'

    objects = UserManager()

    def __str__(self):
        return self.email

    def get_full_name(self):
        return (self.first_name + self.last_name)

    def get_short_name(self):
        return self.first_name

    def has_module_perms(self, app_label):
        return True

    def has_perm(self, app_label):
        return True

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_active(self):
        return self.active

    @property
    def is_buyer(self):
        return self.buyer

    @property
    def is_seller(self):
        return self.seller