export const calculateDiscount = (amount, customerType) => {
  if (typeof amount !== 'number') throw new Error('Amount must be a number');
  if (typeof customerType !== 'string') throw new Error('Customer type must be a string');
  if (amount < 0) return 0;
  if (customerType === 'regular') return amount * 0.1;
  if (customerType === 'premium') return amount * 0.2;
  return 0;
};
