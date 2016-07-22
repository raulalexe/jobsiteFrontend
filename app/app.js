var app = angular.module('app',['ngRoute','ngAnimate', 'ui.bootstrap', 'pascalprecht.translate', 'chart.js']);

//var serviceUrl = "http://127.0.0.1:8080/api";
//var subscriptionServiceUrl = "http://127.0.0.1:8080/api/subscriptions";
var serviceUrl = "https://shrouded-citadel-53743.herokuapp.com/api";
var subscriptionServiceUrl = "https://shrouded-citadel-53743.herokuapp.com/api/subscriptions";


app.config(['$routeProvider', '$translateProvider' ,function($routeProvider, $translateProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'app/templates/home.html',
			controller: 'HomeCtrl as vm'
		})
		.when('/jobs', {
			templateUrl: 'app/templates/jobs.html',
			controller:'JobCtrl as vm'
		})
		.when('/job/:id', {
			templateUrl: 'app/templates/jobdetail.html',
			controller:'JobDetailCtrl as vm'
		})
		.when('/aboutus',{
			templateUrl: 'app/templates/aboutus.html',
			controller: 'AboutCtrl as vm'
		})
		.when('/contact',{
			templateUrl: 'app/templates/contact.html',
			controller: 'ContactCtrl as vm'
		})
		.when('/statistics',{
			templateUrl: 'app/templates/statistics.html',
			controller: 'ChartCtrl as vm'
		})
		.otherwise({
			redirectTo: '/home'
		});
	$translateProvider
		.translations('en',{
			HOME : 'Home',
			JOBS : 'Jobs',
			ABOUT_US : 'About Us',
			CONTACT : 'Contact',
			WE_HAVE : 'We have',
			JOBS_AVAILABLE : 'jobs available!',
			BANNER_SUBTITLE : 'Find your desire one in a minute',
			SEARCH_BTN : 'Search',
			JOB_SEARCH_PL_HLD: 'Job title, skills, or company',
			LOCATION_PL_HLD : 'Location',
			SUBSCRIBE : 'Subscribe',
			SUBSCRIBE_SUBTITLE : 'Get weekly top new jobs delivered to your inbox',
			EMAIL_FORM : 'Your email address',
			SUBSCRIBE_BTN : 'SUBSCRIBE',
			ABOUT_LBL : 'About',
			ABOUT_TXT : 'This website is an aggregator dedicated to gathering job ads from multiple sources and making them easily available to job seekers in one single centralized location from where they can better select the proper jobs to which they would like to apply without visiting multiple websites in search for the best positions. In the near future we will transcend the boundries of countries and languages making our website available in multiple translated versions and containing ads from all over the world, all of this leading to an increased ease in international job hunting.',
			COPYRIGHT : 'Copyrights 2016 All Rights Reserved by',
			LATEST : 'LATEST',
			RECENT_JOBS : 'Recent Jobs', 
			MORE_JOBS : 'More Jobs',
			JOB_SEARCH_RESULTS : 'Job Search Results:',
			NO_SEARCH_RESULTS : 'No Results For Your Search',
			COMPANY_LBL : 'Company:',
			APPLY : 'Apply',
			BACK_TO_SEARCH: 'Back to search',
			P1_ABOUT: 'We are a small team dedicated to revolutionizing job searching by aggregating all available job ads from a variety of sources in one place where job seekers can select the best job offers that are out there without having to visit multiple websites.',
			P2_ABOUT: 'Our plans for the future are to make international job hunting easy by translating our website in multiple languages and gathering ads from multiple countries in one place so one can see all the options he has for his specific profession or skills if he is not bound by location or perhaps langauge.',
			P3_ABOUT: 'Overall, our goal is to help people get not just a job, but the best job that is out there for their specific experience and set of skills without being limited the content posted on one website, by country or by the language of the website or by complicated search forms.',
			STATISTICS: 'Statistics',
			JOBS_BY_COUNTRY: 'Jobs by Country:',
			JOBS_BY_LANGUAGE: 'Jobs by Language:',
			JOBS_COUNTRY_LAST_MONTHS: 'Jobs by Country Over the Last Two Months',
			REMOTE_JOBS: 'Remote Jobs'
		})
		.translations('ro', {
			HOME : 'Acasa',
			JOBS : 'Joburi',
			ABOUT_US : 'Despre noi',
			CONTACT : 'Contact',
			WE_HAVE : 'Avem',
			JOBS_AVAILABLE : 'joburi disponibile!',
			BANNER_SUBTITLE : 'Gaseste job-ul perfect intr-un minut',
			SEARCH_BTN : 'Cauta',
			JOB_SEARCH_PL_HLD : 'Titlul job-ului, companie',
			LOCATION_PL_HLD : 'Locatie',
			SUBSCRIBE : 'Inscrie-te la newsletter',
			SUBSCRIBE_SUBTITLE : 'Primeste saptamanal cele mai bune joburi pe email',
			EMAIL_FORM : 'Adresa dumneavoastra de email',
			SUBSCRIBE_BTN : 'Inscrie-te',
			ABOUT_LBL : 'Despre',
			ABOUT_TXT : 'Acest website este destinat agregarii de anunturi de joburi din multiple surse facandu-le usor accesibile candidatilor intr-un singur loc din care pot face cea mai buna alegere pentru ei fara a vizita mutiple site-uri pentru a gasi cele mai bune joburi. In viitorul apropiat dorim sa trecem peste granitile locatiilor dar si a limbilor adunand anunturi din intreaga lume pentru a schimba modul de a cauta joburi in intreage lume intr-o interfata usor de utilizat in limba preferata.',
			COPYRIGHT : 'Toate drepturile de autor apartin companiei',
			LATEST : 'ULTIMELE',
			RECENT_JOBS : 'Joburi recente',
			MORE_JOBS : 'Mai multe joburi',
			JOB_SEARCH_RESULTS : 'Rezultatele cautarii:',
			NO_SEARCH_RESULTS : 'Cautarea nu a avut nici un rezultat',
			COMPANY_LBL : 'Companie:',
			APPLY : 'Aplica',
			BACK_TO_SEARCH: 'Inapoi la rezultate',
			P1_ABOUT: 'Suntem o echipa mica dedicata revolutionarii cautarii de joburi prin agregarea tuturor anunturilor de joburi disponibile dintr-o varietate de surse intr-un singur loc de unde cei interesati pot alege cele mai bune joburi care sunt disponibile fara a vizita multiple website-uri.',
			P2_ABOUT: 'Planurile noastre de viitor sunt usurarea cautarii de joburi internationale prin traducerea website-ului nostru in multiple limbi si adunarea anunturilor din mulitple tari intr-un singur loc pentru ca cei interesati sa poata vedea toate optiunile disponibile pentru profesia sau aptitudinile lor fara a tince cont de locatie.',
			P3_ABOUT: 'Per ansamblu, scopul nostru este sa ajutam candidatii sa gaseasca nu doar un job, ci cel mai bun job care exista pentru experienta si aptitudinile specifice a fiecarei persoane fara ca fi limitati de contitnutul existent pe un singur website, de limba site-ului sau de formulare complicate de cautare.',
			STATISTICS: 'Statistici',
			JOBS_BY_COUNTRY: 'Joburi dupa tara:',
			JOBS_BY_LANGUAGE: 'Joburi dupa limba:',
			JOBS_COUNTRY_LAST_MONTHS: 'Joburi dupa tara in ultimele doua luni',
			REMOTE_JOBS: 'Joburi Remote'
		});

	$translateProvider.preferredLanguage('en');
}]);

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});