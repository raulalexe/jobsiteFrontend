app.controller('LanguagesCtrl', ['$translate', function($translate) {
    var vm = this;
    vm.chosenLang = $translate.use();

    vm.languages = [
        { id: "en", name: "English" },
        { id: "ro", name: "Romana" },
        { id: "cs", name: "Čeština" },
        { id: "sk", name: "Slovenčina" },
        { id: "hr", name: "Hrvatski" }
    ];

    var useLang = function(lang) {
        vm.chosenLang = lang.id;
        $translate.use(lang.id);
    }

    vm.useLang = useLang;
}]);