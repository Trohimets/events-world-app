# Учебная аттестационная работа
Сервис для поиска предельно допустимной цены для лекарств из перечня ЖНЛВ

# Используемые технологии

node Express, React, Postgres, Redux Tool Query (RTQ)

## Как запустить проект:
- Клонировать репозиторий и перейти в него в командной строке:
```
git clone https://github.com/Trohimets/events-world-app.git
```
```
cd events-world-app/front
```
- Установить необходимые зависимости командой:
```
npm isntall
```

- Запустить фронт командой в консоли:
```
npm run start:dev
```
- Перейти в папку back, установить зависимости и запустить бэкенд командой:
```
node app.js
```

## База данных:
Для работы сервиса необходимо развернуть БД Postgres, в которой должны быть созданы две таблицы: 
- users с полями id (serial), username (varchar), password (varchar)
- requests с полями id (serial), user_id (serial, fk с таблицей users), query (varchar), results (jsonb)

При первом запуске необходимо пройти регистрацию, введя имя пользователя и пароль. После авторизации будет доступна страница поиска, где можно ввести название лекарства (например "АЦЦ", "Амброксол"). В таблице с результатами будут выданы результаты поиска, где будет указана предельно допустимая цена, вид упаковки и дозировка, производитель.

На странице истории запросов можно увидеть предыдущие запросы к сервису.

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
