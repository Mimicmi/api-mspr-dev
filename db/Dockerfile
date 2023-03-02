# Utilisation d'une image MySQL
FROM mysql:latest

# Variables d'environnement pour la configuration de la base de données
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=a_rosa_je_api
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Copier le fichier SQL pour créer les tables nécessaires
COPY a_rosa_je_api.sql /docker-entrypoint-initdb.d/

# Exposer le port utilisé par MySQL
EXPOSE 3306

# Démarrer le serveur MySQL
CMD ["mysqld"]




