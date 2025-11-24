from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone

User=get_user_model()
class Item(models.Model):
    name=models.CharField(max_length=100,unique=True)
    price=models.DecimalField(max_digits=6,decimal_places=2)
    is_available=models.BooleanField(default=True)

    def __str__(self):
        return self.name
class Order(models.Model):
    STATUS_CHOICES=[('PENDING','pending'),
                    ('DELIVERED','delivered'),
                    ('CANCELLED','cancelled',)]
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    created_at=models.DateTimeField(default=timezone.now)
    status=models.CharField(max_length=20,choices=STATUS_CHOICES,default='PENDING')
    total_amount=models.DecimalField(max_digits=6,decimal_places=2,default=0)
    address=models.TextField()
    phone=models.CharField(max_length=20)

    def __str__(self):
        return f"order #{self.id} by {self.user.username}"
class OrderItem(models.Model):
    order=models.ForeignKey(Order,on_delete=models.CASCADE,related_name='order_items')
    item=models.ForeignKey(Item,on_delete=models.SET_NULL,null=True)
    quantity=models.PositiveIntegerField(default=1)
    price=models.DecimalField(max_digits=6,decimal_places=2)

    def subtotal(self):
        return self.quantity * self.price