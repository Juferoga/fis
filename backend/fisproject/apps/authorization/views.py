from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import AccessToken

class LoginView(APIView):
  def post(self, request):
    try:
      username = request.data.get("username")
      password = request.data.get("password")
      user = authenticate(username=username, password=password)

      if(user is not None):
        access_token = AccessToken.for_user(user=user)
        return Response({
          'token':str(access_token)
        }, status=200)
      return Response({
        'message':f'Usuario no autenticado en Django:{username}'
      }, status=200)
    except Exception as e:
      return Response({"message": str(e)}, status=500)


class LogoutView(APIView):
  pass