<?php

namespace App\Filament\Resources\Reviews\Pages;

use App\Filament\Resources\Reviews\ReviewsResource;
use App\Filament\Widgets\ReviewTokensWidget;
use App\Models\ReviewTokens;
use Filament\Actions\Action;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Support\Str;

class ListReviews extends ListRecords
{
    protected static string $resource = ReviewsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('generateToken')
                ->label('Generate Token')
                ->icon('heroicon-o-key')
                ->color('warning')
                ->action(function () {
                    ReviewTokens::create([
                        'token' => Str::upper(Str::random(8)),
                        'is_used' => false,
                    ]);
                }),
        ];
    }

    protected function getFooterWidgets(): array
    {
        return [
            ReviewTokensWidget::class,
        ];
    }
}