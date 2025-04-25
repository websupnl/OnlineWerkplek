# Gebruik een officiële lichte Node.js image
FROM node:18-alpine AS builder

# Zet werkdirectory
WORKDIR /app

# Kopieer package.json en package-lock.json (alleen deze eerst, voor caching)
COPY package*.json ./

# Installeer alleen productie-dependencies
RUN npm install

# Kopieer de rest van je app
COPY . .

# Build de app (Next.js production build)
RUN npm run build

# ---- Production image ----
FROM node:18-alpine

WORKDIR /app

# Alleen noodzakelijke bestanden kopiëren vanuit de builder fase
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/next.config.js next.config.js

# Expose port 3000
EXPOSE 3000

# Start de app
CMD ["npm", "start"]
