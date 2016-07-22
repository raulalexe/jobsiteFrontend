app.controller('LanguagesCtrl', ['$translate', function($translate){
	var vm = this;
	vm.chosenLang = $translate.use();

	vm.languages = [
        { id: "en", name: "English" },
        { id: "ro", name: "Romana" }
    ];

	var useLang = function(lang){
		vm.chosenLang = lang.id;
		$translate.use(lang.id);
	}	

	vm.useLang = useLang;
}]);