<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Dashboard;
use App\Http\Controllers\Admin\Student;
use App\Http\Controllers\Admin\Setting;
use App\Http\Controllers\Admin\EditCodeApi;
use App\Http\Controllers\Admin\EditBanner;

Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [Dashboard::class, 'index']);
    Route::get('/dangtienhanh', [Dashboard::class, 'progress']);
    Route::get('/hoanthanh', [Dashboard::class, 'completed']);  
    Route::Get('/khoahocdangtienhanh/{id}', [Dashboard::class, 'Details']);
    Route::Get('/khoahodahoanhthanh', [Dashboard::class, 'DaHoc']);
    Route::Get('/khoahocdangkymoi', [Dashboard::class, 'DangKyMoi']);
    
    Route::Get('/ThemBanner', [EditBanner::class, 'ThemBanner']);
    Route::Get('/ShowBanner', [EditBanner::class, 'ShowBanner']);


    
    Route::get('/thongke', [Setting::class,'index']);
    Route::get('/sinhvien', [Student::class, 'index']);
  

    //chỉnh sửa code
    Route::get('adminCodeApi', [EditCodeApi::class,'index']);









  



















    
});