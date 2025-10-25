const { saveOrder } = require('./db');

const createOrder = async (orderId) => {
  const result = await saveOrder(orderId);
  if (!result) throw new Error('Failed to save order');
  return { orderId, saved: true };
};

module.exports = { createOrder };
