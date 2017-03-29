app.controller('SubscriptionCtrl', ['SubscriptionService', '$location', function(SubscriptionService, $location) {
    var vm = this;

    vm.email;

    vm.showMsg = false;
    vm.showErr = false;
    vm.uid = undefined;

    var subscribe = function() {
        SubscriptionService.subscribe(vm.email)
            .then(function(data) {
                vm.msg = data;
                vm.showMsg = true;
                vm.showErr = false;
            }, function(err) {
                vm.msg = "An error occurred. Please try again!";
                vm.showMsg = false;
                vm.showErr = true;
            });
    }

    var unsubscribe = function() {
        vm.uid = typeof($location.search()) != 'undefined' && typeof($location.search().uid) != 'undefined' ? $location.search().uid : undefined
        console.log(vm.uid);
        SubscriptionService.unsubscribe(vm.uid)
            .then(function(data) {
                vm.msg = data;
                vm.showMsg = true;
                vm.showErr = false;
            }, function(err) {
                vm.msg = "An error occurred while unsubscribing Please try again!";
                vm.showMsg = false;
                vm.showErr = true;
            });
    }

    vm.subscribe = subscribe;
    vm.unsubscribe = unsubscribe;
}])