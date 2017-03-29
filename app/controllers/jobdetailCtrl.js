app.controller('JobDetailCtrl', ['JobService', '$routeParams', '$scope',
    function(JobService, $routeParams, $scope) {
        var vm = this;

        vm.job = {};

        var getJob = function(id) {
            JobService.getJob(id)
                .then(function(data) {
                    vm.job = data;
                    $scope.htmlReady();
                }, function(err) {
                    console.log(err);
                });
        };

        getJob($routeParams.id);
    }
]);