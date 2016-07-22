app.filter('arrayToString', function() {
    return function(inputArr){
        if(inputArr !== null && inputArr !== 'undefined' && angular.isArray(inputArr)){
            return inputArr.join(", ");
        }
        else{
            return inputArr;
        }
    }
});