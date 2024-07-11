<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Products::create([
            'id' => '1',
            'name' => 'Dibimbing Olah Data',
            'slug' => 'dibimbing-olah-data',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 30 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 30 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'online',
            'price' => '200000',
            'product_image' => 'product/bimbingan/bimbingan1720598418.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 15:00:18',
            'number_list' => '1',
            'duration' => '60',
            'total_meet' => '1',
            'active_period' => '99',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Online"],
                ["icon" => "fa-solid fa-clock", "text" => "60 Menit"],
            ],
            'product_type_id' => '1',
            'category_id' => '2',
            'form_config' => ["schedule" => 1, "topic" => 1, "document" => 1],
            'promo_price' => '45000',
        ]);

        Products::create([
            'id' => '2',
            'name' => 'Dibimbing Sekali Offline',
            'slug' => 'dibimbing-sekali-offline',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'offline',
            'price' => '175000',
            'product_image' => 'product/bimbingan/bimbingan1720598428.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 15:00:28',
            'number_list' => '2',
            'duration' => '75',
            'total_meet' => '1',
            'active_period' => '99',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Offline"],
                ["icon" => "fa-solid fa-calendar", "text" => "1x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "75 Menit"],
            ],
            'product_type_id' => '1',
            'category_id' => '2',
            'form_config' => ["schedule" => 1, "city" => 1, "place" => 1, "topic" => 1, "document" => 0],
            'promo_price' => '10000',
        ]);

        Products::create([
            'id' => '3',
            'name' => 'Dibimbing Sekali Online',
            'slug' => 'dibimbing-sekali-online',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'online',
            'price' => '128000',
            'product_image' => 'product/bimbingan/bimbingan1720598439.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 15:00:39',
            'number_list' => '3',
            'duration' => '60',
            'total_meet' => '1',
            'active_period' => '99',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "1x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "60 Menit"],
            ],
            'product_type_id' => '1',
            'category_id' => '2',
            'form_config' => ["schedule" => 1, "topic" => 1, "document" => 0],
            'promo_price' => '33000',
        ]);

        Products::create([
            'id' => '4',
            'name' => 'Prioritas Dibimbing Tuntas + Kado Hampers',
            'slug' => 'prioritas-dibimbing-tuntas-kado-hampers',
            'excerpt' => 'Layanan terbaik bonus hampers untukmu yang ingin menyelesaikan skripsi melalui 9 pertemuan personal 1-on-1  dengan durasi 60 menit.',
            'description' => 'Layanan terbaik bonus hampers untukmu yang ingin menyelesaikan skripsi melalui 9 pertemuan personal 1-on-1  dengan durasi 60 menit.',
            'contact_type' => 'online',
            'price' => '1648000',
            'product_image' => 'product/bimbingan/bimbingan1720598271.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 15:10:17',
            'number_list' => '1',
            'duration' => '60',
            'total_meet' => '9',
            'active_period' => '90',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "9x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "60 Menit"],
                ["icon" => "fa-solid fa-gift", "text" => "Hampers Special"],
                ["icon" => "fa-solid fa-comment", "text" => "Private Group Chat 24jam Selama 3 bulan"],
                ["icon" => "fa-solid fa-layer-group", "text" => "Bisa Bahas Mulai dari Perumusan Judul Skripsi"],
                ["icon" => "fa-solid fa-gears", "text" => "Bisa Bahas Penyusunan Proposal Skripsi"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review Draft Skripsi Perbab"],
                ["icon" => "fa-solid fa-star", "text" => "Rekomendasi Penulisan"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Bisa Bahas Revisi dari Dosen"],
                ["icon" => "fa-solid fa-person-chalkboard", "text" => "Persiapan Seminar Proposal dan Simulasi Sidang Akhir"],
            ],
            'product_type_id' => '1',
            'category_id' => '1',
            'form_config' => ["document" => 0],
            'promo_price' => '0',
        ]);

        Products::create([
            'id' => '5',
            'name' => 'Paket Dibimbing Olah Data Intensif',
            'slug' => 'paket-dibimbing-olah-data-intensif',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'online',
            'price' => '500000',
            'product_image' => 'product/bimbingan/bimbingan1720598310.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 14:58:30',
            'number_list' => '2',
            'duration' => '60',
            'total_meet' => '2',
            'active_period' => '7',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "2x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "60 Menit"],
                ["icon" => "fa-solid fa-comment", "text" => "Konsultasi via private group chat dengan Tutor selama 7 hari"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review Metode Penelitian"],
                ["icon" => "fa-solid fa-star", "text" => "Rekomendasi Penyajian Data"],
                ["icon" => "fa-solid fa-screwdriver-wrench", "text" => "Teknis Tools Olah Data"],
            ],
            'product_type_id' => '1',
            'category_id' => '1',
            'form_config' => ["topic" => 1, "document" => 1],
            'promo_price' => '152000',
        ]);

        Products::create([
            'id' => '6',
            'name' => 'Paket Dibimbing Sebulan',
            'slug' => 'paket-dibimbing-sebulan',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'online',
            'price' => '650000',
            'product_image' => 'product/bimbingan/bimbingan1720598324.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 14:58:44',
            'number_list' => '3',
            'duration' => '60',
            'total_meet' => '4',
            'active_period' => '30',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "4x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "60 Menit"],
                ["icon" => "fa-solid fa-comment", "text" => "Konsultasi via private group chat dengan Tutor selama 30 hari"],
                ["icon" => "fa-solid fa-gears", "text" => "Bisa Bahas Penyusunan & Perumusan Judul Skripsi"],
                ["icon" => "fa-solid fa-gears", "text" => "Penyusunan Proposal Skripsi"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Penyusunan Bab Pembahasan - selesai"],
                ["icon" => "fa-solid fa-star", "text" => "Rekomendasi Penulisan"],
                ["icon" => "fa-solid fa-person-chalkboard", "text" => " Persiapan Simulasi Sidang Skripsi"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Bahas Revisi dari Dosen"],
                ["icon" => "fa-solid fa-book", "text" => "Referensi artikel ilmiah/jurnal yang relevan"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review draft dan rekomendasi penulisan skripsi keseluruhan yang udah kamu susun"],
            ],
            'product_type_id' => '1',
            'category_id' => '1',
            'form_config' => ["document" => 0],
            'promo_price' => '102000',
        ]);

        Products::create([
            'id' => '7',
            'name' => 'Paket Dibimbing Seminggu Online',
            'slug' => 'paket-dibimbing-seminggu-online',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'online',
            'price' => '448000',
            'product_image' => 'product/bimbingan/bimbingan1720598385.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 14:59:45',
            'number_list' => '4',
            'duration' => '60',
            'total_meet' => '2',
            'active_period' => '7',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "2x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "60 Menit"],
                ["icon" => "fa-solid fa-comment", "text" => "Konsultasi via private group chat dengan Tutor selama 7 hari"],
                ["icon" => "fa-solid fa-comment-medical", "text" => "+3 hari tambahan private group chat (total 10 hari)"],
                ["icon" => "fa-solid fa-gears", "text" => "Bisa Bahas Penyusunan & Perumusan Judul Skripsi"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review outline atau Bab 1"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review draft Bab 2 atau Kajian Teori"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review draft Bab 3 atau Metode Penelitian"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review draft Bab 4 atau Analisa Pembahasan"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Bahas Revisi dari Dosen"],
                ["icon" => "fa-solid fa-book", "text" => "Referensi artikel ilmiah/jurnal yang relevan"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review draft dan rekomendasi penulisan skripsi keseluruhan yang udah kamu susun"],
            ],
            'product_type_id' => '1',
            'category_id' => '1',
            'form_config' => ["document" => 0],
            'promo_price' => '130000',
        ]);

        Products::create([
            'id' => '8',
            'name' => 'Paket Dibimbing Tuntas Online',
            'slug' => 'paket-dibimbing-tuntas-online',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'online',
            'price' => '1300000',
            'product_image' => 'product/bimbingan/bimbingan1720598395.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 14:59:55',
            'number_list' => '5',
            'duration' => '60',
            'total_meet' => '8',
            'active_period' => '90',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "8x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "60 Menit"],
                ["icon" => "fa-solid fa-comment", "text" => "Private Group Chat 24jam Selama 3 bulan"],
                ["icon" => "fa-solid fa-layer-group", "text" => "Bisa Bahas Mulai dari Perumusan Judul Skripsi"],
                ["icon" => "fa-solid fa-gears", "text" => "Bisa Bahas Penyusunan Proposal Skripsi"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review Draft Skripsi Perbab"],
                ["icon" => "fa-solid fa-star", "text" => "Rekomendasi Penulisan"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Bisa Bahas Revisi dari Dosen"],
                ["icon" => "fa-solid fa-person-chalkboard", "text" => "Persiapan Seminar Proposal dan Simulasi Sidang Akhir"],
            ],
            'product_type_id' => '1',
            'category_id' => '1',
            'form_config' => ["document" => 0],
            'promo_price' => '312000',
        ]);

        Products::create([
            'id' => '9',
            'name' => 'Paket Dibimbing Tuntas Hybrid',
            'slug' => 'paket-dibimbing-tuntas-hybrid',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'hybrid',
            'price' => '1488000',
            'product_image' => 'product/bimbingan/bimbingan1720598404.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 15:00:04',
            'number_list' => '6',
            'duration' => '75',
            'total_meet' => '8',
            'active_period' => '90',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Offline / Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "8x Pertemuan"],
                ["icon" => "fa-solid fa-clock", "text" => "75 Menit"],
                ["icon" => "fa-solid fa-comment", "text" => "Private Group Chat 24jam Selama 3 bulan"],
                ["icon" => "fa-solid fa-layer-group", "text" => "Bisa Bahas Mulai dari Perumusan Judul Skripsi"],
                ["icon" => "fa-solid fa-gears", "text" => "Bisa Bahas Penyusunan Proposal Skripsi"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Review Draft Skripsi Perbab"],
                ["icon" => "fa-solid fa-star", "text" => "Rekomendasi Penulisan"],
                ["icon" => "fa-solid fa-file-circle-check", "text" => "Bisa Bahas Revisi dari Dosen"],
                ["icon" => "fa-solid fa-person-chalkboard", "text" => "Persiapan Seminar Proposal dan Simulasi Sidang Akhir"],
            ],
            'product_type_id' => '1',
            'category_id' => '1',
            'form_config' => ["document" => 0],
            'promo_price' => '0',
        ]);

        Products::create([
            'id' => '10',
            'name' => '[Desk Review] Skripsi/Jurnal Semua Jurusan',
            'slug' => 'desk-review-skripsijurnal-semua-jurusan',
            'excerpt' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'description' => 'Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.',
            'contact_type' => 'other',
            'price' => '95000',
            'product_image' => 'product/bimbingan/bimbingan1720598448.png',
            'is_visible' => '1',
            'is_facilities' => '0',
            'created_at' => '2024-07-02 18:33:46',
            'updated_at' => '2024-07-10 15:00:48',
            'number_list' => '1',
            'duration' => '0',
            'total_meet' => '1',
            'active_period' => '90',
            'webinar_properties' => null,
            'facilities' => [
                ["icon" => "fa-solid fa-location-dot", "text" => "Offline / Online"],
                ["icon" => "fa-solid fa-calendar", "text" => "1x Pertemuan"],
                ["icon" => "fa-solid fa-star", "text" => "Tutor akan memberikan rekomendasi dan gambaran penulisan skripsi/jurnalmu"],
                ["icon" => "fa-solid fa-comment", "text" => "Kamu bisa melakukan diskusi dengan Tutor melalui program Add On +group chat / +virtual meet"],
                ["icon" => "fa-solid fa-note-sticky", "text" => "Tutor akan beri catatan/notes di skripsi/jurnal yang udah kamu tulis"],
            ],
            'product_type_id' => '1',
            'category_id' => '3',
            'form_config' => ["document" => 1],
            'promo_price' => '30000',
        ]);

        // DB::insert('insert into category_products (category_id, products_id) values (2, 1)');
        // DB::insert('insert into category_products (category_id, products_id) values (3, 1)');

        // DB::table('products_topic')->insert(['products_id' => 1, 'topic_id' => 1]);
        // DB::table('products_topic')->insert(['products_id' => 1, 'topic_id' => 2]);
        // DB::table('products_topic')->insert(['products_id' => 1, 'topic_id' => 3]);
        // DB::table('products_topic')->insert(['products_id' => 2, 'topic_id' => 1]);
        // DB::table('products_topic')->insert(['products_id' => 2, 'topic_id' => 2]);
        // DB::table('products_topic')->insert(['products_id' => 2, 'topic_id' => 3]);

    }
}
