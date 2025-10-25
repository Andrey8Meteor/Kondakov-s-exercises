const { createOrder } = require('./orderService');
const { saveOrder } = require('./db');

jest.mock('./db');

describe('createOrder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('successfully creates order with orderId = 1', async () => {
    saveOrder.mockResolvedValue(true);
    const result = await createOrder(1);
    expect(result).toEqual({ orderId: 1, saved: true });
    expect(saveOrder).toHaveBeenCalledTimes(1);
  });

  test('throws error when save fails', async () => {
    saveOrder.mockResolvedValue(false);
    await expect(createOrder(2)).rejects.toThrow('Failed to save order');
    expect(saveOrder).toHaveBeenCalledTimes(1);
  });

  test('calls saveOrder with correct orderId', async () => {
    saveOrder.mockResolvedValue(true);
    await createOrder(123);
    expect(saveOrder).toHaveBeenCalledWith(123);
    expect(saveOrder).toHaveBeenCalledTimes(1);
  });
});
