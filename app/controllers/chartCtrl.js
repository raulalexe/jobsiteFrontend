app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      scaleOverride : true,
        scaleSteps : 15,
        scaleStepWidth : 700,
        scaleStartValue : 0 
    });
}]);

app.controller("ChartCtrl", ['JobService','$filter', function (JobService, $filter) {
	var vm = this;
  vm.locale = "en-us";
	vm.labelsCountry = [];
  vm.dataCountry = [[]];
  vm.labelsLanguage = [];
  vm.dataLanguage = [[]];
  vm.labelsCountryByMonth = [];
  vm.dataCountryByMonth = [];
  vm.seriesCountryByMonth = [];


  var jobCountCountryByMonth = function(){
    JobService.getJobCountCountryByMonth()
      .then(function(data){
        var countsOld = [];
        var countsNew = [];

        var date = new Date();
        currMonth = date.getMonth()+1;
        prevMonth = currMonth-1;
        
        var dold={};
        var dnew={};        
        for(var i=0; i < data.length; i++){
          if(data[i].month == currMonth){
            dnew[data[i].country] = data[i].count;
          }
          else{
            dold[data[i].country] = data[i].count
          }
        }
        
        for(var k in dold){
          if(dold[k] > 100){
            vm.labelsCountryByMonth.push(k);
            countsOld.push(dold[k]);
            if(k in dnew){
              countsNew.push(dnew[k]);
            }
            else{
              countsNew.push(0);
            }
          }
        }
        vm.dataCountryByMonth.push(countsNew);
        vm.dataCountryByMonth.push(countsOld);

        vm.seriesCountryByMonth.push(date.toLocaleString(vm.locale, { month: "long" }));
        oldDate = new Date(date.getYear(), date.getMonth()-1, date.getDay());
        vm.seriesCountryByMonth.push(oldDate.toLocaleString(vm.locale, { month: "long" }));
      }, function(err){
        console.log(err);
      });
  }

	var jobCountByLocation = function(){
		JobService.getJobCountByLocation()
			.then(function(data){
				ProcessChartData(data);
			}, function(err){
				console.log(err);
			});
	}

  var jobCountByLanguage = function(){
    JobService.getJobCountByLanguage()
      .then(function(data){
        var langCounts = [];

        for(var i=0; i < data.length; i++){
          if(data[i].count > 60){
            vm.labelsLanguage.push(data[i]._id);
            langCounts.push(data[i].count);
          }
        }
        vm.dataLanguage = [langCounts];
      }, function(err){
        console.log(err);
      });
  }

  	function ProcessChartData(data){
  		countries = [];
  		counts = [];

  		for(var i=0; i < data.length; i++){
  			if( data[i].count > 100 ){
	  			countries.push(data[i]._id);
	  			counts.push(data[i].count);
	  		}
  		}
  		vm.labelsCountry = countries;
  		vm.dataCountry = [counts];
  	}

  	jobCountByLocation();
    jobCountByLanguage();
    jobCountCountryByMonth();
}]);