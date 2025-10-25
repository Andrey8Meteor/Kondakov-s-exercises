import { saveOrder } from './db.js';

export const createOrder = async (orderId) => {
  const result = await saveOrder(orderId);
  if (!result) throw new Error('Failed to save order');
  return { orderId, saved: true };
};
