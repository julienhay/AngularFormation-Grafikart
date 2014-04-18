app.controller('PostsCtrl', function ($scope, PostFactory, $rootScope) {
	$rootScope.loading = true;
	
	PostFactory.find().then(function(posts) {
		
		$rootScope.loading = false;
		$scope.posts = posts;

	}, function(msg) {
		alert(msg);
	});
});