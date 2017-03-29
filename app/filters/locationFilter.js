app.filter('locationFilter', function () {
	return function(inputArr){
        if(inputArr !== null && angular.isArray(inputArr)){
            return 'Multiple';
        }
        else if(inputArr.indexOf(',') > -1){
           	return 'Multiple';
        }
        else {
        	return inputArr;
        }
    }
});
