-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Okt 2023 pada 15.36
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workfromdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bookings`
--
CREATE DATABASE workfromdb;
USE workfromdb;
CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `booking_date` date NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` enum('booked','finished','canceled') COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `bookings`
--

INSERT INTO `bookings` (`id`, `property_id`, `user_id`, `booking_date`, `start_date`, `end_date`, `status`, `created_at`, `updated_at`) VALUES
(2, 2, 4, '2023-10-11', '2023-10-12', '2023-12-12', 'booked', '2023-10-11 06:04:49', '2023-10-11 06:04:49'),
(3, 2, 4, '2023-10-12', '2023-10-14', '2023-10-16', 'booked', '2023-10-11 01:00:00', '2023-10-11 01:00:00'),
(4, 4, 5, '2023-10-14', '2023-10-16', '2023-10-18', 'booked', '2023-10-11 01:15:00', '2023-10-11 01:15:00'),
(5, 6, 6, '2023-10-16', '2023-10-18', '2023-12-20', 'booked', '2023-10-11 01:30:00', '2023-10-11 01:30:00'),
(6, 8, 7, '2023-10-18', '2023-10-20', '2023-11-22', 'booked', '2023-10-11 01:45:00', '2023-10-11 01:45:00'),
(7, 10, 8, '2023-10-20', '2023-10-22', '2023-12-24', 'canceled', '2023-10-11 02:00:00', '2023-10-11 02:00:00'),
(8, 12, 4, '2023-10-22', '2023-10-24', '2023-12-26', 'booked', '2023-10-11 02:15:00', '2023-10-11 02:15:00'),
(9, 14, 5, '2023-10-24', '2023-10-26', '2024-01-28', 'canceled', '2023-10-11 02:30:00', '2023-10-11 02:30:00'),
(10, 16, 6, '2023-10-26', '2023-10-28', '2025-10-30', 'booked', '2023-10-11 02:45:00', '2023-10-11 02:45:00'),
(11, 18, 7, '2023-10-28', '2023-10-30', '2024-12-01', 'booked', '2023-10-11 03:00:00', '2023-10-11 03:00:00'),
(12, 20, 8, '2023-10-30', '2023-11-01', '2024-11-03', 'finished', '2023-10-11 03:15:00', '2023-10-11 03:15:00'),
(13, 3, 4, '2023-11-01', '2023-11-03', '2023-12-05', 'booked', '2023-10-11 03:30:00', '2023-10-11 03:30:00'),
(14, 5, 5, '2023-11-03', '2023-11-05', '2024-01-07', 'booked', '2023-10-11 03:45:00', '2023-10-11 03:45:00'),
(15, 7, 6, '2023-11-05', '2023-11-07', '2024-02-09', 'booked', '2023-10-11 04:00:00', '2023-10-11 04:00:00'),
(16, 9, 7, '2023-11-07', '2023-11-09', '2024-03-11', 'booked', '2023-10-11 04:15:00', '2023-10-11 04:15:00'),
(17, 11, 8, '2023-11-09', '2023-11-11', '2025-11-13', 'finished', '2023-10-11 04:30:00', '2023-10-11 04:30:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `facilities`
--

CREATE TABLE `facilities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `property_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `facilities`
--

INSERT INTO `facilities` (`id`, `property_id`, `name`, `qty`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, 'AC', 10, '2 PK', '2023-10-11 05:50:02', '2023-10-11 05:50:02'),
(2, 2, 'Ruang Rapat', 2, 'Bersih dan Nyaman', '2023-10-11 05:50:25', '2023-10-11 05:50:25'),
(3, 11, 'AC', 10, 'Dilengkapi dengan pendingin udara 2 PK', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(4, 11, 'Meja Rapat', 5, 'Meja yang nyaman untuk rapat', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(5, 3, 'Proyektor', 1, 'Proyektor berkualitas tinggi', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(6, 3, 'Ruang Presentasi', 3, 'Fasilitas memadai dengan layar proyektor dan internet', '2023-10-10 22:50:25', '2023-10-11 06:03:34'),
(7, 4, 'Meja Bulat', 8, 'Meja bulat yang elegan untuk pertemuan', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(8, 4, 'Kursi Lipat', 20, 'Kursi lipat yang praktis dan nyaman', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(9, 5, 'Ruang Makan', 1, 'Ruang makan yang luas dan nyaman', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(10, 5, 'Peralatan Dapur', 1, 'Peralatan dapur lengkap untuk keperluan memasak', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(11, 6, 'LCD TV', 3, 'TV LCD besar untuk presentasi', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(12, 6, 'Papan Tulis', 2, 'Papan tulis yang besar untuk catatan', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(13, 7, 'Sound System', 1, 'Sistem suara yang berkualitas tinggi', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(14, 7, 'Layar LED', 1, 'Layar LED yang besar dan jelas', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(15, 8, 'Peralatan Olahraga', 1, 'Berbagai peralatan olahraga tersedia', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(16, 8, 'Kolam Renang', 1, 'Kolam renang yang luas dan bersih', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(17, 9, 'Internet Cepat', 1, 'Koneksi internet berkecepatan tinggi', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(18, 9, 'Peralatan Gym', 1, 'Gym lengkap untuk latihan', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(19, 10, 'Ruang Sholat', 1, 'Ruang sholat yang nyaman', '2023-10-10 22:50:02', '2023-10-10 22:50:02'),
(20, 10, 'Peralatan Audio', 1, 'Peralatan audio berkualitas tinggi', '2023-10-10 22:50:25', '2023-10-10 22:50:25'),
(21, 11, 'Whiteboard', 2, 'Whiteboard for presentations and notes', '2023-10-10 23:00:00', '2023-10-10 23:00:00'),
(22, 11, 'Projector Screen', 1, 'High-quality projector screen', '2023-10-10 23:00:00', '2023-10-10 23:00:00'),
(23, 12, 'High-Speed Internet', 1, 'Fast and reliable internet connection', '2023-10-10 23:15:00', '2023-10-10 23:15:00'),
(24, 12, 'Printer and Scanner', 1, 'Printing and scanning facilities available', '2023-10-10 23:15:00', '2023-10-10 23:15:00'),
(25, 13, 'Conference Room', 2, 'Modern and spacious conference rooms', '2023-10-10 23:30:00', '2023-10-10 23:30:00'),
(26, 13, 'Catering Services', 1, 'Catering services for meetings and events', '2023-10-10 23:30:00', '2023-10-10 23:30:00'),
(27, 14, 'Fitness Center', 1, 'Fully-equipped fitness center', '2023-10-10 23:45:00', '2023-10-10 23:45:00'),
(28, 14, 'Spa and Wellness', 1, 'Spa and wellness facilities for relaxation', '2023-10-10 23:45:00', '2023-10-10 23:45:00'),
(29, 15, '24/7 Security', 1, 'Round-the-clock security for safety', '2023-10-11 00:00:00', '2023-10-11 00:00:00'),
(30, 15, 'Parking Area', 1, 'Ample parking space for guests', '2023-10-11 00:00:00', '2023-10-11 00:00:00'),
(31, 16, 'Elevator', 1, 'Convenient elevator access', '2023-10-11 00:15:00', '2023-10-11 00:15:00'),
(32, 17, 'Cafeteria', 1, 'On-site cafeteria for meals', '2023-10-11 00:30:00', '2023-10-11 00:30:00'),
(33, 17, 'Outdoor Terrace', 1, 'Scenic outdoor terrace for relaxation', '2023-10-11 00:30:00', '2023-10-11 00:30:00'),
(34, 18, '24/7 Reception', 1, '24/7 reception desk for assistance', '2023-10-11 00:45:00', '2023-10-11 00:45:00'),
(35, 18, 'Housekeeping', 1, 'Housekeeping services for cleanliness', '2023-10-11 00:45:00', '2023-10-11 00:45:00'),
(36, 19, 'Business Center', 1, 'Fully-equipped business center', '2023-10-11 01:00:00', '2023-10-11 01:00:00'),
(37, 19, 'Shuttle Service', 1, 'Shuttle service for transportation', '2023-10-11 01:00:00', '2023-10-11 01:00:00'),
(38, 20, 'Childcare Services', 1, 'Childcare services for families', '2023-10-11 01:15:00', '2023-10-11 01:15:00'),
(39, 20, 'Library', 1, 'Library with a wide range of books', '2023-10-11 01:15:00', '2023-10-11 01:15:00'),
(40, 21, 'Security Personnel', 1, 'Trained security personnel on-site', '2023-10-11 01:30:00', '2023-10-11 01:30:00'),
(41, 21, 'Conference Facilities', 1, 'Additional conference facilities', '2023-10-11 01:30:00', '2023-10-11 01:30:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2022_10_10_090102_create_user_roles_table', 1),
(3, '2022_10_12_000000_create_users_table', 1),
(4, '2022_10_13_093608_create_properties_table', 1),
(5, '2022_10_14_104510_create_facilities_table', 1),
(6, '2022_10_15_095458_create_bookings_table', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'api-token', 'd78856b3b231fea71fc7ba5ffe97450cc181423138f31decc70f683a835550c5', '[\"*\"]', '2023-10-11 06:34:32', NULL, '2023-10-11 00:56:05', '2023-10-11 06:34:32'),
(2, 'App\\Models\\User', 3, 'api-token', '1744a43280f2e689a02684a10cd8b142cb34f6c2fd9b05ebe41ccc11db674e0c', '[\"*\"]', NULL, NULL, '2023-10-11 05:36:44', '2023-10-11 05:36:44'),
(3, 'App\\Models\\User', 4, 'api-token', 'ac71737c326e8dcbbce881eda5f17e11961e056652915bad71669ec161df7ca2', '[\"*\"]', NULL, NULL, '2023-10-11 05:37:06', '2023-10-11 05:37:06'),
(4, 'App\\Models\\User', 5, 'api-token', '5181b234b331d67c7075555eb696d443e6a3c46c921374979777fd893693fd43', '[\"*\"]', NULL, NULL, '2023-10-11 06:31:37', '2023-10-11 06:31:37'),
(5, 'App\\Models\\User', 6, 'api-token', 'bd8a87d77feb89c55a738775af5fed886cc3ad5049791cf086fe3d1b4942b98c', '[\"*\"]', NULL, NULL, '2023-10-11 06:31:50', '2023-10-11 06:31:50'),
(6, 'App\\Models\\User', 7, 'api-token', '6ab89f650b0e28aec450ea6f9d3ebf6c5f6e5e87bfd779642bf8aa5ec07debe3', '[\"*\"]', NULL, NULL, '2023-10-11 06:32:00', '2023-10-11 06:32:00'),
(7, 'App\\Models\\User', 8, 'api-token', 'ddd597f6729ad4299868114fbd2d6b477c69bf34d9300d3e772ad482a7b339f1', '[\"*\"]', NULL, NULL, '2023-10-11 06:32:14', '2023-10-11 06:32:14'),
(8, 'App\\Models\\User', 2, 'api-token', '13e7b34747ac35ec4e805fc998a7b5b7792d01c1530bbcc91355223ad9490a1b', '[\"*\"]', NULL, NULL, '2023-10-11 06:32:36', '2023-10-11 06:32:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `properties`
--

CREATE TABLE `properties` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `building_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `domicile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `capacity` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `properties`
--

INSERT INTO `properties` (`id`, `user_id`, `name`, `building_name`, `domicile`, `address`, `price`, `capacity`, `description`, `status`, `created_at`, `updated_at`) VALUES
(2, 1, 'Azzahra', 'Cempaka', 'Medan', 'Jl. Iskandar Muda No.7, Petisah Hulu, Kec. Medan Baru, Kota Medan, Sumatera Utara 20153', 5000000, 55, 'Azzahra is located at the Cempaka Hotel where there are many complete facilities for important meetings and meetings 2 floors 1 Bathroom 3 Rooms 1 Kitchen', 1, '2023-10-11 03:25:30', '2023-10-11 03:25:30'),
(3, 1, 'Baihaqi', 'Anggrek', 'Jakarta', 'Jl. Panglima Polim I No.51A, RT.1/RW.3, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160', 7000000, 65, 'Baihaqi is located at the Anggrek Hotel where there are many complete facilities for important meetings.', 1, '2023-10-11 03:36:24', '2023-10-11 03:36:24'),
(4, 1, 'Anaya', 'Mawar', 'Jakarta', 'Jl. Prapanca Raya No.3, RT.11/RW.1, Petogogan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12170', 6000000, 60, 'Anayais located at the Mawar Building where there are many complete facilities for important activities.', 1, '2023-10-11 03:38:04', '2023-10-11 03:38:04'),
(5, 1, 'Sazara', 'Melati', 'Jakarta', 'Jl. Prapanca Raya No.3, RT.11/RW.1, Petogogan, Kec. Kby. Baru, Bandung', 8000000, 75, 'Sazara located at the MelatiBuilding where there are many complete facilities for important activities.', 1, '2023-10-11 03:53:01', '2023-10-11 03:53:01'),
(6, 1, 'Konaga', 'Kamboja', 'Bandung', 'Jl. Prapanca Raya No.3, RT.11/RW.1, Petogogan, Kec. Kby. Baru, Bandung', 11000000, 140, 'Konaga located at the Kamboja Hotel where there are many complete facilities for important activities.', 1, '2023-10-11 03:53:56', '2023-10-11 03:53:56'),
(7, 1, 'Gadara', 'Kemuning', 'Bogor', 'Komplek KPP IPB 3, Jl. Danau Tondano No.III, Tegallega, Bogor City, West Java 16129', 10000000, 90, 'Gadata located at Central Bogor where there are many complete facilities for important activities.', 1, '2023-10-11 03:55:11', '2023-10-11 03:55:11'),
(8, 3, 'Cynthia', 'Dahlia', 'Surabaya', 'Jl. Kusuma Bangsa No.14, Gubeng, Surabaya, Jawa Timur 60281', 5500000, 50, 'Cynthia is located at the Dahlia Hotel with great facilities for important meetings.', 1, '2023-10-11 04:00:00', '2023-10-11 04:00:00'),
(9, 1, 'Darma', 'Sakura', 'Bandung', 'Jl. Cihampelas No.143, Cipaganti, Bandung Wetan, Kota Bandung, Jawa Barat 40131', 6500000, 55, 'Darma is located at the Sakura Building with spacious meeting rooms and modern amenities.', 1, '2023-10-11 04:15:00', '2023-10-11 04:15:00'),
(10, 3, 'Elisa', 'Melati', 'Surabaya', 'Jl. Pucang Anom Barat 1 No.3, Pucang Sewu, Surabaya, Jawa Timur 60282', 5000000, 45, 'Elisa is located at the Melati Hotel, suitable for small meetings and gatherings.', 1, '2023-10-11 04:30:00', '2023-10-11 04:30:00'),
(11, 3, 'Farid', 'Kenanga', 'Medan', 'Jl. Gatot Subroto No.11, Petisah Hulu, Medan Petisah, Kota Medan, Sumatera Utara 20111', 7500000, 70, 'Farid is situated at the Kenanga Building with spacious rooms and excellent amenities for important events.', 1, '2023-10-11 04:45:00', '2023-10-11 04:45:00'),
(12, 1, 'Grace', 'Bougainvillea', 'Jakarta', 'Jl. Raya Pasar Minggu No.61, RT.5/RW.5, Pancoran, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780', 6000000, 60, 'Grace is located at the Bougainvillea Hotel with excellent facilities for meetings and conferences.', 1, '2023-10-11 05:00:00', '2023-10-11 05:00:00'),
(13, 3, 'Hadi', 'Orchid', 'Bandung', 'Jl. Sumatera No.8, Sumur Bandung, Bandung Wetan, Kota Bandung, Jawa Barat 40113', 5500000, 50, 'Hadi is situated at the Orchid Building, ideal for small gatherings and workshops.', 1, '2023-10-11 05:15:00', '2023-10-11 05:15:00'),
(14, 1, 'Ismail', 'Lily', 'Surabaya', 'Jl. Mulyosari Pratama No.32, Mulyosari, Surabaya, Jawa Timur 60111', 7000000, 65, 'Ismail is located at the Lily Hotel with well-equipped meeting rooms.', 1, '2023-10-11 05:30:00', '2023-10-11 05:30:00'),
(15, 3, 'Jihan', 'Tulip', 'Medan', 'Jl. Gatot Subroto No.19, Petisah Ulu, Medan Kota, Kota Medan, Sumatera Utara 20113', 8000000, 75, 'Jihan is situated at the Tulip Building with spacious conference rooms and modern amenities.', 1, '2023-10-11 05:45:00', '2023-10-11 05:45:00'),
(16, 1, 'Kamil', 'Rose', 'Jakarta', 'Jl. Mampang Prapatan Raya No.7, RT.10/RW.3, Mampang Prapatan, Kec. Mampang Prapatan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790', 7500000, 70, 'Kamil is located at the Rose Hotel with versatile meeting spaces and modern facilities.', 1, '2023-10-11 06:00:00', '2023-10-11 06:00:00'),
(17, 1, 'Liana', 'Sunflower', 'Surabaya', 'Jl. Wonokromo No.41, Wonokromo, Surabaya, Jawa Timur 60243', 6000000, 60, 'Liana is situated at the Sunflower Building with convenient meeting rooms and amenities.', 1, '2023-10-11 06:15:00', '2023-10-11 06:15:00'),
(18, 3, 'Nadia', 'Tulip', 'Surabaya', 'Jl. Kertajaya Indah Timur No.5, Kertajaya, Surabaya, Jawa Timur 60114', 5500000, 50, 'Nadia is located at the Tulip Hotel with facilities for small meetings and gatherings.', 1, '2023-10-11 06:30:00', '2023-10-11 06:30:00'),
(19, 3, 'Oscar', 'Daisy', 'Bandung', 'Jl. Dr. Cipto No.12, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40113', 6000000, 55, 'Oscar is situated at the Daisy Building, suitable for workshops and conferences.', 1, '2023-10-11 06:45:00', '2023-10-11 06:45:00'),
(20, 2, 'Pandu', 'Magnolia', 'Jakarta', 'Jl. Gatot Subroto No.88, RT.6/RW.2, Bendungan Hilir, Kec. Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210', 7000000, 65, 'Pandu is located at the Magnolia Hotel with well-equipped meeting rooms and amenities.', 1, '2023-10-11 07:00:00', '2023-10-11 07:00:00'),
(21, 2, 'Queenie', 'Peony', 'Surabaya', 'Jl. Siwalankerto No.29, Siwalankerto, Surabaya, Jawa Timur 60237', 6500000, 60, 'Queenie is situated at the Peony Hotel with versatile meeting spaces and modern facilities.', 1, '2023-10-11 07:15:00', '2023-10-11 07:15:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `phone_number`, `remember_token`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 'rizkyaa', 'rizkyalarief13@gmail.com', '$2y$10$zrvLI/wRPlMROgI51SkuvOU7lWCkY2VEEgTFgsDGLFq1um0bYxkTW', '083812721450', '1|rIUa3MhMAlPizZjiTy0ui7YcAG6A6Mh09GPxUm0saef67963', 2, '2023-10-11 00:55:27', '2023-10-11 01:00:15'),
(2, 'Admin', 'admin@gmail.com', '$2y$10$6metDeF2TWznOeIp8bbfYOdJC8mw.JN/IgZ8AgR.ykderO2coAvBe', '08381272145021', '8|CxgqyyDSuuwn9ByHIURabe9vtMmZFxdoTlx0v95sbeb54faf', 1, '2023-10-11 01:02:15', '2023-10-11 06:32:36'),
(3, 'Owner', 'owner@gmail.com', '$2y$10$ISL54P.KGz2DUobK2CFt1evrfjQHMjz.hbsFOz7XlPN5e1mSDF0CW', '0838127672', '2|lNek7SoEvNzzjz80Q2i7PIOs0eCjllksXDHwtRWAeb5d02d3', 2, '2023-10-11 01:02:44', '2023-10-11 05:36:44'),
(4, 'Buyer', 'buyer@gmail.com', '$2y$10$Quy2EB2Kl8Ab5PZUZAIkX.NZMXCHCjeXLys3B1NRcy4egjYTJjbWS', '083232132314', '3|hYpqlRdIlUa3G52iXQMDEa2ArBfmjZ8KnvWjFTeoc732390d', 3, '2023-10-11 01:03:16', '2023-10-11 05:37:06'),
(5, 'Teguh', 'teguh@gmail.com', '$2y$10$tBq/QbqPaz7hPoG3fQEH5ezFpQAWeclq8sNEBBqQdDsgG7inen6Vy', '083232132314', '4|B3663MiqIfH1hCjDAPHhFN7YgIMRfK0ZqjQUcg3Sf62613aa', 3, '2023-10-11 06:24:14', '2023-10-11 06:31:37'),
(6, 'Andra', 'andra@gmail.com', '$2y$10$2wWLvYipWSiXHvRub35.cuTQDWPGe09PYQUKf8sGAwTAjrNoK8znq', '083232132314', '5|V2TkUzKwEIiVtfiGLHtQ8sMex7Ian8XBiWiE2tkOba17b680', 3, '2023-10-11 06:24:29', '2023-10-11 06:31:50'),
(7, 'retno', 'retno@gmail.com', '$2y$10$BkulXG6MM0xVODq/M5TXj.jI3NR9vFNpiRrevavQ7mrBmQxhz1j/i', '083232132314', '6|r3zGhFf9Glhdasdli4Nw360kKKu13vM35ctNCDJK9ae7b9f5', 3, '2023-10-11 06:24:47', '2023-10-11 06:32:00'),
(8, 'lukman', 'lukman@gmail.com', '$2y$10$6tc4BUWBtZXpFUpLlc7w0OACWu0ntrT2xlvINWT/qJDjqw8CKrsne', '083232132314', '7|AfNjh82mgwE3IGFXbxXFVXBizxqPPM6HFY4zlIlR6dabd4a5', 3, '2023-10-11 06:25:03', '2023-10-11 06:32:14');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_roles`
--

CREATE TABLE `user_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user_roles`
--

INSERT INTO `user_roles` (`id`, `role_name`, `abilities`, `created_at`, `updated_at`) VALUES
(1, 'Admin', NULL, NULL, NULL),
(2, 'Owner', NULL, NULL, NULL),
(3, 'Buyer', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookings_property_id_foreign` (`property_id`),
  ADD KEY `bookings_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `facilities`
--
ALTER TABLE `facilities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `facilities_property_id_foreign` (`property_id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indeks untuk tabel `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `properties_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- Indeks untuk tabel `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `facilities`
--
ALTER TABLE `facilities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `properties`
--
ALTER TABLE `properties`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_property_id_foreign` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`),
  ADD CONSTRAINT `bookings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `facilities`
--
ALTER TABLE `facilities`
  ADD CONSTRAINT `facilities_property_id_foreign` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`);

--
-- Ketidakleluasaan untuk tabel `properties`
--
ALTER TABLE `properties`
  ADD CONSTRAINT `properties_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
