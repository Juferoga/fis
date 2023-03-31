from django.urls import path, include

urlpatterns = [
    path('auth/', include('apps.authorization.urls')),
    path('movies/', include('apps.authorization.urls')),
    path('show/', include('apps.authorization.urls')),
    path('snacks/', include('apps.authorization.urls')),
    path('ticket/', include('apps.authorization.urls')),
    path('user/', include('apps.authorization.urls')),
]
