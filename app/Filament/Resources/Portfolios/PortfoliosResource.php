<?php

namespace App\Filament\Resources\Portfolios;

use App\Filament\Resources\Portfolios\Pages\CreatePortfolios;
use App\Filament\Resources\Portfolios\Pages\EditPortfolios;
use App\Filament\Resources\Portfolios\Pages\ListPortfolios;
use App\Filament\Resources\Portfolios\Schemas\PortfoliosForm;
use App\Filament\Resources\Portfolios\Tables\PortfoliosTable;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use App\Models\Portfolios;

class PortfoliosResource extends Resource
{
    protected static ?string $model = Portfolios::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-identification';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return PortfoliosForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PortfoliosTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPortfolios::route('/'),
            'create' => CreatePortfolios::route('/create'),
            'edit' => EditPortfolios::route('/{record}/edit'),
        ];
    }
}
