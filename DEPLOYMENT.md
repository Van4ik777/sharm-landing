# Развертывание React приложения с Docker

## Подготовка сервера

### 1. Установка Docker и Docker Compose

```bash
# Для Ubuntu/Debian
sudo apt update
sudo apt install docker.io docker-compose -y
sudo systemctl start docker
sudo systemctl enable docker

# Добавить пользователя в группу docker
sudo usermod -aG docker $USER
```

### 2. Клонирование проекта

```bash
git clone <your-repo-url>
cd sharm-landing
```

## Развертывание

### Вариант 1: HTTP (для тестирования)

```bash
# Сборка и запуск
docker-compose up -d --build

# Проверка статуса
docker-compose ps

# Просмотр логов
docker-compose logs -f web
```

Приложение будет доступно по адресу: `http://your-server-ip`

### Вариант 2: HTTPS с SSL сертификатом

#### Получение SSL сертификата (Let's Encrypt)

```bash
# Установка certbot
sudo apt install certbot -y

# Получение сертификата
sudo certbot certonly --standalone -d your-domain.com

# Копирование сертификатов в проект
sudo mkdir -p ./ssl
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ./ssl/cert.pem
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ./ssl/key.pem
sudo chown -R $USER:$USER ./ssl
```

#### Настройка Nginx для HTTPS

1. Раскомментируйте HTTPS секцию в `nginx.conf`
2. Замените `your-domain.com` на ваш домен
3. Пересоберите контейнер:

```bash
docker-compose down
docker-compose up -d --build
```

## Настройка DNS

1. **A запись**: Укажите IP адрес вашего сервера
   - Тип: A
   - Имя: @ (или ваш домен)
   - Значение: IP-адрес сервера

2. **WWW запись** (опционально):
   - Тип: A
   - Имя: www
   - Значение: IP-адрес сервера

## Управление

### Обновление приложения

```bash
# Pull изменений
git pull

# Пересборка и запуск
docker-compose down
docker-compose up -d --build
```

### Остановка

```bash
docker-compose down
```

### Перезапуск

```bash
docker-compose restart web
```

## Мониторинг

### Просмотр логов

```bash
# Все логи
docker-compose logs

# Логи веб-сервиса
docker-compose logs web

# Логи в реальном времени
docker-compose logs -f web
```

### Проверка статуса

```bash
docker-compose ps
docker stats
```

## Безопасность

### Базовая настройка

```bash
# Настройка firewall (UFW)
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
```

### Автообновление SSL

```bash
# Добавить в crontab
sudo crontab -e

# Добавить строку для автообновления (ежемесячно)
0 0 1 * * certbot renew --quiet && docker-compose restart web
```

## Troubleshooting

### Проблема: Порт уже занят

```bash
# Проверить что использует порт
sudo netstat -tulpn | grep :80

# Остановить conflicting сервис
sudo systemctl stop nginx  # если установлен другой nginx
```

### Проблема: Сборка не удалась

```bash
# Очистка кэша Docker
docker system prune -a

# Пересборка с нуля
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Проблема: 502 Bad Gateway

```bash
# Проверить логи
docker-compose logs web

# Проверить статус контейнера
docker-compose ps
```

## Продвинутая конфигурация

### Добавление переменных окружения

Создайте файл `.env`:

```env
NODE_ENV=production
REACT_APP_API_URL=https://api.your-domain.com
```

Измените `docker-compose.yml`:

```yaml
services:
  web:
    env_file:
      - .env
```

### Кастомизация Nginx

Для дополнительной конфигурации создайте `nginx-custom.conf` и подключите его в `nginx.conf`.

## Резервное копирование

```bash
# Экспорт контейнера
docker save sharm-landing_web > backup.tar

# Восстановление
docker load < backup.tar
```
