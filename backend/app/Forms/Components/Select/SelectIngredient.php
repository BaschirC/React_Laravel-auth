<?php

namespace App\Forms\Components\Select;

class SelectIngredient extends Select
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->afterStateUpdated(function ($state) {

        });
    }
}