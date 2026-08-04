# Multi-stage Dockerfile for PDFAfy Production Deployment
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build static site
COPY . .
RUN npm run build

# Production Nginx Stage
FROM nginx:alpine AS runner

COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
