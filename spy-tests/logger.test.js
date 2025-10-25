import { logMessage } from './logger.js';

describe('logMessage', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Создаем spy на console.log перед каждым тестом
    consoleLogSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    // Восстанавливаем оригинальный console.log после каждого теста
    consoleLogSpy.mockRestore();
  });

  // 1. Проверьте, что console.log вызывается с правильным сообщением для валидного message
  test('calls console.log with correct message for valid input', () => {
    const result = logMessage('Hello World');
    
    expect(consoleLogSpy).toHaveBeenCalledWith('Message: Hello World');
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe('Logged: Hello World');
  });

  // 2. Проверьте, что console.log вызывается с Empty message для пустого message
  test('calls console.log with Empty message for empty input', () => {
    const result = logMessage('');
    
    expect(consoleLogSpy).toHaveBeenCalledWith('Empty message');
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe('Error: No message');
  });

  // 3. Используйте .mockImplementation для console.log, чтобы добавить префикс Test:
  test('uses mockImplementation to add Test: prefix', () => {
    // Сохраняем оригинальную реализацию
    const originalLog = console.log;
    
    // Создаем mock реализацию с префиксом
    consoleLogSpy.mockImplementation((message) => {
      originalLog(`Test: ${message}`);
    });

    const result = logMessage('Mocked message');
    
    expect(consoleLogSpy).toHaveBeenCalledWith('Message: Mocked message');
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe('Logged: Mocked message');
    
    // Проверяем что mockImplementation работала
    // (это можно проверить через дополнительный spy или другие методы)
  });

  // Дополнительный тест для null/undefined
  test('handles null and undefined messages', () => {
    const resultNull = logMessage(null);
    expect(consoleLogSpy).toHaveBeenCalledWith('Empty message');
    expect(resultNull).toBe('Error: No message');

    // Очищаем calls для следующей проверки
    consoleLogSpy.mockClear();

    const resultUndefined = logMessage(undefined);
    expect(consoleLogSpy).toHaveBeenCalledWith('Empty message');
    expect(resultUndefined).toBe('Error: No message');
  });
});
