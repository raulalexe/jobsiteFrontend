app.controller('JobDetailCtrl', ['JobService','$routeParams', function(JobService, $routeParams){
	var vm = this;

	vm.job = {};

	var getJob = function(id){
		JobService.getJob(id)
			.then(function(data){
				vm.job = data;
			}, function(err){
				console.log(err);
			});
	};

	getJob($routeParams.id);
}]);