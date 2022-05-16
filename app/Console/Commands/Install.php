<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Composer;

class Install extends Command
{
    protected $composer;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install Application';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Composer $composer)
    {
        parent::__construct();

        $this->composer = $composer;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('Installing');

        $this->info('');
        $this->info('Generating Application Key...');
        $this->call('key:generate');
        $this->info('Done!');

        $this->info('');
        $this->info('Migrating Database...');
        $this->call('migrate:fresh');
        $this->info('Done!');

        $this->info('');
        $this->info('Seeding Database Records...');
        $this->call('db:seed');
        $this->info('Done!');

        $this->info('');
        $this->info('Dumping the autoload files and reloading all new files');
        $this->composer->dumpAutoloads();

        $this->info('Successfully Installed Application. Enjoy!');
    }
}
