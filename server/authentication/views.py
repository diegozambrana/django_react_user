from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny
)
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes((AllowAny,))
def pingPublic(request):
    return Response({"message": "ping public"})


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def pingPrivate(request):
    return Response({"message": "ping private"})
