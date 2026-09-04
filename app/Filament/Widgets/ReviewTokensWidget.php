<?php

namespace App\Filament\Widgets;

use App\Models\ReviewTokens;
use Filament\Actions\DeleteAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class ReviewTokensWidget extends BaseWidget
{
    protected static ?string $heading = 'Review Tokens';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(ReviewTokens::query()->latest())
            ->columns([
                TextColumn::make('token')
                    ->searchable()
                    ->copyable()
                    ->copyMessage('Token disalin!'),
                IconColumn::make('is_used')
                    ->boolean()
                    ->label('Sudah Dipakai'),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->label('Dibuat'),
            ])
            ->recordActions([
                DeleteAction::make(),
            ])
            ->paginated([5, 10]);
    }
}