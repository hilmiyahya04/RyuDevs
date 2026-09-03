<?php

namespace App\Filament\Resources\Reviews\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use App\Models\Contacs;

class ReviewsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('customer_name')
                    ->options(
                        Contacs::query()
                            ->pluck('name', 'name')
                    )
                    ->searchable()
                    ->required(),

                TextInput::make('position')
                    ->required(),

                TextInput::make('review')
                    ->required(),

                TextInput::make('token')
                    ->required(),
            ]);
    }
}
