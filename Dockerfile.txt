# Gebruik een lichtgewicht Node image
FROM node:18-alpine

# Maak werkdirectory aan
WORKDIR /app

# Kopieer alles naar de container
COPY . .

# Installeer dependencies
RUN npm install

# Build de Next.js app
RUN npm run build

# Expose poort 3000
EXPOSE 3000

# Start de app
CMD ["npm", "start"]
