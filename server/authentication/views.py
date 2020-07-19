from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import permissions


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def pingPublic(request):
    return Response({"message": "ping public"})


@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated,))
def pingPrivate(request):
    return Response({"message": "ping private"})
