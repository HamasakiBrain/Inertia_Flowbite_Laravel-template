## First run
1. Install npm modules
   ```bash
    npm install
    ```
2. Install composer modules
    ```bash
      composer install
      ```
3. Create .env file
    ```bash
      cp .env.example .env
      ```
4. Generate application key
  ```bash
    php artisan key:generate
```
5. Create database
6. Set database credentials in ```.env ``` file
7. Migrate database
    ```bash
      php artisan migrate
      ```

## Development
1. Run vite
    ```bash
      npm run dev
      ```
2. Run laravel
    ```bash
      php artisan serve
      ```
3. Open http://localhost:8000

## MultiLanguage
1. Add Language [guide](https://publisher.laravel-lang.com/using/)
    ```bash
      php artisan lang:add <language>
      ```
2. Run command
    ```bash
     php artisan vue-i18n:generate
      ```


