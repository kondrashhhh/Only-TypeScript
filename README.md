markdown
# Тестовое задание для вакансии Frontend-разработчик в Only (Next.js, React)

## Установка и запуск проекта

### Быстрый старт

1. **Клонируйте репозиторий**:
   ```bash
   git init
   git remote add origin https://github.com/kondrashhhh/Only-TypeScript.git
   git pull origin master

2. **Установите зависимости**:
   ```bash
   npm install

3. **Запустите проект**:
   ```bash
  npm start

4. **Откройте в браузере**:
   ```bash
   http://localhost:3000


## Проверка работы компонентов
Чтобы проверить работу нескольких компонентов AnimationSlider на одной странице:

Откройте файл:
/src/pages/Home/Home.tsx

Добавьте дополнительные компоненты:

```tsx
<AnimationSlider />
<AnimationSlider />
<AnimationSlider />

Структура проекта
```text
src/
├── components/       # Общие компоненты
├── pages/            # Страницы приложения
│   └── Home/         # Главная страница
│       ├── AnimationSlider/  # Основной компонент слайдера
│       └── Home.tsx  # Точка входа
├── styles/           # Глобальные стили
└── types/            # Типы TypeScript

Скрипты
npm start - запуск dev-сервера

npm build - сборка проекта

npm test - запуск тестов