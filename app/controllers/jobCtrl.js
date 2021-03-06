app.controller('JobCtrl', ['JobService', '$location', '$rootScope', '$anchorScroll', function(JobService, $location, $rootScope, $anchorScroll) {
    var vm = this;

    vm.jobsPerPage = 10;
    vm.noPages = 5;
    var searchData = $location.search();
    var page = (typeof searchData.page === "undefined") ? 1 : searchData.page;
    vm.currPage = page
    vm.totalCount = 0;
    vm.numPages = 0;
    vm.jobs = {};


    var getJobs = function(keywords, location, lang, skip, toget, sortBy) {
        JobService.getJobs(keywords, location, lang, skip, toget, sortBy)
            .then(function(data) {
                vm.jobs = data.jobs.docs;
                vm.totalCount = data.jobs.total;

            }, function(err) {
                console.log(err);
            });
    };
    var changePage = function() {
        getJobs(searchData.keywords, searchData.location, searchData.lang, vm.jobsPerPage * (vm.currPage - 1), vm.jobsPerPage);
        $location.hash('results');
        $anchorScroll(); 
    }

    vm.changePage = changePage;

    if (vm.currPage == 1)
        getJobs(searchData.keywords, searchData.location, searchData.lang, vm.jobsPerPage * (vm.currPage - 1), vm.jobsPerPage);
}]);