<?php

namespace App\Enums;

enum VacationStatusEnum: string
{
    case ONGOING = 'Ongoing';
    case TAKEN = 'Taken';
    case REQUESTED = 'Requested';
    case APPROVED = 'Approved';
    case DENIED = 'Denied';
}