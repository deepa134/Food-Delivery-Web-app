from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework .response import Response
from .models import Item,Order,OrderItem
from .serializers import ItemSerializer,OrderSerializer
from django.contrib.auth.models import User
import json

@api_view(['GET'])
def get_items(request):
    items=Item.objects.filter(is_available=True)
    serializer=ItemSerializer(items,many=True)
    return Response(serializer.data)

def create_order(request):
    user=User.objects.get(id=request.data['user_id'])
    cart_items=request.data['cart_items']
    total=request.data['total_amount']
    order=Order.objects.create(user=user,
    total_amount=total,status="pending")
    for c in cart_item:
        item=Item.objects.get(id=s['item_id'])
        OrderItem=objects.create(
            order=order,
            item=item,
            quantity=c['qty'],
            price=item.price*c['qty']
        )
    return Response({"order_id":order_id,"message":"Order placed successfully"})
@api_view(['GET'])
def user_orders(request,user_id):
    orders=Order.objects.filter(user__id=user_id).order_by('-created_at')
    serializer=OrderSerializer(orders,many=True)
    return Response(serializer.data)