-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2021 a las 01:28:08
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `data_ware`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `channels`
--

CREATE TABLE `channels` (
  `channel_id` int(3) NOT NULL,
  `channel_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `channels`
--

INSERT INTO `channels` (`channel_id`, `channel_name`) VALUES
(1, 'Teléfono'),
(2, 'Whatsapp'),
(3, 'Instagram'),
(4, 'Facebook'),
(5, 'Linkedin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `city_id` int(5) NOT NULL,
  `country_id` int(3) NOT NULL,
  `city_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cities`
--

INSERT INTO `cities` (`city_id`, `country_id`, `city_name`) VALUES
(1, 1, 'Buenos Aires'),
(2, 1, 'Córdoba'),
(3, 1, 'Rosario'),
(4, 2, 'Bogotá'),
(5, 2, 'Cúcuta'),
(6, 2, 'Medellín'),
(7, 3, 'Atacama'),
(8, 3, 'Santiago'),
(9, 3, 'Valparaíso'),
(10, 4, 'Canelones'),
(11, 4, 'Maldonado'),
(12, 4, 'Montevideo'),
(13, 5, 'Ciudad de México'),
(14, 5, 'Tijuana'),
(15, 6, 'Florida'),
(16, 6, 'Texas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `companies`
--

CREATE TABLE `companies` (
  `company_id` int(3) NOT NULL,
  `company_name` varchar(64) NOT NULL,
  `city_id` int(3) NOT NULL,
  `address` varchar(64) NOT NULL,
  `email` varchar(64) DEFAULT NULL,
  `telephone` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `companies`
--

INSERT INTO `companies` (`company_id`, `company_name`, `city_id`, `address`, `email`, `telephone`) VALUES
(1, 'Acámica', 1, 'Humboldt 1967', 'hola@acamica.com', '540112345678'),
(2, 'Globant', 3, 'Av. Madres Plaza de Mayo 3020', 'hi@globant.com', '540341234567'),
(3, 'FreeRange', 2, 'Sarmiento 1245', 'freerange@gmail.com', '540351456789'),
(4, 'Magma', 4, 'Santa Fé 123', 'magma@yahoo.com', '57123456789'),
(5, 'Herbario', 16, 'Av. Nazca 4567', 'Herbario@gmail.com', '1830123456789'),
(6, 'Skynet', 12, 'Bauness 2510', 'skynet@gmail.com', '598234567890');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

CREATE TABLE `contacts` (
  `contact_id` int(3) NOT NULL,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `city_id` int(5) NOT NULL,
  `company_id` int(3) NOT NULL,
  `position` varchar(32) NOT NULL,
  `interest` int(3) NOT NULL,
  `address` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contacts`
--

INSERT INTO `contacts` (`contact_id`, `firstname`, `lastname`, `email`, `city_id`, `company_id`, `position`, `interest`, `address`) VALUES
(1, 'Juan', 'Perez', 'juanperez@gmail.com', 14, 4, 'Contador', 100, 'Mitre 3355'),
(2, 'Laura', 'Rodino', 'laurarodino@yahoo.com', 13, 3, 'Marketing', 100, 'San Martín 456'),
(3, 'Rocio', 'Villarreal', 'rovillarreal@gmail.com', 8, 3, 'Designer', 50, 'España 7768'),
(4, 'Gastón', 'Burgos', 'gastonburgos@gmail.com', 1, 3, 'Contador', 50, 'Italia 2367'),
(5, 'Micaela', 'Cansilla', 'micaelacansilla@yahoo.com', 12, 3, 'Headmaster', 75, 'Balcarce 567'),
(6, 'Cristian', 'Rodriguez', 'crisrodriguez@gmail.com', 2, 6, 'Designer', 25, 'Moreno 980'),
(7, 'Luna', 'Celestino', 'lunacelestino@gmail.com', 3, 5, 'Marketing', 75, 'Maipú 2136'),
(8, 'Maria', 'Carlos', 'mariacarlos@gmail.com', 1, 4, 'Designer', 0, 'Pasco 3245'),
(9, 'Catalina', 'Weinsten', 'cataweinsten@acamica.com', 6, 1, 'Designer', 0, 'Ayacucho 1987'),
(10, 'Victor', 'Etchegaray', 'Viceche@globant.com', 16, 2, 'Contador', 25, 'Cochabamba 1531'),
(11, 'Jeronimo', 'Cruise', 'jerocruise@globant.com', 2, 2, 'Marketing', 100, 'Montevideo 2654'),
(12, 'Melania', 'Marchetti', 'melamarchetti@acamica.com', 7, 1, 'Headmaster', 75, 'Mendoza 2105'),
(13, 'Nadia', 'Tassano', 'nadiatassano@freerange.com', 11, 3, 'Lead', 75, 'Entre Ríos 1920'),
(14, 'Nicolás', 'Vampis', 'nicovampis@acamica.com', 6, 1, 'Contador', 75, 'Pescio 2106'),
(15, 'Dolores', 'Barra', 'doloresbarra@magma.com', 14, 4, 'Marketing', 50, 'La Paz'),
(16, 'Narcissa', 'Whister', 'narcissamwhister@magma.com', 15, 4, 'Designer', 0, 'Córdoba 1453'),
(17, 'Verónica', 'Carrasco', 'veca20@hotmail.com', 1, 2, 'Marketing', 50, 'Calle 43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts_channels`
--

CREATE TABLE `contacts_channels` (
  `contact_id` int(3) NOT NULL,
  `channel_id` int(3) NOT NULL,
  `user_account` varchar(64) NOT NULL,
  `preference` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contacts_channels`
--

INSERT INTO `contacts_channels` (`contact_id`, `channel_id`, `user_account`, `preference`) VALUES
(0, 0, '', NULL),
(2, 1, '52554567777', 'Canal favorito'),
(3, 3, '@rochis', 'No molestar'),
(3, 5, 'https://www.linkedin.com/in/rocio-', 'Canal favorito'),
(4, 1, '54114563336', 'Canal favorito'),
(4, 4, 'https://www.facebook.com/gaston_24', 'Sin preferencia'),
(5, 1, '598234567655', 'Canal favorito'),
(6, 2, '543515678457', 'No molestar'),
(7, 1, '543415567433', 'Canal favorito'),
(8, 1, '54115654766', 'No molestar'),
(8, 3, '@maria1523', 'Sin preferencia'),
(9, 1, '57123456789', 'Canal favorito'),
(10, 3, '@victoretche', 'Canal favorito'),
(11, 1, '54351432334', 'Sin preferencia'),
(11, 2, '543515678435', 'Canal favorito'),
(12, 3, '@melamar', 'No molestar'),
(12, 5, 'https://www.linkedin.com/in/marcheti-mar', 'Canal favorito'),
(13, 3, '@nadichus1234', 'No molestar'),
(13, 5, 'https://www.linkedin.com/in/nadia-1234', 'Canal favorito'),
(14, 2, '5724567435', 'Canal favorito'),
(14, 3, '@nicovampi', 'Sin preferencia'),
(15, 1, '5255568964', 'No molestar'),
(15, 2, '5255345343', 'No molestar'),
(15, 3, '@doloresg12', 'No molestar'),
(15, 4, 'https://www.facebook.com/doloresgdoce', 'No molestar'),
(15, 5, 'https://www.linkedin.com/in/doloresumbridge', 'No molestar'),
(16, 3, '@narcissamalfoy', 'No molestar'),
(17, 1, '2214858725', 'No molestar'),
(17, 2, '22156498535', 'Canal favorito'),
(17, 3, '@verocarrasco', 'Canal favorito'),
(17, 4, '/veca', 'Sin preferencia'),
(17, 5, 'https://linkedin.com/in/ve-carrasco', 'Canal favorito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `country_id` int(3) NOT NULL,
  `region_id` int(3) NOT NULL,
  `country_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`country_id`, `region_id`, `country_name`) VALUES
(1, 1, 'Argentina'),
(2, 1, 'Colombia'),
(3, 1, 'Chile'),
(4, 1, 'Uruguay'),
(5, 2, 'México'),
(6, 2, 'Estados Unidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regions`
--

CREATE TABLE `regions` (
  `region_id` int(3) NOT NULL,
  `region_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regions`
--

INSERT INTO `regions` (`region_id`, `region_name`) VALUES
(1, 'Sudamérica'),
(2, 'Norteamérica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(3) NOT NULL,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `email` varchar(65) NOT NULL,
  `perfil` enum('Admin','Básico') NOT NULL DEFAULT 'Básico',
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `firstname`, `lastname`, `email`, `perfil`, `password`) VALUES
(1, 'Anahi', 'Castellano', 'anahi.castellano@gmail.com', 'Admin', '1234'),
(2, 'Claudia', 'Monge', 'clau@hotmail.com', 'Básico', '5678'),
(3, 'Juan', 'Monsalve', 'juanmonsalve@yahoo.com', 'Básico', '2xcx'),
(4, 'Diego', 'Renaldi', 'dierenaldi@hotmail.com', 'Básico', '123a'),
(6, 'Analia', 'Pardini', 'analiapardi@gmail.com', 'Básico', 'b123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`channel_id`);

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `cities_ibfk_1` (`country_id`);

--
-- Indices de la tabla `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`),
  ADD KEY `city_id` (`city_id`);

--
-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`contact_id`),
  ADD KEY `city_id` (`city_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indices de la tabla `contacts_channels`
--
ALTER TABLE `contacts_channels`
  ADD PRIMARY KEY (`contact_id`,`channel_id`),
  ADD KEY `channel_id` (`channel_id`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`country_id`),
  ADD KEY `countries_ibfk_1` (`region_id`);

--
-- Indices de la tabla `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`region_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `channels`
--
ALTER TABLE `channels`
  MODIFY `channel_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `city_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `companies`
--
ALTER TABLE `companies`
  MODIFY `company_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `contacts`
--
ALTER TABLE `contacts`
  MODIFY `contact_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `country_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `regions`
--
ALTER TABLE `regions`
  MODIFY `region_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
