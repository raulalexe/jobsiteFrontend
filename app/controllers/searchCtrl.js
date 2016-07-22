app.controller('SearchCtrl', ['$location','$rootScope', '$anchorScroll', 'JobService', function($location, $rootScope, $anchorScroll, JobService){
	var vm = this;

	vm.jobCount;
	
	var updateFormData = function(){
		var formData = $location.search();
		vm.keywords = (typeof formData.keywords === "undefined") ? null : formData.keywords;
		vm.location = (typeof formData.location === "undefined") ? null : formData.location;
	}

	var getJobCount = function(){
		JobService.getJobCount()
			.then(function(data){
				vm.jobCount = data.count;
			}, function(err){
				console.log(err);
			});
	}

	var searchJobs = function(){
		$location.path('/jobs').search({'keywords': vm.keywords, 'location': vm.location});
	}

	vm.searchJobs = searchJobs;

	$rootScope.$on("$routeChangeSuccess", function(){
		updateFormData();
		loc = $location.search().location;
		if(loc !== undefined && loc.toLowerCase() === 'remote'){
			vm.activeNav = $location.path().replace('/','') + loc.toLowerCase();
		}
		else{
			vm.activeNav = $location.path().replace('/','');
		}
	});

	getJobCount();
}]);