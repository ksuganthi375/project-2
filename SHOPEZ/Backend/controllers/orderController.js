import Order from '../models/order.js';

export const createOrder = async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    if (!userId || !items) return res.status(400).json({ message: 'Missing fields' });
    const order = new Order({ userId, items, total });
    await order.save();
    res.json({ success: true, order });
  } catch (err) {
    console.error('Create order error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const fetchOrders = async (req, res) => {
  try {
    const userId = req.query.userId;
    const orders = userId ? await Order.find({ userId }) : await Order.find().limit(100);
    res.json({ success: true, orders });
  } catch (err) {
    console.error('Fetch orders error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

