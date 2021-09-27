@servers(['prod' => ['mitrateparking@report.palangparkirsemarang.com']])

@task('deploy', ['on' => 'prod'])
    cd apps/parking-report
    git pull
    php artisan migrate --force
@endtask

