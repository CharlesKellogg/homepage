FROM node:24-alpine AS base

### Dependencies ###
FROM base AS deps
RUN apk add --no-cache libc6-compat git

# Set up pnpm environment
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile

# Builder
FROM base AS builder

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy the appropriate .env file
COPY .env.$SETUP_ENVIRONMENT .env

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build


### Production image runner ###
FROM base AS runner

# Set NODE_ENV to production
ENV NODE_ENV production

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Set correct permissions for nextjs user and don't run as root
RUN addgroup nodejs
RUN adduser -SDH nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

# Exposed port (for orchestrators and dynamic reverse proxies)
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q0", "http://localhost:3000/health" ]

# Run the nextjs app
CMD [ "node", "server.js" ]
