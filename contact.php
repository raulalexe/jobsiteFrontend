<!Doctype HTML>
<html>

<head>
    <title>FindTheJob4U</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="audience" content="all" />
    <meta name="robots" content="INDEX,FOLLOW" />

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/languages.min.css">
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/backtotop.css" />
    <link rel="shortcut icon" href="favicon.ico" />
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-91434898-1', 'auto');
        ga('send', 'pageview');
    </script>
</head>

<body data-ng-app="app" data-ng-cloak>

    <header data-ng-controller="SearchCtrl as vm">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a href="/#/home" class="navbar-brand">
                        <!--img src="http://placehold.it/60x60" alt="Logo"/-->
                    </a>
                    <h3 class="navbar-text"><a href="/#/home">Find the Job 4U</a></h3>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-left">
                        <li>
                            <a href="/#/home" data-toggle="collapse" data-target=".navbar-collapse.in">{{ 'HOME' | translate }}</a>
                        </li>
                        <li>
                            <a href="/#/jobs" data-toggle="collapse" data-target=".navbar-collapse.in">{{ 'JOBS' | translate }}</a>
                        </li>
                        <li>
                            <a href="/#/jobs?location=Remote" data-toggle="collapse" data-target=".navbar-collapse.in">{{ 'REMOTE_JOBS' | translate }}</a>
                        </li>
                        <li>
                            <a href="/#/statistics" data-toggle="collapse" data-target=".navbar-collapse.in">{{ 'STATISTICS' | translate }}</a>
                        </li>
                        <li>
                            <a href="/#/aboutus" data-toggle="collapse" data-target=".navbar-collapse.in">{{ 'ABOUT_US' | translate }}</a>
                        </li>
                        <li>
                            <a href="contact.php" class="active" data-toggle="collapse" data-target=".navbar-collapse.in">{{ 'CONTACT' | translate }}
                            </a>
                        </li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right" data-ng-controller="LanguagesCtrl as vm">
                        <li uib-dropdown>
                            <a uib-dropdown-toggle class="selected">
                                <span class="lang-sm lang-lbl" lang="{{vm.chosenLang}}"></span>
                                <span class="caret"></span>
                            </a>
                            <ul uib-dropdown-menu>
                                <li data-ng-repeat="lang in vm.languages" ng-if="vm.chosenLang != lang.id" class="dropdown">
                                    <a href ng-click="vm.useLang(lang)" data-toggle="collapse" data-target=".navbar-collapse.in">
                                        <span class="lang-sm lang-lbl" lang="{{lang.id}}"></span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
        </nav>

        <div class="header text-center">
            <div class="container">
                <div clas="col-sm-12 col-xs-12">
                    <h1>
                        <translate>WE_HAVE</translate> <mark>{{vm.jobCount}}</mark>
                        <translate>JOBS_AVAILABLE</translate>
                    </h1>
                    <h5 class="sub-banner">{{ 'BANNER_SUBTITLE' | translate }}</h5>
                </div>
                <div class="col-sm-12 col-xs-12">
                    <form class="job-search form-inline" data-ng-submit="vm.searchJobs()">
                        <div class="form-group has-feedback free-text">
                            <input type="text" class="form-control input-lg" placeholder="{{ 'JOB_SEARCH_PL_HLD' | translate }}" data-ng-model="vm.keywords">
                            <span class="fa fa-search form-control-feedback"></span>
                        </div>

                        <div class="form-group has-feedback location">
                            <input type="text" class="form-control input-lg" placeholder="{{ 'LOCATION_PL_HLD' | translate }}" data-ng-model="vm.location">
                            <span class="fa fa-map-marker form-control-feedback"></span>
                        </div>
                        <div class="form-group has-feedback ad-lang">
                            <select class="form-control input-lg" data-ng-options="l as l | translate for l in vm.languages" data-ng-model="vm.lang">
                            </select>
                        </div>
                        <div class="form-group search">
                            <button class="btn btn-lg btn-primary" type="submit">{{ 'SEARCH_BTN' | translate }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </header>

    <main>

    <section class="section-header contact">
		<div class="container">
			<h2 id="title" class="capitalize">{{ 'CONTACT' | translate }}</h2>

			<?php 
	if(isset($_POST['submit'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = 'FindTheJob4U Contact form';
		$to = 'contact@findthejob4u.com';
		$subject = 'Contact form FindTheJob4U';
		$body = "From: $name\n E-Mail: $email\n Message:\n $message";
		$robots = $_POST['robots'];

		include("smtp/class.phpmailer.php"); //you have to upload class files "class.phpmailer.php" and "class.smtp.php"
		
		if(!$_POST['name']) {
			$errName = 'Please enter your name.';
		}

		if(!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errMail = 'Please enter a valid email address.';
		}

		if(!$_POST['message']){
			$errMessage = 'Please enter your message.';
		}
	
		if($human !== 5){
			$errHuman = 'Your anti-spam check is incorrect.';
		}

		if($robots != ''){
			$errRobots = 'No robots allowed.';
		}

		if (!$errName && !$errEmail && !$errMessage && !$errHuman && !$errRobots){
			$mail = new PHPMailer();
			
			$mail->IsSMTP();
			$mail->SMTPAuth = true;
			$mail->SMTPDebug = 0;
			$mail->Host = 'mail.findthejob4u.com';
			$mail->Username = 'contact@findthejob4u.com';
			$mail->Password = 'TKDjuche45!'; 
			
			$mail->From = 'postmaster@findthejob4u.com';
			$mail->FromName = 'Contact form FindTheJob4U';
			$mail->AddAddress($to,$to);
			$mail->Subject = $subject;
			$mail->Body = $body;
			$mail->WordWrap = 50;
			$mail->IsHTML(true);
			$str1= "gmail.com";
			$str2=strtolower($_POST["to"]);
			If(strstr($str2,$str1))
			{
				$mail->SMTPSecure = 'tls';
				$mail->Port = 587;
				if(!$mail->Send()) {
					$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again.'.$mail->ErrorInfo.'.</div>';
				} 
				else {
					$result='<div class="alert alert-success">Thank You! We will get back to you shortly.</div>';
				}
			}
			else{
				$mail->Port = 25;
				if(!$mail->Send()) {
					$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again.'.$mail->ErrorInfo.'</div>';
				} 
				else {
					$result='<div class="alert alert-success">Thank You! We will get back to you shortly.</div>';
				}
			}
		}
		else{
			$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again.</div>';
		}
	}  

	?>

<form class="form-horizontal" role="form" method="post" action="contact.php">
	<div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <?php echo $errRobots;?> 
            <?php echo $result;?> 
        </div>
    </div>
    <div class="form-group">
        <label for="name" class="col-sm-2 control-label">Name*:</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
            <?php echo "<p class='text-danger'>$errName</p>";?>
        </div>
    </div>
    <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Email*:</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($_POST['email']); ?>">
            <?php echo "<p class='text-danger'>$errEmail</p>";?>
        </div>
    </div>
    <div class="form-group">
        <label for="message" class="col-sm-2 control-label">Message*:</label>
        <div class="col-sm-10">
            <textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']); ?></textarea>
            <?php echo "<p class='text-danger'>$errMessage</p>";?>
        </div>
    </div>
    <div class="form-group">
        <label for="human" class="col-sm-2 control-label">2 + 3= ?*</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
            <?php echo "<p class='text-danger'>$errHuman</p>";?>
        </div>
    </div>
    <div class="form-group send-mail">
        <div class="col-sm-10 col-sm-offset-2">
            <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
        </div>
    </div>
    <input style="display:none;" type="text" name="robots" value="" />
</form>
		</div>
	</section>

        <section class="subscribe text-center" data-ng-controller="SubscriptionCtrl as vm">
            <div class="container">
                <h2>{{ 'SUBSCRIBE' | translate }}</h2>
                <h5 class="sub-banner">{{ 'SUBSCRIBE_SUBTITLE' | translate }}</h5>

                <form class="form-subscribe form-inline" data-ng-submit="vm.subscribe()">
                    <div class="input-group">
                        <input type="email" class="form-control input-lg" placeholder="{{ 'EMAIL_FORM' | translate }}" data-ng-model="vm.email">
                        <span class="input-group-btn">
                <button class="btn btn-success btn-lg" type="submit">{{ 'SUBSCRIBE_BTN' | translate }}</button>
              </span>
                    </div>
                </form>
                <p ng-class="{'text-danger': vm.showErr, 'text-success' : vm.showMsg }">{{vm.msg}}</p>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-xs-12">
                    <h6>{{ 'ABOUT_LBL' | translate }}</h6>

                    <p class="text-justify">
                        {{ 'ABOUT_TXT' | translate }}
                    </p>
                </div>
            </div>
            <hr>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <p class="text-center">
                            {{ 'COPYRIGHT' | translate}} <a href="http://www.designanddevelopit.com">DesignAndDevelopIT</a>
                        </p>
                    </div>
                    <div class="col-sm-12 col-xs-12">
                        <ul class="social-icons">
                            <li><a class="facebook" href="https://www.facebook.com/Find-the-Job-4-U-286956171720145/"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="twitter" href="https://twitter.com/Findthejob4u"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <a href="#" class="back-to-top">
        <span class="glyphicon glyphicon-chevron-up"></span>
    </a>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-route.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-animate.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.8.1/angular-translate.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/1.3.2/ui-bootstrap-tpls.min.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <script type="text/javascript" src="app/controllers/homeCtrl.js"></script>
    <script type="text/javascript" src="app/controllers/searchCtrl.js"></script>
    <script type="text/javascript" src="app/controllers/jobCtrl.js"></script>
    <script type="text/javascript" src="app/controllers/aboutCtrl.js"></script>
    <script type="text/javascript" src="app/controllers/contactCtrl.js"></script>
    <script type="text/javascript" src="app/controllers/subscriptionCtrl.js"></script>
    <script type="text/javascript" src="app/controllers/jobdetailCtrl.js"></script>
    <script type="text/javascript" src="app/controllers/langCtrl.js"></script>
    <script type="text/javascript" src="app/services/jobService.js"></script>
    <script type="text/javascript" src="app/services/langService.js"></script>
    <script type="text/javascript" src="app/services/subscriptionService.js"></script>
    <script type="text/javascript" src="app/filters/arrayToStringFilter.js"></script>
    <script type="text/javascript" src="app/filters/locationFilter.js"></script>
    <script type="text/javascript" src="app/filters/allowHtml.js"></script>
    <script type="text/javascript" src="app/angular-seo.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/angular.chartjs/0.8.8/angular-chart.min.js"></script>
    <script type="text/javascript" src="app/controllers/chartCtrl.js"></script>
    <script type="text/javascript" src="js/backtotop.js"></script>
</body>

</html>