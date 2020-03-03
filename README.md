<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

## Laravel Vue Boilerplate (Current: Laravel 6.*)


Шаблон содержит :
 - vuex, vue-router, vuetify, toast
 - авторизацию, регистрацию (laravel passport)
 - включение, выключение, валидация - Google Two Factor Authentication
 - небольшой конвертор валют
 - редактирование профиля
 - смена пароля

### Установка

Composer - установить зависимости
```shell script
composer install
```

Скопировать .env.example
```shell script
cp .env.example .env
```

Сгенерировать application encryption key
```shell script
php artisan key:generate
```
Установить соединение с базой данных и т.п в .env файле, запустить миграции
```shell script
php artisan migrate
```

Запустить установку passport
```shell script
 php artisan passport:install
```
Указать путь авторизации
```dotenv
PASSPORT_LOGIN_ENDPOINT = http://site.com/oauth/token 
```

Сконфигурировать Password grant client,
данными запуска установки passport
```dotenv
PASSPORT_CLIENT_ID = 
PASSPORT_CLIENT_SECRET = 
```

Установить зависимости для npm
```shell script
npm install
```



