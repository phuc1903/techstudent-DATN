<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTablesAddKeysAndConstraints extends Migration
{
    public function up()
    {
        $this->addForeignKeysToBaihoc();
        $this->addForeignKeysToBangcap();
        $this->addForeignKeysToChude();
        $this->addForeignKeysToChungchi();
        $this->addForeignKeysToDanhgia();
        $this->addForeignKeysToDoanhthu();
        $this->addForeignKeysToDonhang();
        $this->addForeignKeysToDonhangchitiet();
        $this->addForeignKeysToGiangvien();
        $this->addForeignKeysToGiohang();
        $this->addForeignKeysToKhoahoc();
        $this->addForeignKeysToKhoahocdahoc();
        $this->addForeignKeysToMagiamgia();
        $this->addForeignKeysToMagiamgiakhoahoc();
        $this->addForeignKeysToMangxahoi();
        $this->addForeignKeysToNguoidungmagiamgia();
        $this->addForeignKeysToNhantin();
        $this->addForeignKeysToRuttien();
        $this->addForeignKeysToSoluongdangky();
        $this->addForeignKeysToThanhtoan();
     
        $this->addForeignKeysToThoiluongvideo();
        $this->addForeignKeysToTinnhan();
        $this->addForeignKeysToTracnghiem();
        $this->addForeignKeysToTrinhdo();
        $this->addForeignKeysToVideo();
        $this->addForeignKeysToVideodahoc();
    }

    private function addForeignKeysToBaihoc()
    {
        Schema::table('baihoc', function (Blueprint $table) {
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
        });
    }

    private function addForeignKeysToBangcap()
    {
        Schema::table('bangcap', function (Blueprint $table) {
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
        });
    }

    private function addForeignKeysToChude()
    {
        Schema::table('chude', function (Blueprint $table) {
            $table->unsignedBigInteger('id_theloaicon')->change();
            $table->foreign('id_theloaicon')->references('id')->on('theloai_theloaicon')->onDelete('cascade');
        });
    }

    private function addForeignKeysToChungchi()
    {
        Schema::table('chungchi', function (Blueprint $table) {
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    private function addForeignKeysToDanhgia()
    {
        Schema::table('danhgia', function (Blueprint $table) {
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    private function addForeignKeysToDoanhthu()
    {
        Schema::table('doanhthu', function (Blueprint $table) {
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
        });
    }

    private function addForeignKeysToDonhang()
    {
        Schema::table('donhang', function (Blueprint $table) {
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    private function addForeignKeysToDonhangchitiet()
    {
        Schema::table('donhangchitiet', function (Blueprint $table) {
            $table->unsignedBigInteger('id_donhang')->change();
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->foreign('id_donhang')->references('id')->on('donhang')->onDelete('cascade');
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
        });
    }

    private function addForeignKeysToGiangvien()
    {
        Schema::table('giangvien', function (Blueprint $table) {
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    private function addForeignKeysToGiohang()
    {
        Schema::table('giohang', function (Blueprint $table) {
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    private function addForeignKeysToKhoahoc()
    {
        Schema::table('khoahoc', function (Blueprint $table) {
            $table->unsignedBigInteger('id_chude')->change();
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->unsignedBigInteger('id_theloaicon')->change();
            $table->unsignedBigInteger('id_theloai')->change();
            $table->foreign('id_chude')->references('id')->on('chude')->onDelete('cascade');
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
            $table->foreign('id_theloaicon')->references('id')->on('theloai_theloaicon')->onDelete('cascade');
            $table->foreign('id_theloai')->references('id')->on('theloai_theloaicon')->onDelete('cascade');
        });
    }

    private function addForeignKeysToKhoahocdahoc()
    {
        Schema::table('khoahocdahoc', function (Blueprint $table) {
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
        });
    }

    private function addForeignKeysToMagiamgia()
    {
        Schema::table('magiamgia', function (Blueprint $table) {
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
        });
    }

    private function addForeignKeysToMagiamgiakhoahoc()
    {
        Schema::table('magiamgiakhoahoc', function (Blueprint $table) {
            $table->unsignedBigInteger('id_magiamgia')->change();
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->foreign('id_magiamgia')->references('id')->on('magiamgia')->onDelete('cascade');
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
        });
    }

    private function addForeignKeysToMangxahoi()
    {
        Schema::table('mangxahoi', function (Blueprint $table) {
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
        });
    }

    private function addForeignKeysToNguoidungmagiamgia()
    {
        Schema::table('nguoidungmagiamgia', function (Blueprint $table) {
            $table->unsignedBigInteger('id_magiamgia')->change();
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_magiamgia')->references('id')->on('magiamgia')->onDelete('cascade');
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    private function addForeignKeysToNhantin()
    {
        Schema::table('nhantin', function (Blueprint $table) {
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
        });
    }

    private function addForeignKeysToRuttien()
    {
        Schema::table('ruttien', function (Blueprint $table) {
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->unsignedBigInteger('id_thenganhang')->change();
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
            $table->foreign('id_thenganhang')->references('id')->on('thenganhang')->onDelete('cascade');
        });
    }

    private function addForeignKeysToSoluongdangky()
    {
        Schema::table('soluongdangky', function (Blueprint $table) {
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
        });
    }

    private function addForeignKeysToThanhtoan()
    {
        Schema::table('thanhtoan', function (Blueprint $table) {
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

 

    private function addForeignKeysToThoiluongvideo()
    {
        Schema::table('thoiluongvideo', function (Blueprint $table) {
            $table->unsignedBigInteger('id_video')->change();
            $table->foreign('id_video')->references('id')->on('video')->onDelete('cascade');
        });
    }

    private function addForeignKeysToTinnhan()
    {
        Schema::table('tinnhan', function (Blueprint $table) {
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    private function addForeignKeysToTracnghiem()
    {
        Schema::table('tracnghiem', function (Blueprint $table) {
            $table->unsignedBigInteger('id_baihoc')->change();
            $table->foreign('id_baihoc')->references('id')->on('baihoc')->onDelete('cascade');
        });
    }

    private function addForeignKeysToTrinhdo()
    {
        Schema::table('trinhdo', function (Blueprint $table) {
            $table->unsignedBigInteger('id_giangvien')->change();
            $table->unsignedBigInteger('id_khoahoc')->change();
            $table->foreign('id_giangvien')->references('id')->on('giangvien')->onDelete('cascade');
            $table->foreign('id_khoahoc')->references('id')->on('khoahoc')->onDelete('cascade');
        });
    }

    private function addForeignKeysToVideo()
    {
        Schema::table('video', function (Blueprint $table) {
            $table->unsignedBigInteger('id_baihoc')->change();
            $table->foreign('id_baihoc')->references('id')->on('baihoc')->onDelete('cascade');
        });
    }

    private function addForeignKeysToVideodahoc()
    {
        Schema::table('videodahoc', function (Blueprint $table) {
            $table->unsignedBigInteger('id_video')->change();
            $table->unsignedBigInteger('id_nguoidung')->change();
            $table->foreign('id_video')->references('id')->on('video')->onDelete('cascade');
            $table->foreign('id_nguoidung')->references('id')->on('nguoidung')->onDelete('cascade');
        });
    }

    public function down()
    {
        $this->dropForeignKeysFromVideodahoc();
        $this->dropForeignKeysFromVideo();
        $this->dropForeignKeysFromTrinhdo();
        $this->dropForeignKeysFromTracnghiem();
        $this->dropForeignKeysFromTinnhan();
        $this->dropForeignKeysFromThoiluongvideo();
        $this->dropForeignKeysFromTheloaiTheloaicon();
        $this->dropForeignKeysFromThanhtoan();
        $this->dropForeignKeysFromSoluongdangky();
        $this->dropForeignKeysFromRuttien();
        $this->dropForeignKeysFromNhantin();
        $this->dropForeignKeysFromNguoidungmagiamgia();
        $this->dropForeignKeysFromMangxahoi();
        $this->dropForeignKeysFromMagiamgiakhoahoc();
        $this->dropForeignKeysFromMagiamgia();
        $this->dropForeignKeysFromKhoahocdahoc();
        $this->dropForeignKeysFromKhoahoc();
        $this->dropForeignKeysFromGiohang();
        $this->dropForeignKeysFromGiangvien();
        $this->dropForeignKeysFromDonhangchitiet();
        $this->dropForeignKeysFromDonhang();
        $this->dropForeignKeysFromDoanhthu();
        $this->dropForeignKeysFromDanhgia();
        $this->dropForeignKeysFromChungchi();
        $this->dropForeignKeysFromChude();
        $this->dropForeignKeysFromBangcap();
        $this->dropForeignKeysFromBaihoc();
    }

    private function dropForeignKeysFromBaihoc()
    {
        if (Schema::hasTable('baihoc')) {
            Schema::table('baihoc', function (Blueprint $table) {
                $table->dropForeign(['id_khoahoc']);
            });
        }
    }

    private function dropForeignKeysFromBangcap()
    {
        if (Schema::hasTable('bangcap')) {
            Schema::table('bangcap', function (Blueprint $table) {
                $table->dropForeign(['id_giangvien']);
            });
        }
    }

    private function dropForeignKeysFromChude()
    {
        if (Schema::hasTable('chude')) {
            Schema::table('chude', function (Blueprint $table) {
                $table->dropForeign(['id_theloaicon']);
            });
        }
    }

    private function dropForeignKeysFromChungchi()
    {
        if (Schema::hasTable('chungchi')) {
            Schema::table('chungchi', function (Blueprint $table) {
                $table->dropForeign(['id_khoahoc', 'id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromDanhgia()
    {
        if (Schema::hasTable('danhgia')) {
            Schema::table('danhgia', function (Blueprint $table) {
                $table->dropForeign(['id_khoahoc', 'id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromDoanhthu()
    {
        if (Schema::hasTable('doanhthu')) {
            Schema::table('doanhthu', function (Blueprint $table) {
                $table->dropForeign(['id_khoahoc', 'id_giangvien']);
            });
        }
    }

    private function dropForeignKeysFromDonhang()
    {
        if (Schema::hasTable('donhang')) {
            Schema::table('donhang', function (Blueprint $table) {
                $table->dropForeign(['id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromDonhangchitiet()
    {
        if (Schema::hasTable('donhangchitiet')) {
            Schema::table('donhangchitiet', function (Blueprint $table) {
                $table->dropForeign(['id_donhang', 'id_khoahoc']);
            });
        }
    }

    private function dropForeignKeysFromGiangvien()
    {
        if (Schema::hasTable('giangvien')) {
            Schema::table('giangvien', function (Blueprint $table) {
                $table->dropForeign(['id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromGiohang()
    {
        if (Schema::hasTable('giohang')) {
            Schema::table('giohang', function (Blueprint $table) {
                $table->dropForeign(['id_khoahoc', 'id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromKhoahoc()
    {
        if (Schema::hasTable('khoahoc')) {
            Schema::table('khoahoc', function (Blueprint $table) {
                $table->dropForeign(['id_chude', 'id_giangvien', 'id_theloaicon', 'id_theloai']);
            });
        }
    }

    private function dropForeignKeysFromKhoahocdahoc()
    {
        if (Schema::hasTable('khoahocdahoc')) {
            Schema::table('khoahocdahoc', function (Blueprint $table) {
                $table->dropForeign(['id_nguoidung', 'id_khoahoc']);
            });
        }
    }

    private function dropForeignKeysFromMagiamgia()
    {
        if (Schema::hasTable('magiamgia')) {
            Schema::table('magiamgia', function (Blueprint $table) {
                $table->dropForeign(['id_giangvien']);
            });
        }
    }

    private function dropForeignKeysFromMagiamgiakhoahoc()
    {
        if (Schema::hasTable('magiamgiakhoahoc')) {
            Schema::table('magiamgiakhoahoc', function (Blueprint $table) {
                $table->dropForeign(['id_magiamgia', 'id_khoahoc']);
            });
        }
    }

    private function dropForeignKeysFromMangxahoi()
    {
        if (Schema::hasTable('mangxahoi')) {
            Schema::table('mangxahoi', function (Blueprint $table) {
                $table->dropForeign(['id_nguoidung', 'id_giangvien']);
            });
        }
    }

    private function dropForeignKeysFromNguoidungmagiamgia()
    {
        if (Schema::hasTable('nguoidungmagiamgia')) {
            Schema::table('nguoidungmagiamgia', function (Blueprint $table) {
                $table->dropForeign(['id_magiamgia', 'id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromNhantin()
    {
        if (Schema::hasTable('nhantin')) {
            Schema::table('nhantin', function (Blueprint $table) {
                $table->dropForeign(['id_nguoidung', 'id_giangvien']);
            });
        }
    }

    private function dropForeignKeysFromRuttien()
    {
        if (Schema::hasTable('ruttien')) {
            Schema::table('ruttien', function (Blueprint $table) {
                $table->dropForeign(['id_giangvien', 'id_thenganhang']);
            });
        }
    }

    private function dropForeignKeysFromSoluongdangky()
    {
        if (Schema::hasTable('soluongdangky')) {
            Schema::table('soluongdangky', function (Blueprint $table) {
                $table->dropForeign(['id_khoahoc', 'id_giangvien']);
            });
        }
    }

    private function dropForeignKeysFromThanhtoan()
    {
        if (Schema::hasTable('thanhtoan')) {
            Schema::table('thanhtoan', function (Blueprint $table) {
                $table->dropForeign(['id_khoahoc', 'id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromTheloaiTheloaicon()
    {
        if (Schema::hasTable('theloai_theloaicon')) {
            Schema::table('theloai_theloaicon', function (Blueprint $table) {
                $table->dropForeign(['id_theloai']);
            });
        }
    }

    private function dropForeignKeysFromThoiluongvideo()
    {
        if (Schema::hasTable('thoiluongvideo')) {
            Schema::table('thoiluongvideo', function (Blueprint $table) {
                $table->dropForeign(['id_video']);
            });
        }
    }

    private function dropForeignKeysFromTinnhan()
    {
        if (Schema::hasTable('tinnhan')) {
            Schema::table('tinnhan', function (Blueprint $table) {
                $table->dropForeign(['id_giangvien', 'id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromTracnghiem()
    {
        if (Schema::hasTable('tracnghiem')) {
            Schema::table('tracnghiem', function (Blueprint $table) {
                $table->dropForeign(['id_baihoc']);
            });
        }
    }

    private function dropForeignKeysFromTrinhdo()
    {
        if (Schema::hasTable('trinhdo')) {
            Schema::table('trinhdo', function (Blueprint $table) {
                $table->dropForeign(['id_giangvien', 'id_khoahoc']);
            });
        }
    }

    private function dropForeignKeysFromVideodahoc()
    {
        if (Schema::hasTable('videodahoc')) {
            Schema::table('videodahoc', function (Blueprint $table) {
                $table->dropForeign(['id_video', 'id_nguoidung']);
            });
        }
    }

    private function dropForeignKeysFromVideo()
    {
        if (Schema::hasTable('video')) {
            Schema::table('video', function (Blueprint $table) {
                $table->dropForeign(['id_baihoc']);
            });
        }
    }
}