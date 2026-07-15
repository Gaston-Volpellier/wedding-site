# Small, production-oriented image for running the chatbot backend on
# Google Cloud Run.

FROM node:20-slim

WORKDIR /app

# Copy just the package files first so Docker can cache the
# `npm install` layer and skip it on rebuilds that don't touch dependencies.
COPY package*.json ./

# --omit=dev: skip devDependencies, keep the image small.
RUN npm install --omit=dev

# Now copy the rest of the source code.
COPY . .

# Cloud Run sets PORT automatically at runtime; 8080 is just the default
# used when running this image locally.
ENV PORT=8080
EXPOSE 8080

CMD ["node", "src/index.js"]
