<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTarifsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarifs', function (Blueprint $table) {
            $table->id();
            $table->uuid('customer_id');
            $table->string('nama');
            $table->string('group')->nullable();
            $table->string('shortcut_key', 1);
            $table->integer('tarif_flat')->default(0);
            $table->integer('denda_tiket_hilang')->default(0);
            $table->boolean('mode_tarif')->default(0);
            $table->integer('menit_pertama')->nullable();
            $table->integer('tarif_menit_pertama')->nullable();
            $table->integer('menit_selanjutnya')->nullable();
            $table->integer('tarif_menit_selanjutnya')->nullable();
            $table->integer('tarif_maksimum')->nullable();
            $table->integer('tarif_menginap')->nullable();
            $table->integer('mode_menginap')->default(0);
            $table->boolean('is_default')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tarifs');
    }
}
