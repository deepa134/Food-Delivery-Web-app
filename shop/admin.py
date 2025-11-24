from django.contrib import admin
from .models import Item, Order, OrderItem


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'is_available')


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    readonly_fields = ('item', 'quantity', 'price')
    can_delete = False
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'status', 'total_amount')
    inlines = [OrderItemInline]
