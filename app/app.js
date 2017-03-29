var app = angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'pascalprecht.translate',
    'chart.js',
    'seo'
]);

//var serviceUrl = "http://127.0.0.1:8080/api";
var serviceUrl = "http://findthejob4u.com:8080/api";
var subscriptionServiceUrl = serviceUrl + "/subscriptions";

app.config(['$routeProvider', '$translateProvider', '$locationProvider',
    function($routeProvider, $translateProvider, $locationProvider) {
        $locationProvider.hashPrefix("!");
        $routeProvider
            .when('/home', {
                templateUrl: 'app/templates/home.html',
                controller: 'HomeCtrl as vm'
            })
            .when('/jobs', {
                templateUrl: 'app/templates/jobs.html',
                controller: 'JobCtrl as vm'
            })
            .when('/job/:id', {
                templateUrl: 'app/templates/jobdetail.html',
                controller: 'JobDetailCtrl as vm'
            })
            .when('/aboutus', {
                templateUrl: 'app/templates/aboutus.html',
                controller: 'AboutCtrl as vm'
            })
            .when('/statistics', {
                templateUrl: 'app/templates/statistics.html',
                controller: 'ChartCtrl as vm'
            })
            .when('/unsubscribe', {
                templateUrl: 'app/templates/unsubscribe.html',
                controller: 'SubscriptionCtrl as vm'
            })
            .otherwise({
                redirectTo: '/home'
            });
        $translateProvider
            .translations('en', {
                HOME: 'Home',
                JOBS: 'Jobs',
                ABOUT_US: 'About Us',
                CONTACT: 'Contact',
                WE_HAVE: 'We have',
                JOBS_AVAILABLE: 'jobs available!',
                BANNER_SUBTITLE: 'Find the job for you in a minute',
                SEARCH_BTN: 'Search',
                JOB_SEARCH_PL_HLD: 'Job title, skills, or company',
                LOCATION_PL_HLD: 'Location',
                ANY_LANG: '--Any Language--',
                SUBSCRIBE: 'Subscribe',
                SUBSCRIBE_SUBTITLE: 'Get weekly top new jobs delivered to your inbox',
                EMAIL_FORM: 'Your email address',
                SUBSCRIBE_BTN: 'SUBSCRIBE',
                ABOUT_LBL: 'About',
                ABOUT_TXT: 'This website is an aggregator dedicated to gathering job ads from multiple sources and making them easily available to job seekers in one single centralized location from where they can better select the proper jobs to which they would like to apply without visiting multiple websites in search for the best positions. In the near future we will transcend the boundries of countries and languages making our website available in multiple translated versions and containing ads from all over the world, all of this leading to an increased ease in international job hunting.',
                COPYRIGHT: 'Copyrights 2016 All Rights Reserved by',
                LATEST: 'LATEST',
                RECENT_JOBS: 'Recent Jobs',
                MORE_JOBS: 'More Jobs',
                JOB_SEARCH_RESULTS: 'Job Search Results:',
                NO_SEARCH_RESULTS: 'No Results For Your Search',
                COMPANY_LBL: 'Company:',
                APPLY: 'Apply',
                BACK_TO_SEARCH: 'Back to search',
                P1_ABOUT: 'We are a small team dedicated to revolutionizing job searching by aggregating all available job ads from a variety of sources in one place where job seekers can select the best job offers that are out there without having to visit multiple websites.',
                P2_ABOUT: 'Our plans for the future are to make international job hunting easy by translating our website in multiple languages and gathering ads from multiple countries in one place so one can see all the options he has for his specific profession or skills if he is not bound by location or perhaps langauge.',
                P3_ABOUT: 'Overall, our goal is to help people get not just a job, but the best job that is out there for their specific experience and set of skills without being limited the content posted on one website, by country or by the language of the website or by complicated search forms.',
                STATISTICS: 'Statistics',
                JOBS_BY_COUNTRY: 'Jobs by Country:',
                JOBS_BY_LANGUAGE: 'Jobs by Language:',
                JOBS_COUNTRY_LAST_MONTHS: 'Jobs by Country Over the Last Two Months',
                REMOTE_JOBS: 'Remote Jobs',
                UNSUBSCRIBE: 'Unsubscribe',
                P1_UNSUBSCRIBE: "We're sorry to see that you want to unsubscribe from our weekly newsletter. Our newsletter provieds you with new jobs from all over the world and we are aiming to provide the best content possible.",
                P2_UNSUBSCRIBE: "If you would really like to unsubscribe please click the button below.",
                UNSUBSCRIBE_BTN_TEXT: 'Click to Unsubscribe',
                STAY_SUBSCRIBED_BTN_TEXT: 'Keep your Subscription'
            })
            .translations('ro', {
                HOME: 'Acasa',
                JOBS: 'Joburi',
                ABOUT_US: 'Despre noi',
                CONTACT: 'Contact',
                WE_HAVE: 'Avem',
                JOBS_AVAILABLE: 'joburi disponibile!',
                BANNER_SUBTITLE: 'Gaseste job-ul perfect intr-un minut',
                SEARCH_BTN: 'Cauta',
                JOB_SEARCH_PL_HLD: 'Titlul job-ului, companie',
                LOCATION_PL_HLD: 'Locatie',
                ANY_LANG: '--Orice Limba--',
                SUBSCRIBE: 'Inscrie-te la newsletter',
                SUBSCRIBE_SUBTITLE: 'Primeste saptamanal cele mai bune joburi pe email',
                EMAIL_FORM: 'Adresa dumneavoastra de email',
                SUBSCRIBE_BTN: 'Inscrie-te',
                ABOUT_LBL: 'Despre',
                ABOUT_TXT: 'Acest website este destinat agregarii de anunturi de joburi din multiple surse facandu-le usor accesibile candidatilor intr-un singur loc din care pot face cea mai buna alegere pentru ei fara a vizita mutiple site-uri pentru a gasi cele mai bune joburi. In viitorul apropiat dorim sa trecem peste granitile locatiilor dar si a limbilor adunand anunturi din intreaga lume pentru a schimba modul de a cauta joburi in intreage lume intr-o interfata usor de utilizat in limba preferata.',
                COPYRIGHT: 'Toate drepturile de autor apartin companiei',
                LATEST: 'ULTIMELE',
                RECENT_JOBS: 'Joburi recente',
                MORE_JOBS: 'Mai multe joburi',
                JOB_SEARCH_RESULTS: 'Rezultatele cautarii:',
                NO_SEARCH_RESULTS: 'Cautarea nu a avut nici un rezultat',
                COMPANY_LBL: 'Companie:',
                APPLY: 'Aplica',
                BACK_TO_SEARCH: 'Inapoi la rezultate',
                P1_ABOUT: 'Suntem o echipa mica dedicata revolutionarii cautarii de joburi prin agregarea tuturor anunturilor de joburi disponibile dintr-o varietate de surse intr-un singur loc de unde cei interesati pot alege cele mai bune joburi care sunt disponibile fara a vizita multiple website-uri.',
                P2_ABOUT: 'Planurile noastre de viitor sunt usurarea cautarii de joburi internationale prin traducerea website-ului nostru in multiple limbi si adunarea anunturilor din mulitple tari intr-un singur loc pentru ca cei interesati sa poata vedea toate optiunile disponibile pentru profesia sau aptitudinile lor fara a tince cont de locatie.',
                P3_ABOUT: 'Per ansamblu, scopul nostru este sa ajutam candidatii sa gaseasca nu doar un job, ci cel mai bun job care exista pentru experienta si aptitudinile specifice a fiecarei persoane fara a fi limitati de contitnutul existent pe un singur website, de limba site-ului sau de formulare complicate de cautare.',
                STATISTICS: 'Statistici',
                JOBS_BY_COUNTRY: 'Joburi dupa tara:',
                JOBS_BY_LANGUAGE: 'Joburi dupa limba:',
                JOBS_COUNTRY_LAST_MONTHS: 'Joburi dupa tara in ultimele doua luni',
                REMOTE_JOBS: 'Joburi Remote',
                UNSUBSCRIBE: 'Dezabonare',
                P1_UNSUBSCRIBE: 'Ne pare rau ca doriti sa va dezabonati de la ofertele noastre sapatamanle de job-uri.',
                P2_UNSUBSCRIBE: "Daca sunteti sigur ca doriti sa va dezabonati o puteti face apansand urmatorul buton.",
                UNSUBSCRIBE_BTN_TEXT: 'Dezabonare',
                STAY_SUBSCRIBED_BTN_TEXT: 'Ramaneti abonat'
            })
            .translations('hr', {
                HOME: 'Dom',
                JOBS: 'Poslovi',
                ABOUT_US: 'O nama',
                CONTACT: 'Kontakt',
                WE_HAVE: 'Imamo',
                JOBS_AVAILABLE: 'dostupni poslovi',
                BANNER_SUBTITLE: 'Pronađi svoju prioritetnu želju u minuti',
                SEARCH_BTN: 'Traži',
                JOB_SEARCH_PL_HLD: 'Naziv poslovne vještine ili tvrtke',
                LOCATION_PL_HLD: 'Lokacija',
                ANY_LANG: '--Strani jezik--',
                SUBSCRIBE: 'Pretplata',
                SUBSCRIBE_SUBTITLE: 'Dostaviti najinteresantnije poslove tijekom tjedna u vaš inbox',
                EMAIL_FORM: 'Vaša email adresa',
                SUBSCRIBE_BTN: 'Pretplata',
                ABOUT_LBL: 'O nama',
                ABOUT_TXT: 'Mi smo mali tim posvećen revolucionarnom unapređenju potrage za poslom, na način da prikupljamo sve dostupne poslove iz različitih izvora i pohranjujemo ih na jednom mjestu, kako bi tražitelji posla mogli pronaći najbolje ponude, a da ne moraju posjećivati mnogobrojne web stranice.',
                COPYRIGHT: 'Prava',
                LATEST: 'ZADNJE',
                RECENT_JOBS: 'Sadašnji posao',
                MORE_JOBS: 'Više poslova',
                JOB_SEARCH_RESULTS: 'Rezultati pretrage poslova',
                NO_SEARCH_RESULTS: 'Nema rezultata za vašu pretragu',
                COMPANY_LBL: 'Tvrtka',
                APPLY: 'Prijava',
                BACK_TO_SEARCH: 'Ponovna pretraga',
                P1_ABOUT: 'Mi smo mali tim posvećen revolucionarnom unapređenju potrage za poslom, na način da prikupljamo sve dostupne poslove iz različitih izvora i pohranjujemo ih na jednom mjestu, kako bi tražitelji posla mogli pronaći najbolje ponude, a da ne moraju posjećivati mnogobrojne web stranice.',
                P2_ABOUT: 'Naši planovi za budućnost su da međunarodnu potragu za poslom olakšamo, tako da našu web stranicu prevedemo na što više jezika i prikupimo podatke iz što više zemalaja na jednom mjestu, kako bi netko mogao sagledati sve opcije koje ima za svoje zanimanje ili vještine, osim ako nije ograničen lokacijom ili možda jezikom.',
                P3_ABOUT: 'Naš cilj je da pomognemo ljudima ne samo da pronađu posao, već da pronađu posao koji odgovara njihovim vlastitim znanjima i vještinama i to tako da nisu ograničeni pretragama po mnogobrojnim web stranicama pojedine zemlje ili jezikom na kojem je web stranica ili kompliciranim načinima pretrage.',
                STATISTICS: 'Statistika',
                JOBS_BY_COUNTRY: 'Poslovi po zemljama',
                JOBS_BY_LANGUAGE: 'Poslovi po jeziku',
                JOBS_COUNTRY_LAST_MONTHS: 'Poslovi po zemljama unazad dva mjeseca',
                REMOTE_JOBS: 'Udaljeni poslovi',
                UNSUBSCRIBE: 'Odjava',
                P1_UNSUBSCRIBE: 'Žao nam je što se želite odjaviti sa naše tjedne ponude koja vam omogućava uvid u nove poslove širom svijeta i trudimo se da vam dostavimo najbolje moguće sadržaje.',
                P2_UNSUBSCRIBE: 'Ako se zaista želite odjaviti,molimo vas da kliknete na dugme ispod.',
                UNSUBSCRIBE_BTN_TEXT: 'Kliknite za odjavu',
                STAY_SUBSCRIBED_BTN_TEXT: 'Sačuvajte vašu prijavu'
            })
            .translations('cs', {
                HOME: 'Dům',
                JOBS: 'Nabídky práce',
                ABOUT_US: 'O nás',
                CONTACT: 'Kontakt',
                WE_HAVE: 'Nabízíme',
                JOBS_AVAILABLE: 'nabídky práce',
                BANNER_SUBTITLE: 'Najděte si vysněné zaměstnání za minutu',
                SEARCH_BTN: 'Hledat',
                JOB_SEARCH_PL_HLD: 'Pozice, dovednost nebo společnost',
                LOCATION_PL_HLD: 'Poloha',
                ANY_LANG: '--Všechny jazyky--',
                SUBSCRIBE: 'Přihlásit se',
                SUBSCRIBE_SUBTITLE: 'Dostávejte týdenní nabídky e-mailem',
                EMAIL_FORM: 'Emailová adresa',
                SUBSCRIBE_BTN: 'Přihlásit',
                ABOUT_LBL: 'O nás',
                ABOUT_TXT: 'This website is an aggregator dedicated to gathering job ads from multiple sources and making them easily available to job seekers in one single centralized location from where they can better select the proper jobs to which they would like to apply without visiting multiple websites in search for the best positions. In the near future we will transcend the boundries of countries and languages making our website available in multiple translated versions and containing ads from all over the world, all of this leading to an increased ease in international job hunting.',
                COPYRIGHT: 'Všechna práva vyhrazená',
                LATEST: 'Nejnovější',
                RECENT_JOBS: 'Aktuální pozice',
                MORE_JOBS: 'Více pracovních míst',
                JOB_SEARCH_RESULTS: 'Výsledky hledání',
                NO_SEARCH_RESULTS: 'Žádné výsledky hledání',
                COMPANY_LBL: 'Společnost',
                APPLY: 'Odpovědět',
                BACK_TO_SEARCH: 'Zpět na hledání',
                P1_ABOUT: 'We are a small team dedicated to revolutionizing job searching by aggregating all available job ads from a variety of sources in one place where job seekers can select the best job offers that are out there without having to visit multiple websites.',
                P2_ABOUT: 'Our plans for the future are to make international job hunting easy by translating our website in multiple languages and gathering ads from multiple countries in one place so one can see all the options he has for his specific profession or skills if he is not bound by location or perhaps langauge.',
                P3_ABOUT: 'Overall, our goal is to help people get not just a job, but the best job that is out there for their specific experience and set of skills without being limited the content posted on one website, by country or by the language of the website or by complicated search forms.',
                STATISTICS: 'Statistika',
                JOBS_BY_COUNTRY: 'Pracovní místa podle krajiny',
                JOBS_BY_LANGUAGE: 'Pracovní místa podle jazyka',
                JOBS_COUNTRY_LAST_MONTHS: 'Pracovní místa podle krajiny za poslední dva měsíce',
                REMOTE_JOBS: 'Remote pracovní pozice',
                UNSUBSCRIBE: 'Odhlášení',
                P1_UNSUBSCRIBE: 'Je nám líto, že se chcete odhlásit z našeho týdenního zpravodaje. Náš zpravodaj vás informuje o nových pracovních místech z celého světa a my se snažíme poskytnout nejlepší možný obsah.',
                P2_UNSUBSCRIBE: 'Pro odlášení, klikni na tlačítko níž.',
                UNSUBSCRIBE_BTN_TEXT: 'Klikni pro odhlášení',
                STAY_SUBSCRIBED_BTN_TEXT: 'Zůstaň přihlášen'
            })
            .translations('sk', {
                HOME: 'Dom',
                JOBS: 'Ponuky práce',
                ABOUT_US: 'O nás',
                CONTACT: 'Kontakt',
                WE_HAVE: 'Ponúkame',
                JOBS_AVAILABLE: 'ponuky práce',
                BANNER_SUBTITLE: 'Nájdite si vysnívanú prácu za minútu',
                SEARCH_BTN: 'Hľadať',
                JOB_SEARCH_PL_HLD: 'Pozícia, zručnosť alebo spoločnosť ',
                LOCATION_PL_HLD: 'Poloha',
                ANY_LANG: '--Všetky jazyky--',
                SUBSCRIBE: 'Prihlásiť sa',
                SUBSCRIBE_SUBTITLE: 'Dostávajte týždenné ponuky e-mailom',
                EMAIL_FORM: 'Emailová adresa',
                SUBSCRIBE_BTN: 'Prihlásiť',
                ABOUT_LBL: 'O nás',
                ABOUT_TXT: 'This website is an aggregator dedicated to gathering job ads from multiple sources and making them easily available to job seekers in one single centralized location from where they can better select the proper jobs to which they would like to apply without visiting multiple websites in search for the best positions. In the near future we will transcend the boundries of countries and languages making our website available in multiple translated versions and containing ads from all over the world, all of this leading to an increased ease in international job hunting.',
                COPYRIGHT: 'Všetky práva vyhradené ',
                LATEST: 'Najnovšie',
                RECENT_JOBS: 'Aktuálne pozície',
                MORE_JOBS: 'Viac pracovných miest',
                JOB_SEARCH_RESULTS: 'Výsledky hľadania',
                NO_SEARCH_RESULTS: 'Žiadne výsledky hľadania',
                COMPANY_LBL: 'Spoločnost',
                APPLY: 'Potvrdiť',
                BACK_TO_SEARCH: 'Späť na vyhľadávanie',
                P1_ABOUT: 'We are a small team dedicated to revolutionizing job searching by aggregating all available job ads from a variety of sources in one place where job seekers can select the best job offers that are out there without having to visit multiple websites.',
                P2_ABOUT: 'Our plans for the future are to make international job hunting easy by translating our website in multiple languages and gathering ads from multiple countries in one place so one can see all the options he has for his specific profession or skills if he is not bound by location or perhaps langauge.',
                P3_ABOUT: 'Overall, our goal is to help people get not just a job, but the best job that is out there for their specific experience and set of skills without being limited the content posted on one website, by country or by the language of the website or by complicated search forms.',
                STATISTICS: 'Štatistika',
                JOBS_BY_COUNTRY: 'Pracovné miesta podľa krajiny',
                JOBS_BY_LANGUAGE: 'Pracovné miesta podľa jazyka',
                JOBS_COUNTRY_LAST_MONTHS: 'Pracovné miesta podľa krajiny za posledné dva mesiace',
                REMOTE_JOBS: 'Remote pracovné pozície',
                UNSUBSCRIBE: 'Odhlásenie',
                P1_UNSUBSCRIBE: 'Je nám ľúto, že sa chcete odhlásit z našeho týždňového zpravodaja. Náš zpravodaj vás informuje o nových pracovných miestach z celého sveta a my sa snažíme poskytnúť ten najlepší možný obsah.',
                P2_UNSUBSCRIBE: 'Pre odhlásenie, klikni na tlačitko nižšie.',
                UNSUBSCRIBE_BTN_TEXT: 'Klikni pre odhlásenie',
                STAY_SUBSCRIBED_BTN_TEXT: 'Zostaň prihlásený'
            });

        $translateProvider.preferredLanguage('en');
    }
]);

app.run(['$rootScope', '$location', '$anchorScroll', '$routeParams', '$http',
    function($rootScope, $location, $anchorScroll, $routeParams, $http) {
        //when the route is changed scroll to the proper element.
        $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
            $location.hash($routeParams.scrollTo);
            if ($location.hash()) $anchorScroll();
        });
    }
]);