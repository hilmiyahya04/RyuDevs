<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfoliosController;
use App\Http\Controllers\Api\TeamsController;
use App\Http\Controllers\Api\ReviewController;

Route::get('/portfolios', [PortfoliosController::class, 'index']);
Route::get('/teams', [TeamsController::class, 'index']);
Route::get('/review', [ReviewController::class, 'index']);


Route::post('/portfolios', [PortfoliosController::class, 'store']);
Route::post('/teams', [TeamsController::class, 'store']);
Route::post('/review', [ReviewController::class, 'store']);
