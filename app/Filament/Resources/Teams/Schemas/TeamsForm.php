<?php

namespace App\Filament\Resources\Teams\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;

class TeamsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('name')
                    ->required()
                    ->maxLength(255),

                TextInput::make('position')
                    ->required()
                    ->maxLength(255),

                FileUpload::make('photo')
                    ->image()
                    ->disk('public')
                    ->directory('portfolios')
                    ->required(),
                
                Textarea::make('bio')
                    ->required()
                    ->columnSpanFull(),
                
                TextInput::make('email')
                    ->required(),
                
                TextInput::make('telegram')
                    ->required(),
                
                TextInput::make('github_url')
                    ->url()
                    ->required(),

                TextInput::make('instagram_url')
                    ->url()
                    ->required(),

                TextInput::make('linkedin_url')
                    ->url()
                    ->required(),

                TextInput::make('portfolio_url')
                    ->url()
                    ->required(),
            ]);
    }
}
