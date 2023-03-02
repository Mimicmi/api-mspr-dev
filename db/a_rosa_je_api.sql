-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 01 mars 2023 à 13:58
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `a_rosa_je_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
CREATE TABLE IF NOT EXISTS `advertisements` (
  `id` int(11) NOT NULL,
  `schedule_in` datetime DEFAULT NULL,
  `schedule_out` datetime DEFAULT NULL,
  `price` float NOT NULL,
  `selected_keeper_id` int(11) NOT NULL,
  `plants_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlfq3641nk7ew3rpjs0g8iweet` (`selected_keeper_id`),
  KEY `FKmhru20a9qqcy4p165jdc90y4q` (`plants_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `advertisements`
--

INSERT INTO `advertisements` (`id`, `schedule_in`, `schedule_out`, `price`, `selected_keeper_id`, `plants_id`) VALUES
(94, '2023-02-24 23:45:05', '2023-02-24 23:45:05', 12, 92, 93);

-- --------------------------------------------------------

--
-- Structure de la table `botanists`
--

DROP TABLE IF EXISTS `botanists`;
CREATE TABLE IF NOT EXISTS `botanists` (
  `id` int(11) NOT NULL,
  `documents` varchar(255) DEFAULT NULL,
  `siret` varchar(255) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqbp3cel0ag9cuhrg6ys59yjnj` (`client_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `botanists`
--

INSERT INTO `botanists` (`id`, `documents`, `siret`, `client_id`) VALUES
(19, '', '1234567890', 18),
(23, 'doc5', '098765', 20),
(28, '', '31321132123', 27),
(31, '', '99999999999999', 30),
(65, 'doc5', '098765', 30),
(66, 'doc5', '098765', 33),
(89, '', '54654654654', 88);

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lon` double DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtiuqdledq2lybrds2k3rfqrv4` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `address`, `created_at`, `lat`, `lon`, `updated_at`, `user_id`) VALUES
(15, '15 Rue du Tondu 33000 Bordeaux', '2023-02-11 10:57:19', 44.832764, -0.5807, '2023-02-27 10:21:42', 4),
(16, 'test lat lon create', '2023-02-11 11:01:57', 7890.1234, 98765.567, '2023-02-11 11:01:57', 5),
(18, '29 Boulevard des Provinces 69110 Sainte-Foy-lès-Lyon', '2023-02-11 11:08:09', 45.74982, 4.802115, '2023-02-11 11:08:09', 17),
(20, 'test lat lon create', '2023-02-11 11:09:54', 7890.1234, 98765.567, '2023-02-11 11:09:54', 3),
(25, '9 Allée de la Vignolière 69290 Craponne', '2023-02-19 23:05:24', 45.74151, 4.712716, '2023-02-19 23:05:24', 24),
(27, '9 Allée de la Vignolière 69290 Craponne', '2023-02-19 23:05:51', 45.74151, 4.712716, '2023-02-19 23:05:51', 26),
(30, '29 Boulevard des Provinces 69110 Sainte-Foy-lès-Lyon', '2023-02-20 00:06:23', 45.74982, 4.802115, '2023-02-20 23:07:09', 29),
(33, '9 Al Claux 11400 Fendeille', '2023-02-20 00:06:48', 43.272673, 1.945664, '2023-02-20 00:06:48', 32),
(71, '9 Allée de la Vignolière 69290 Craponne', '2023-02-21 21:52:12', 45.74151, 4.712716, '2023-02-21 23:49:21', 70),
(79, '63 rue Victor Basch 63000 Clermont-Ferrand', '2023-02-23 18:14:45', 45.767114, 3.1169, '2023-02-23 21:52:58', 78),
(88, '34 Rue de Bayard 31000 Toulouse', '2023-02-24 23:31:06', 43.609344, 1.448836, '2023-02-24 23:31:06', 87),
(92, '34 Rue Lecourbe 75015 Paris', '2023-02-24 23:32:42', 48.844358, 2.308267, '2023-02-24 23:32:42', 91);

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `maintenance_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjg192673v873rxrs6e7ijqal9` (`maintenance_id`),
  KEY `FKqk5c8i108s4bbx7b0tjc98heo` (`photo_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(111);

-- --------------------------------------------------------

--
-- Structure de la table `maintenances`
--

DROP TABLE IF EXISTS `maintenances`;
CREATE TABLE IF NOT EXISTS `maintenances` (
  `id` int(11) NOT NULL,
  `date_maintenance` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `advertisement_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKa4469ufjw7nbbvpl4glto8vpj` (`advertisement_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

DROP TABLE IF EXISTS `photos`;
CREATE TABLE IF NOT EXISTS `photos` (
  `id` int(11) NOT NULL,
  `date_photo` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `plant_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlseja2ahb5b5p7r1p7n0sncbd` (`plant_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `photos`
--

INSERT INTO `photos` (`id`, `date_photo`, `image`, `plant_id`) VALUES
(105, '2023-02-27 22:45:46', 'photo/-8f28407b-8243-44fc-ad54-5dcc0aa8655f.PNG', 102),
(108, '2023-02-28 08:17:33', 'photo/-66f5b3b3-70a7-4bc5-8c8f-f2f44076af97.PNG', 107),
(110, '2023-02-28 08:34:56', 'photo/-d0cd68f1-45c1-471a-96a5-8598fd2aba31.jpg', 109);

-- --------------------------------------------------------

--
-- Structure de la table `plants`
--

DROP TABLE IF EXISTS `plants`;
CREATE TABLE IF NOT EXISTS `plants` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `profil_photo` varchar(255) DEFAULT NULL,
  `owner_id` int(11) NOT NULL,
  `specie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKglcg0feg4rb7yy794sn0tkbkd` (`owner_id`),
  KEY `FKomjya066r3e4rblmbbsirp70u` (`specie_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `plants`
--

INSERT INTO `plants` (`id`, `address`, `latitude`, `longitude`, `profil_photo`, `owner_id`, `specie_id`) VALUES
(93, '48 Avenue de Castres 31500 Toulouse', 1.473611, 43.6008, NULL, 92, 90),
(102, '9 Allée de la Vignolière 69290 Craponne', 4.712716, 45.74151, NULL, 15, 90),
(107, '2 Rue Lecourbe 75015 Paris', 2.310433, 48.845015, 'plant_profil/-bc56ba37-79f2-4ffe-86cc-a78979f9db68.png', 15, 90),
(109, '23 Rue Pelleport 33800 Bordeaux', -0.559452, 44.823485, 'plant_profil/-44715a2d-b8d6-4a1f-b6c6-2a886e97d6b8.PNG', 25, 85);

-- --------------------------------------------------------

--
-- Structure de la table `species`
--

DROP TABLE IF EXISTS `species`;
CREATE TABLE IF NOT EXISTS `species` (
  `id` int(11) NOT NULL,
  `advice` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `specie` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `species`
--

INSERT INTO `species` (`id`, `advice`, `description`, `specie`) VALUES
(85, '[\"Arroser\"]', 'Une fleur jaune et verte', 'Tulipe'),
(90, '[\"Arroser une fois par mois\"]', 'Une plante sèche mais résistante', 'Cactus');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `pseudo`) VALUES
(1, 'test@test.com', '$2a$10$NxtJX17jtrZ.W0ToKzcIQuWTojSg5IkUsbyKQhQVVJnhajlcd640W', 'test'),
(2, 'cors@email.com', '$2a$10$mDBUzFxDybtAA2AtVqymzuKkZTz4ObOkSJcQ1U/4u46Ua/fTcpeke', 'cors'),
(3, 'test@email.com', 'password', 'test encore new pseudo'),
(4, 'a@g', '$2a$10$I/y5hq83c4YAqiAGYuCPvOKfoA8.5YHsq.bWcybaFy22lzOvuGF0.', 'Testing'),
(5, 'antoine.gillet1@epsi.fr', '$2a$10$JwTZ5r7ERBxxnkFgPrTggO.i9uO6.HES1osidCymRbOrUPfWjCDL6', 'antoine'),
(9, 'usertest1@email.com', '$2a$10$na6pvWL61JqgqPzEU0Lag.ND4csdhIOpQZaQHpHWQA7KTFMsmo2bi', 'usertest1'),
(12, 'retudfgfdgrnlogin@email.com', '$2a$10$Cpr..nymYkC5w.Vqq18mS.Xm.APN6mmVUJVe.BKHq0BsxpcIB13gm', 'returnlogin'),
(13, 'retudfgfdgrnlogin@email.com', '$2a$10$zv5WEVMaZMRpr1U0bwKd5.0SueYie8A56/CjUqu/Dbzvf9DuZlDgS', 'returnlogin'),
(14, 'premierClient@test.com', '$2a$10$x08i7Zj2yq434LKGvrguaes621teCmu23B1F5pTSQYH2IkBisCDsS', 'AntoineG69'),
(17, 'complet@complet.Com', '$2a$10$ADQCzBA24.MJBWY8eoJk2uBZU7P/HrqezVFaQanHtgPzcL1OOtZAG', 'complet'),
(24, 'a@botanist', '$2a$10$30RHGVk8LYktNTjjDWv1wOGhRQP.PyZsIAOK3li7XsBhUCwPORg2e', 'botanist'),
(26, 'a@client', '$2a$10$l8WSSd9J7tEJyIpHk2z3xOyO2ypuVf3TTMADGIyaDtTDZ0xLioAMy', 'client'),
(29, 'botanist@botanist', '$2a$10$a.bMauSxF9UQ7v4O/LLCAukUwXj7rtSEHkHKJRDpS6E5mMHxw1Ld6', 'test'),
(32, 'client@client', '$2a$10$rqq1Mp45Rb8GNzvUJqhJXeDRG4e2kgCqZIruzalHyEVcasQYziEAS', 'client'),
(70, 'client@c', '$2a$10$Wgf9bK1gKgqrpk55ADw5MuTySjJxlqqpH94AD9L5ceYRpBw6Y0Yuu', 'Moi'),
(78, 'testdusoir@gmail.com', '$2a$10$Zo2RxevNHc7pOItEBOkkme55wFssajEKGqCHGKQvghk0JByyOuY5S', 'TestDuSoir'),
(87, 'ski@botanist.com', '$2a$10$k/RSECBzrKaEt25ntWO9Ou7Wtvy2CE0ahoewMnKueT6UgTuUMeSEu', 'SkiBotanist'),
(91, 'ski@client', '$2a$10$uNRm4Ce1.jfuyCxu.SLDl.8c5iHEkxbQP/ogt8o60gIJz9gFK1GPO', 'ClientSki');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
