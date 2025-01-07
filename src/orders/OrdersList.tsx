import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';

interface Order {
  OrderID: number;
  LeadID: number;
  ProductID: number;
  Quantity: number;
  TotalAmount: number;
  PaymentStatus: string;
  OrderStatus: string;
}

const OrdersList = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://d0rgham.pythonanywhere.com/api/orders/');
        setOrders(response.data);
      } catch (err) {
        setError('Failed to fetch orders');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.OrderID} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 p-2 rounded-full">
                <ShoppingCart className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium">Order #{order.OrderID}</p>
                <p className="text-sm text-gray-500">Lead ID: {order.LeadID}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">${order.TotalAmount}</p>
              <p
                className={`text-sm ${
                  order.OrderStatus === 'Shipped' ? 'text-green-500' :
                  order.OrderStatus === 'Processing' ? 'text-yellow-500' : 'text-gray-500'
                }`}
              >
                {order.OrderStatus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;