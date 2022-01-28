-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-01-2022 a las 03:01:54
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pokemons`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lastpokemon`
--

CREATE TABLE `lastpokemon` (
  `idPokemon` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lastpokemon`
--

INSERT INTO `lastpokemon` (`idPokemon`, `date`, `time`) VALUES
(1, '2022-01-28 01:59:59', '2022-01-28 01:59:59'),
(2, '2022-01-28 02:00:14', '2022-01-28 02:00:14'),
(3, '2022-01-28 01:31:18', '2022-01-28 01:31:18'),
(4, '2022-01-28 01:31:18', '2022-01-28 01:31:18'),
(5, '2022-01-28 01:31:19', '2022-01-28 01:31:19'),
(6, '2022-01-28 01:31:19', '2022-01-28 01:31:19'),
(7, '2022-01-28 01:31:19', '2022-01-28 01:31:19'),
(8, '2022-01-28 01:31:19', '2022-01-28 01:31:19'),
(9, '2022-01-28 01:31:19', '2022-01-28 01:31:19'),
(10, '2022-01-28 01:31:20', '2022-01-28 01:31:20'),
(11, '2022-01-28 01:31:20', '2022-01-28 01:31:20'),
(12, '2022-01-28 01:31:20', '2022-01-28 01:31:20'),
(13, '2022-01-27 21:10:18', '2022-01-27 21:10:18'),
(14, '2022-01-28 01:31:21', '2022-01-28 01:31:21'),
(15, '2022-01-28 01:31:21', '2022-01-28 01:31:21'),
(16, '2022-01-21 00:23:52', '2022-01-21 00:23:52'),
(17, '2022-01-27 21:10:20', '2022-01-27 21:10:20'),
(18, '2022-01-28 01:59:59', '2022-01-28 01:59:59'),
(19, '2022-01-28 01:31:21', '2022-01-28 01:31:21'),
(20, '2022-01-28 01:31:22', '2022-01-28 01:31:22'),
(21, '2022-01-28 01:31:22', '2022-01-28 01:31:22'),
(22, '2022-01-28 01:31:22', '2022-01-28 01:31:22'),
(24, '2022-01-28 02:00:15', '2022-01-28 02:00:15'),
(25, '2022-01-28 01:31:22', '2022-01-28 01:31:22'),
(26, '2022-01-28 01:31:23', '2022-01-28 01:31:23'),
(27, '2022-01-28 01:31:23', '2022-01-28 01:31:23'),
(28, '2022-01-28 01:31:23', '2022-01-28 01:31:23'),
(29, '2022-01-28 01:31:23', '2022-01-28 01:31:23'),
(30, '2022-01-28 01:31:23', '2022-01-28 01:31:23'),
(31, '2022-01-28 01:31:23', '2022-01-28 01:31:23'),
(32, '2022-01-28 01:31:24', '2022-01-28 01:31:24'),
(150, '2022-01-20 02:07:30', '2022-01-20 02:07:30'),
(180, '2022-01-28 01:59:59', '2022-01-28 01:59:59'),
(200, '2022-01-20 02:14:47', '2022-01-20 02:14:47'),
(240, '2022-01-28 02:00:15', '2022-01-28 02:00:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `name` text NOT NULL,
  `last_name` text NOT NULL,
  `brd_date` date NOT NULL,
  `date_stamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`email`, `pass`, `name`, `last_name`, `brd_date`, `date_stamp`) VALUES
('ale@tecla.com', 'b56db3bb8c97c9bc8d211202b02a521d', 'Alejandro', 'Bosch', '1990-07-26', '2022-01-21 01:45:26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lastpokemon`
--
ALTER TABLE `lastpokemon`
  ADD PRIMARY KEY (`idPokemon`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
