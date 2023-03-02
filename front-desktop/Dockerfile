# Utilisation d'une image Node.js Alpine
FROM node:alpine

# Répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./
COPY public ./public
COPY src ./src

# Installer les dépendances
RUN npm install

# Exposer le port utilisé par l'application
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]