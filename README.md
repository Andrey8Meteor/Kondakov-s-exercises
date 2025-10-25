# Kondakov Exercises Collection

## 📚 Список заданий

### 1. Math Tests
- **Папка**: `math-exercise/`
- **Запуск**: `npm run test:math`
- **Описание**: Функция деления с unit-тестами на Jest

### 2. Customer Journey Map
- **Папка**: `customer-journey-map/`
- **Файлы**: 
  - [README.md](./customer-journey-map/README.md) - основное описание
  - [feedback.md](./customer-journey-map/feedback.md) - обратная связь
  - [assets/cjm-diagram.txt](./customer-journey-map/assets/cjm-diagram.txt) - визуализация
- **Описание**: Карта путешествия пользователя для тренажёра программирования

### 3. API Tests
- **Папка**: `api-tests/`
- **Запуск**: `cd api-tests && npm test`
- **Файлы**:
  - [api.js](./api-tests/api.js) - асинхронная функция fetchPost
  - [api.test.js](./api-tests/api.test.js) - тесты для API
- **Описание**: Тестирование асинхронных функций и промисов

### 4. Utils Tests
- **Папка**: `utils-tests/`
- **Запуск**: `cd utils-tests && npm test`
- **Файлы**:
  - [utils.js](./utils-tests/utils.js) - функция restrictLength
  - [utils.test.js](./utils-tests/utils.test.js) - параметризованные тесты
- **Описание**: Параметризованное тестирование с jest.each()

### 5. Mock Tests
- **Папка**: `mock-tests/`
- **Запуск**: `cd mock-tests && npm test`
- **Файлы**:
  - [orderService.js](./mock-tests/orderService.js) - функция createOrder
  - [db.js](./mock-tests/db.js) - внешняя зависимость
  - [orderService.test.js](./mock-tests/orderService.test.js) - тесты с моками
- **Описание**: Тестирование с моками внешних зависимостей

### 6. Spy Tests
- **Папка**: `spy-tests/`
- **Запуск**: `cd spy-tests && npm test`
- **Файлы**:
  - [logger.js](./spy-tests/logger.js) - функция logMessage
  - [logger.test.js](./spy-tests/logger.test.js) - тесты с jest.spyOn
- **Описание**: Тестирование с spy на встроенные функции

### 7. Coverage Tests
- **Папка**: `coverage-tests/`
- **Запуск**: `cd coverage-tests && npm test`
- **Покрытие**: `cd coverage-tests && npm run test:coverage`
- **Файлы**:
  - [math.js](./coverage-tests/math.js) - функция calculateDiscount
  - [math.test.js](./coverage-tests/math.test.js) - тесты с 100% покрытием
- **Описание**: Достижение 100% покрытия кода с test.each()

## 🚀 Как использовать
1. Клонируйте репозиторий: `git clone https://github.com/Andrey8Meteor/Kondakov-s-exercises.git`
2. Перейдите в папку нужного задания
3. Следуйте инструкциям в README.md

## 📞 Контакты
- **Автор**: Андрей
- **GitHub**: [Andrey8Meteor](https://github.com/Andrey8Meteor)
