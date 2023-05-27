<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(Roleseeder::class);
        $this->call(operatorSeeder::class);
        $this->call(usersSeeder::class);
        $this->call(productosSeeder::class);
        $this->call(servicesSeeder::class);


    }
}
