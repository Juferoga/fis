from django.urls import path
from .views import LoginView, LogoutView

urlpatterns=[
    path('login/', LoginView.as_view(), name='users_login'),
    path('logout/', LogoutView.as_view(), name='users_logout'),
]