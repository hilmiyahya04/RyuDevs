    <?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfoliosController;
use App\Http\Controllers\Api\TeamsController;

Route::get('/portfolios', [PortfoliosController::class, 'index']);
Route::post('/portfolios', [PortfoliosController::class, 'store']);

Route::get('/teams', [TeamsController::class, 'index']);
Route::post('/teams', [TeamsController::class, 'store']);