<?php

namespace App\Filament\Resources\Teams\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class TeamsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('position')
                    ->sortable()
                    ->searchable(),

                ImageColumn::make('photo')
                    ->disk('public')
                    ->width(50)
                    ->height(50)
                    ->circular(),

                TextColumn::make('email')
                    ->searchable(),

                TextColumn::make('telegram')
                    ->searchable(),

                TextColumn::make('linkedin_url')
                    ->searchable(),

                TextColumn::make('github_url')
                    ->sortable(),

                TextColumn::make('instagram_url')
                    ->sortable(),

                TextColumn::make('portfolio_url')
                    ->sortable(),

                TextColumn::make('created_at')
                    ->dateTime('M d, Y')
                    ->sortable(),

            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->actionsColumnLabel('Aksi')
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
