# Step 1: Build the Nuxt.js app
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build

# Step 2: Serve the app in production
# FROM node:18 AS production

# Set working directory
# WORKDIR /app

# Install only production dependencies
# COPY package.json package-lock.json ./
# RUN npm install --production

# Copy built Nuxt.js app from builder stage
# COPY --from=builder /app/.nuxt .nuxt
# COPY --from=builder /app/static static
# COPY --from=builder /app/package.json package.json

# Expose the port the app will run on
EXPOSE 3000

# Start the app in production mode
CMD ["npm", "run", "dev"]
