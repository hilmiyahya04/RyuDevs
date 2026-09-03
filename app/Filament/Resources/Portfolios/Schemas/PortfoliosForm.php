<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;

class PortfoliosForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255),

                TextInput::make('slug')
                    ->required()
                    ->maxLength(255),

                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),

                FileUpload::make('thumbnail')
                    ->image()
                    ->disk('public')
                    ->directory('portfolios')
                    ->required(),

                TextInput::make('project_url')
                    ->url()
                    ->required(),

                TextInput::make('github_url')   
                    ->url()
                    ->required(),

                Select::make('category')
                    ->options([
                        'Freelance' => 'Freelance',
                        'Desktop Application' => 'Desktop Application',
                        'Mobile Application' => 'Mobile Application',
                        'Web Application' => 'Web Application',
                        'Plugin / Extension' => 'Plugin / Extension',
                    ])
                    ->required(),
            ]);
    }
}