        <?php
        
        use Illuminate\Database\Migrations\Migration;
        use Illuminate\Database\Schema\Blueprint;
        use Illuminate\Support\Facades\Schema;
        
        class CreateNguoidungTable extends Migration
        {
            /**
             * Run the migrations.
             *
             * @return void
             */
            public function up()
            {
                Schema::create('nguoidung', function (Blueprint $table) {
                    $table->id();
                    $table->string('ten');
                    $table->string('email')->unique();
                    $table->string('dienthoai', 20); // Change to VARCHAR with length 20
                    $table->string('hinh')->nullable();
                    $table->string('matkhau');
                    $table->integer('vaitro');
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
                Schema::table('other_table', function (Blueprint $table) {
                    $table->dropForeign(['foreign_key_column_name']);
                });

                Schema::dropIfExists('nguoidung');
            }

        }