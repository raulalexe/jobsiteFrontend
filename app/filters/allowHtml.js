app.filter('allowHtml', ['$sce', function($sce) { return $sce.trustAsHtml; }]);
