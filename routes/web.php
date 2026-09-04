<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfoliosController;
use App\Http\Controllers\Api\TeamsController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ReviewController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/give-review', function () {
    return view('review-page');
});

Route::get('/portfolios', [PortfoliosController::class, 'index']);
Route::post('/portfolios', [PortfoliosController::class, 'store']);
Route::get('/teams', [TeamsController::class, 'index']);
Route::post('/teams', [TeamsController::class, 'store']);
Route::get('/review', [ReviewController::class, 'index']);
Route::post('/review', [ReviewController::class, 'store']);
Route::post('/contact', [ContactController::class, 'store']);