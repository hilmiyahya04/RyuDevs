<?php

namespace App\Filament\Resources\Portfolios\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class PortfoliosTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([

                TextColumn::make('title')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('slug')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('description')
                    ->sortable()
                    ->searchable(),

                ImageColumn::make('thumbnail')
                    ->disk('public')
                    ->width(50)
                    ->height(50)
                    ->circular(),

                TextColumn::make('project_url')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('github_url')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('category')
                    ->sortable()
                    ->searchable(),

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
