from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken
from .models import User

class createUserView (APIView):
  permission_classes = [IsAuthenticated]

  def post (self, request):
    # TODO: Usar serializadores
    pass
