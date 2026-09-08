#!/usr/bin/env bash

set -Eeuo pipefail
umask 022

# =========================================
# ENVIRONMENT
# =========================================

export HOME=/root
export COMPOSER_HOME=/root/.composer
export COMPOSER_ALLOW_SUPERUSER=1
export PATH="/root/.nvm/versions/node/v20.20.2/bin:$PATH"
export PUPPETEER_SKIP_DOWNLOAD=true

APP_PATH="/www/wwwroot/beta.ryudevs.id"
BRANCH="main"
SITE="beta.ryudevs.id"
DEPLOY_ENV="/www/wwwroot/env/.deploy_env"

START_TIME=$(date +%s)
CURRENT_STEP="Initializing deployment"

# =========================================
# LOAD TELEGRAM ENV
# =========================================

if [ -f "$DEPLOY_ENV" ]; then
    source "$DEPLOY_ENV"
else
    echo "WARNING: Telegram env file not found: $DEPLOY_ENV"
    TELEGRAM_BOT_TOKEN=""
    TELEGRAM_CHAT_IDS=""
fi

# =========================================
# TELEGRAM FUNCTION
# =========================================

telegram_send() {
    local MESSAGE="$1"

    # Jangan gagalkan deployment kalau Telegram belum dikonfigurasi
    if [ -z "${TELEGRAM_BOT_TOKEN:-}" ] || [ -z "${TELEGRAM_CHAT_IDS:-}" ]; then
        return 0
    fi

    for CHAT_ID in $TELEGRAM_CHAT_IDS; do
        curl -s \
            --max-time 10 \
            -X POST \
            "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
            -d "chat_id=${CHAT_ID}" \
            --data-urlencode "text=${MESSAGE}" \
            > /dev/null 2>&1 || true
    done
}

# =========================================
# FAILURE HANDLER
# =========================================

deployment_failed() {
    EXIT_CODE=$?

    # Mencegah trap terpanggil lagi di dalam handler
    trap - ERR

    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))

    COMMIT_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "-")
    COMMIT_MSG=$(git log -1 --pretty=%s 2>/dev/null || echo "-")
    COMMIT_DEVELOPER=$(git log -1 --pretty=%an 2>/dev/null || echo "-")

    telegram_send "❌ DEPLOYMENT GAGAL

🌐 Site: ${SITE}
🌿 Branch: ${BRANCH}
👤 Developer: ${COMMIT_DEVELOPER}
🔖 Commit: ${COMMIT_HASH}
💬 Message: ${COMMIT_MSG}

⚠️ Gagal pada:
${CURRENT_STEP}

⏱️ Durasi: ${DURATION} detik
🕒 $(date '+%d-%m-%Y %H:%M:%S')"

    echo ""
    echo "========================================"
    echo "❌ DEPLOYMENT FAILED"
    echo "========================================"
    echo "Site      : ${SITE}"
    echo "Step      : ${CURRENT_STEP}"
    echo "Exit code : ${EXIT_CODE}"
    echo "Commit    : ${COMMIT_HASH}"
    echo "Duration  : ${DURATION} seconds"
    echo "========================================"

    exit "$EXIT_CODE"
}

trap deployment_failed ERR

# =========================================
# START
# =========================================

echo "========================================"
echo "Deployment started: $(date)"
echo "Site: ${SITE}"
echo "Branch: ${BRANCH}"
echo "========================================"

cd "$APP_PATH"

# =========================================
# UPDATE REPOSITORY
# =========================================

CURRENT_STEP="Updating repository"

echo ""
echo "==> Updating repository"

git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

COMMIT_HASH=$(git rev-parse --short HEAD)
COMMIT_FULL=$(git rev-parse HEAD)
COMMIT_MSG=$(git log -1 --pretty=%s)
COMMIT_DEVELOPER=$(git log -1 --pretty=%an)

# =========================================
# TELEGRAM START
# =========================================

telegram_send "🚀 DEPLOYMENT DIMULAI

🌐 Site: ${SITE}
🌿 Branch: ${BRANCH}
👤 Developer: ${COMMIT_DEVELOPER}
🔖 Commit: ${COMMIT_HASH}
💬 Message: ${COMMIT_MSG}

🕒 $(date '+%d-%m-%Y %H:%M:%S')"

# =========================================
# PREPARE LARAVEL DIRECTORIES
# =========================================

CURRENT_STEP="Preparing Laravel directories"

echo ""
echo "==> Preparing Laravel directories"

mkdir -p storage/framework/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/logs
mkdir -p bootstrap/cache

chown -R www:www storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

# =========================================
# COMPOSER
# =========================================

CURRENT_STEP="Installing PHP dependencies"

echo ""
echo "==> Installing PHP dependencies"

composer install \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader

# =========================================
# NODE DEPENDENCIES
# =========================================

CURRENT_STEP="Installing Node dependencies"

echo ""
echo "==> Cleaning old Node dependencies"

rm -rf node_modules

echo "==> Installing Node dependencies"

npm install

echo "==> Fixing Node executable permissions"

chmod 755 node_modules/vite/bin/vite.js 2>/dev/null || true
chmod 755 node_modules/@esbuild/linux-x64/bin/esbuild 2>/dev/null || true

# Fix executable pada semua command di .bin
find node_modules/.bin -type f -exec chmod 755 {} \; 2>/dev/null || true

# =========================================
# FRONTEND BUILD
# =========================================

CURRENT_STEP="Building frontend assets"

echo ""
echo "==> Building frontend"

npm run build

# =========================================
# CLEAR OLD LARAVEL CACHE
# =========================================

CURRENT_STEP="Clearing Laravel cache"

echo ""
echo "==> Clearing Laravel cache"

php artisan optimize:clear

# =========================================
# DATABASE FRESH MIGRATION + SEED
# =========================================

CURRENT_STEP="Resetting database and running seeders"

echo ""
echo "==> Fresh migration & database seeding"

php artisan migrate:fresh --seed --force

# =========================================
# CREATE PRODUCTION CACHE
# =========================================

CURRENT_STEP="Creating Laravel cache"

echo ""
echo "==> Creating Laravel cache"

php artisan config:cache
php artisan route:cache
php artisan view:cache

# =========================================
# FINAL PERMISSIONS
# =========================================

CURRENT_STEP="Fixing final permissions"

echo ""
echo "==> Fixing permissions"

chown -R www:www storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

# =========================================
# SUCCESS
# =========================================

trap - ERR

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

telegram_send "✅ DEPLOYMENT BERHASIL

🌐 Site: ${SITE}
🌿 Branch: ${BRANCH}
👤 Developer: ${COMMIT_DEVELOPER}
🔖 Commit: ${COMMIT_HASH}
💬 Message: ${COMMIT_MSG}

⏱️ Durasi: ${DURATION} detik
🕒 $(date '+%d-%m-%Y %H:%M:%S')"

echo ""
echo "========================================"
echo "🚀 APPLICATION DEPLOYED SUCCESSFULLY"
echo "========================================"
echo "Site      : ${SITE}"
echo "Branch    : ${BRANCH}"
echo "Commit    : ${COMMIT_HASH}"
echo "Developer : ${COMMIT_DEVELOPER}"
echo "Message   : ${COMMIT_MSG}"
echo "Duration  : ${DURATION} seconds"
echo "Finished  : $(date)"
echo "========================================"