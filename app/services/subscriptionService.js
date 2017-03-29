app.factory('SubscriptionService', ['$http', function($http) {
    var subscriptionServiceFactory = {};

    var _subscribe = function(emailAddress) {
        var url = subscriptionServiceUrl + '/subscribe';
        return $http.post(url, { email: emailAddress }).then(function(resp) {
            return resp.data;
        });
    }

    var _unsubscribe = function(uid) {
        console.log(uid);
        var url = subscriptionServiceUrl + '/unsubscribe?uid=' + uid;
        return $http.post(url, { "uid": uid })
            .then(function(resp) {
                return resp.data;
            }, function(err) { return err; });
    }

    subscriptionServiceFactory.subscribe = _subscribe;
    subscriptionServiceFactory.unsubscribe = _unsubscribe;
    return subscriptionServiceFactory;
}]);