<?php

use Illuminate\Support\Facades\Route;
use App\Http\Resources\Admin\DashboardApiResource;
use App\Http\Resources\Admin\HoanThanhApiResource;
use App\Http\Resources\Admin\ShowChiTietKhoaHoc;
use App\Http\Resources\Admin\EditCodeApi;
use App\Http\Resources\Admin\KhoaHocDaHocApiResource;
use App\Http\Resources\ThanhToanApiResource;
use Illuminate\Http\Request;



//models
use App\Models\BaiHoc;
use App\Models\GiangVien;
use App\Models\ChuDe;
use App\Models\KhoaHoc;
use App\Models\MoTa;
use App\Models\NguoiDung;
use App\Models\TheLoai;
use App\Models\GioHang;
use App\Models\DanhGia;
use App\Models\MoTaHoc;
use App\Models\DoanhThu;
use App\Models\TheNganHang;
use App\Models\DangKy;
use App\Models\VideoDaHoc;
use App\Models\Video;
use App\Models\TrinhDo;
use App\Models\TheLoaiCon;
use App\Models\KhoaHocDaHoc;
use App\Models\ThanhToan;









Route::prefix('admin-api')->group(function () {
    Route::get('/dashboard', function () {
        $khoaHoc = KhoaHoc::where('trangthai', 'Pending')->with([
            'giangvien.nguoidung',
            'chude',
            'theloaicon',
            'baihocs.video', // Include lessons and their videos
        ])->get();

        // You can also adjust $theLoai and $baihoc if needed
        // For this example, we'll focus on $khoaHoc

        return response()->json([
            'khoahoc' => DashboardApiResource::collection($khoaHoc),
        ]);
    });
    Route::get("ChiTietKhoaHoc/{id}", function ($id) {
        try {
            $khoaHoc = KhoaHoc::with(['baihocs', 'giangvien'])->find($id);
            if (!$khoaHoc) {
                return response()->json(['error' => 'Không tìm thấy khóa học'], 404);
            }

            return new ShowChiTietKhoaHoc($khoaHoc);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    });
    Route::post("/tuchoi", function (Request $request) {
        try {
            $khoaHoc = KhoaHoc::find($request->id);
            if (!$khoaHoc) {
                return response()->json(['error' => 'Không tìm thấy khóa học'], 404);
            }

            $khoaHoc->trangthai = "Decline";
            $khoaHoc->save();

            return response()->json([
                'message' => 'Từ chối khóa học thành công',
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    });
    Route::post("/chapnhan", function (Request $request) {
        try {
            $khoaHoc = KhoaHoc::find($request->id);
            if (!$khoaHoc) {
                return response()->json(['error' => 'Không tìm thấy khóa học'], 404);
            }

            $khoaHoc->trangthai = "active";
            $khoaHoc->save();

            return response()->json([
                'message' => 'Chấp nhận khóa học thành công',
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    });
    Route::get("/hoanthanh", function (Request $request) {
        try {
            $khoaHoc = KhoaHoc::where('trangthai', 'active')->with([
                'giangvien.nguoidung',
                'chude',
                'theloaicon',
                'baihocs.video', // Include lessons and their videos
            ])->get();
            if (!$khoaHoc) {
                return response()->json(['error' => 'Không tìm thấy khóa học'], 404);
            }

            return HoanThanhApiResource::collection($khoaHoc);

    
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    });
    
    Route::get('khoahoctrangthai', function (Request $request) {
        $khoahoc = KhoaHoc::with(['baihocs', 'giangvien'])->get();
        if ($khoahoc->isEmpty()) {
            return response()->json(['error' => 'Lỗi'], 404);
        }
        return HoanThanhApiResource::collection($khoahoc);
    });
    Route::get('khoahocdahoanthanh', function (Request $request) {
        $khoahocdahoc = KhoaHocDaHoc::with(['khoahoc', 'nguoidung'])->get();
    if(!$khoahocdahoc){
        return response()->json(['error'=> 'Lỗi'], 404);
    }
    return KhoaHocDaHocApiResource::collection($khoahocdahoc);
    });
    Route::get("khoahocmoi", function (Request $request) {
        $dangkymoi = ThanhToan::with(["khoahocs", "nguoidungs"])->get();
        if ($dangkymoi->isEmpty()) {
            return response()->json(["error"=> "Lỗi"], 404);
        }
        return ThanhToanApiResource::collection($dangkymoi);
    });






    //chỉnh sửa code
    Route::get("/source/api", function () {
        $path = app_path('/../routes/api.php');
        if (file_exists($path)) {
            // Read the file content
            $fileContent = file_get_contents($path);
            return new EditCodeApi(null, $fileContent);
        }
        return response()->json(['error' => 'File không tồn tại.'], 404);
    });
    Route::post("/source/api", function (Request $request) {
        $path = app_path('/../routes/api.php');
        if (file_exists($path)) {
            // Ghi nội dung mới vào file
            $fileContent = file_put_contents($path, $request->input('content'));
            return new EditCodeApi(null, $fileContent);
        }
        return response()->json(['error' => 'File không tồn tại.'], 404);
    });
    
    
});