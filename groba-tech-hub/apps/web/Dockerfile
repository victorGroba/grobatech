# apps/web/Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
# Assuming the package.json will be created in Fase 2
RUN npm install || echo "No package.json yet, skipping install"

COPY . .
# Let Next.js build standalone
RUN npm run build || echo "No build script yet, skipping build"

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# We will use standalone mode in next.config.js for optimized docker image
COPY --from=builder /app/ ./

EXPOSE 3000

# Fallback command for production (runs the built application)
CMD ["npm", "start"]
