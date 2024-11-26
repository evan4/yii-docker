FROM php:8.1-fpm

RUN apt-get update
RUN apt-get install -y curl git zip
RUN docker-php-ext-install pdo pdo_mysql
# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin  --filename=composer composer clear-cache

WORKDIR /var/www

ENTRYPOINT ["php-fpm"]
