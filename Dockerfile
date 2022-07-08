FROM node:16-alpine

ARG NPM_AUTH_TOKEN
ENV PORT=3000 \
    NODE_ENV=production

WORKDIR /app

COPY .env* /app/
COPY public /app/public
COPY .next/static /app/.next/static
COPY .next/standalone /app/
COPY next.config.js /app/
COPY next-logger.config.js /app/
COPY sentry.client.config.js /app/
COPY sentry.server.config.js /app/
COPY src/**/**/**/*.graphqls /app/

EXPOSE 3000
USER node

CMD ["node", "server.js"]

