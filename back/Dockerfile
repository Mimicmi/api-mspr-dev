# Utilisation d'une image OpenJDK Alpine
FROM openjdk:17-alpine

# Répertoire de travail
WORKDIR .

# Copier les fichiers nécessaires
COPY . .

# Installer les dépendances et compiler l'application
RUN apk add --no-cache curl \
    && apk add --no-cache maven \
    && mvn clean package

# Exposer le port utilisé par l'application
EXPOSE 8080

# Démarrer l'application
CMD ["mvn", "clean", "spring-boot:run"]



