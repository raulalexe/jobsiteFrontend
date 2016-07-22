app.controller('HomeCtrl', ['JobService', function(JobService){
	var vm = this;

	vm.jobs = {};

	var getJobs = function(keywords, location, skip, toget, categories, sortBy){
		JobService.getJobs(keywords, location, skip, toget, categories, sortBy)
			.then(function(data){
				vm.jobs = data.jobs.docs;
			}, function(err){
				console.log(err);
			});
	};

	getJobs('', '', 0, 5);
}]);