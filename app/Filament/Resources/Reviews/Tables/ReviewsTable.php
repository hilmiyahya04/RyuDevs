<?php

namespace App\Filament\Resources\Reviews\Tables;

use App\Models\Reviews;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ReviewsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('customer_name')
                    ->searchable(),
                TextColumn::make('position'),
                TextColumn::make('email'),
                TextColumn::make('review')
                    ->limit(50),
                BadgeColumn::make('status')
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'approved',
                    ]),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->label('Dikirim'),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->options([
                        'pending' => 'Pending',
                        'approved' => 'Approved',
                    ]),
            ])
            ->actionsColumnLabel('Aksi')
            ->recordActions([
                \Filament\Actions\Action::make('approve')
                    ->label('Approve')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->visible(fn (Reviews $record) => $record->status === 'pending')
                    ->action(fn (Reviews $record) => $record->update(['status' => 'approved']))
                    ->requiresConfirmation(),
                EditAction::make(),
                DeleteAction::make(),
            ]);
    }
}