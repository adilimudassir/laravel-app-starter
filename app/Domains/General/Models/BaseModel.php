<?php

namespace Domains\General\Models;

use Altek\Accountant\Contracts\Recordable;
use GeneaLabs\LaravelModelCaching\Traits\Cachable;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model implements Recordable
{
    use \Altek\Accountant\Recordable;
    use Cachable;
}
