from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def test_function(request):
    return HttpResponse(" SucessFully Submitted")