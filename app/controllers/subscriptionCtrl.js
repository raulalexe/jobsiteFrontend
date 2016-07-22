app.controller('SubscriptionCtrl', ['SubscriptionService', function(SubscriptionService){
	var vm = this;

	vm.email;

	vm.showMsg = false;
	vm.showErr = false;

	var subscribe = function(){
		SubscriptionService.subscribe(vm.email)
			.then(function(data){
				vm.msg = data;
				vm.showMsg = true;
				vm.showErr = false;
			},function(err){
				vm.msg = "An error occurred. Please try again!";
				vm.showMsg = false;
				vm.showErr = true;
			});
	}

	vm.subscribe = subscribe;
}])