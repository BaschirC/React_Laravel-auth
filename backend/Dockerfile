FROM ubuntu:20.04

LABEL maintainer="Taylor Otwell"

WORKDIR /var/www/html

# Set timezone (optional)
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install core dependencies and tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    gnupg \
    gosu \
    software-properties-common \
    curl \
    ca-certificates \
    zip \
    unzip \
    git \
    supervisor \
    sqlite3 \
    libcap2-bin \
    cron \
    libnss3 \
    libxss1 \
    libasound2 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libexpat1 \
    libfontconfig1 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxtst6 \
    libgbm-dev \
    libxshmfence-dev \
    fonts-liberation \
    xdg-utils \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Install PHP and Composer
RUN add-apt-repository ppa:ondrej/php \
    && apt-get update && apt-get install -y --no-install-recommends \
    php8.2-cli \
    php8.2-dev \
    php8.2-pgsql \
    php8.2-sqlite3 \
    php8.2-gd \
    php8.2-curl \
    php8.2-memcached \
    php8.2-imap \
    php8.2-mysql \
    php8.2-mbstring \
    php8.2-xml \
    php8.2-zip \
    php8.2-bcmath \
    php8.2-soap \
    php8.2-intl \
    php8.2-readline \
    php8.2-msgpack \
    php8.2-igbinary \
    php8.2-ldap \
    php8.2-redis \
    && php -r "readfile('https://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Node.js, Yarn, and Puppeteer
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get update && apt-get install -y --no-install-recommends \
    nodejs \
    mysql-client \
    && npm install --location=global --unsafe-perm puppeteer \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set up PHP capabilities and Supervisor
RUN setcap "cap_net_bind_service=+ep" /usr/bin/php8.2

# Expose necessary ports
EXPOSE 8080 443 80

# Copy necessary files and scripts
COPY docker/startcontainer /usr/local/bin/startcontainer
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/php.ini /etc/php/8.2/cli/conf.d/99-sail.ini

RUN chmod +x /usr/local/bin/startcontainer

# Copy application files
ADD . /var/www/html

# Set entrypoint
ENTRYPOINT ["startcontainer"]
