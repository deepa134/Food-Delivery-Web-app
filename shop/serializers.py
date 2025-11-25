from rest_framework import  serializers
from .models import Item,OrderItem,Order

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Item
        fields='__all__'
class OrderItemSerializer(serializers.ModelSerializer):
    item=ItemSerializer()#fr item field dont just include the id include other details as well
    class Meta:
        model=OrderItem
        fields=('item','quantity','price')

class OrderSerializer(serializers.ModelSerializer):
    item=OrderItemSerializer(source='orderitem_set',many=True)
    class Meta:
        model=Order
        fields=('id','user','status','total_amount','created_at','items')