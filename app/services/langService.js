app.factory('LangService', ['$http', function($http) {
    var langServiceFactory = {};

    var _getJobLangs = function() {
        var query = serviceUrl + "/jobLangs";
        return $http.get(query).then(function(resp) {
            return resp.data;
        });
    }

    langServiceFactory.getJobLangs = _getJobLangs;

    return langServiceFactory;
}]);