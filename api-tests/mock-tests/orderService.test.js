import { createOrder } from './orderService.js';
import { saveOrder } from './db.js';

// Мокаем внешнюю зависимость
jest.mock('./db.js');

describe('createOrder', () => {
  beforeEach(() => {
    // Очищаем все моки перед каждым тестом
    jest.clearAllMocks();
  });

  // 1. Проверка успешного создания заказа с orderId = 1
  test('successfully creates order with orderId = 1', async () => {
    // Настраиваем мок чтобы возвращать true (успешное сохранение)
    saveOrder.mockResolvedValue(true);

    const result = await createOrder(1);

    expect(result).toEqual({ orderId: 1, saved: true });
    expect(saveOrder).toHaveBeenCalledTimes(1);
  });

  // 2. Проверка ошибки при неудачном сохранении
  test('throws error when save fails', async () => {
    // Настраиваем мок чтобы возвращать false (неудачное сохранение)
    saveOrder.mockResolvedValue(false);

    await expect(createOrder(2)).rejects.toThrow('Failed to save order');
    expect(saveOrder).toHaveBeenCalledTimes(1);
  });

  // 3. Проверка, что saveOrder вызывается с правильным orderId
  test('calls saveOrder with correct orderId', async () => {
    saveOrder.mockResolvedValue(true);

    await createOrder(123);

    expect(saveOrder).toHaveBeenCalledWith(123);
    expect(saveOrder).toHaveBeenCalledTimes(1);
  });
});
