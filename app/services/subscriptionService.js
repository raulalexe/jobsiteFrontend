app.factory('SubscriptionService', ['$http', function($http){
	var subscriptionServiceFactory = {};
	
	var _subscribe = function(emailAddress){
		var url = subscriptionServiceUrl;
		return $http.post(url, {email: emailAddress}).then(function(resp){
			return resp.data;
		});
	}

	subscriptionServiceFactory.subscribe = _subscribe;

	return subscriptionServiceFactory;
}]);