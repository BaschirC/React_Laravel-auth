# Ultra horeca

## Laravel Filament

### Postman collection & documentation to be found in the postman folder.

how to run:

Clone the repo

```
composer install
npm install
npm run build
```

If you are using sqlite(we use it at the moment) run the migration and seeder too.

```
php artisan migrate --force --seed # this will create sqlite database and migrate.
```

Finally

```
npm run dev
php artisan serve
```

An account is created with the seeder and you can login with:
developer@ugs.ro
Password123..