app.controller('SearchCtrl', ['$translate', '$location', '$rootScope', '$anchorScroll', 'JobService', 'LangService',
    function($translate, $location, $rootScope, $anchorScroll, JobService, LangService) {
        var vm = this;

        vm.jobCount;

        vm.languages = [
            "ANY_LANG",
        ];
        vm.lang = vm.languages[0];
        vm.uid = '';
        vm.searchFormData = {};

        var updateFormData = function() {
            var formData = $location.search();
            vm.keywords = (typeof formData.keywords === "undefined") ? vm.keywords : formData.keywords;
            vm.location = (typeof formData.location === "undefined") ? vm.location : formData.location;
            vm.lang = (typeof formData.lang === "undefined") ? vm.lang : formData.lang;
            vm.uid = (typeof formData.uid === "undefined") ? vm.uid : formData.uid;
        }

        function resetFormData() {
            vm.location = "";
            vm.keywords = "";
            vm.lang = "ANY_LANG";
        }

        var setActiveNav = function() {
            var loc = $location.search().location;
            if (loc !== undefined && loc.toLowerCase() === 'remote') {
                vm.activeNav = $location.path().replace('/', '') + loc.toLowerCase();
            } else {
                vm.activeNav = $location.path().replace('/', '');
            }
        }

        var clearForm = function() {
            vm.keywords = '';
            vm.location = '';
            vm.lang = vm.languages[0];
        }


        var getJobCount = function() {
            JobService.getJobCount()
                .then(function(data) {
                    vm.jobCount = data.count;
                }, function(err) {
                    console.log(err);
                });
        }

        var getJobLangs = function() {
            LangService.getJobLangs()
                .then(function(data) {
                    vm.languages = vm.languages.concat(data.languages);
                }, function(err) {
                    console.log(err);
                });
        }

        var searchJobs = function() {
            $location.path('/jobs').search({ 'keywords': vm.keywords, 'location': vm.location, 'lang': vm.lang });
        }

        vm.searchJobs = searchJobs;

        $rootScope.$on("$routeChangeSuccess", function() {
            vm.uid = typeof($location.search()) != 'undefined' && typeof($location.search().uid) != 'undefined' ? $location.search().uid : undefined
            if ($location.path() === "/home") clearForm();
            if (($location.path() === "/jobs" || $location.path().includes("/jobs?")) && $location.hash() != "results") {
                if ($location.path() === "/jobs") resetFormData();
                updateFormData();
            } else {
                if (typeof(vm.uid) != 'undefined') {
                    $location.search({ 'keywords': vm.keywords, 'location': vm.location, 'lang': vm.lang, 'uid': vm.uid });
                } else {
                    $location.search({ 'keywords': vm.keywords, 'location': vm.location, 'lang': vm.lang });
                }
            }
            setActiveNav();
        });

        getJobCount();
        getJobLangs();
    }
]);