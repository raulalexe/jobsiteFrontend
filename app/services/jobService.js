app.factory('JobService', ['$http', function($http){
	var jobServiceFactory = {};

	var _getJob = function(id){
		var queryUrl = serviceUrl + "/job/" + id;
		return $http.get(queryUrl).then( function(resp) {
			return resp.data;
		});
	};

	var _getJobs = function(keywords, location, skip, toget, categories){
		var query = serviceUrl + "/jobs/?";
            //set parameters in case they were not sent
            keywords = (typeof keywords === "undefined") ? "" : encodeURIComponent(keywords);
            skip = (typeof skip === "undefined") ? "0" : skip;
            toget = (typeof toget === "undefined") ? "15" : toget;
            categories = (typeof categories === "undefined") ? "" : categories;
            location = (typeof location === "undefined") ? "" : location;

            query = query + "keywords=" + keywords + "&location="+ location + "&skip="+skip+"&get="+toget;

            return $http.get(query).then( function(resp){
            	return resp.data;
            });
	}

	var _getJobCount = function(){
		var query = serviceUrl + "/jobcount";
		return $http.get(query).then(function(resp){
			return resp.data;
		});
	}

	var _getJobCountByLocation = function(){
		var query = serviceUrl + "/jobs/countbylocation";
		return $http.get(query).then(function(resp){
			return resp.data;
		});
	}

	var _getJobCountByLanguage = function(){
		var query = serviceUrl + "/jobs/countbylanguage";
		return $http.get(query).then(function(resp){
			return resp.data;
		});
	}

	var _getJobCountCountryByMonth = function(){
		var query = serviceUrl + "/jobs/jobscountrymonth"
		return $http.get(query). then(function(resp) {
			return resp.data;
		});
	}

	jobServiceFactory.getJob = _getJob;
	jobServiceFactory.getJobs = _getJobs;
	jobServiceFactory.getJobCount = _getJobCount;
	jobServiceFactory.getJobCountByLocation = _getJobCountByLocation;
	jobServiceFactory.getJobCountByLanguage = _getJobCountByLanguage;
	jobServiceFactory.getJobCountCountryByMonth = _getJobCountCountryByMonth;

	return jobServiceFactory;
}]);
