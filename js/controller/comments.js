
app.controller('CommentsCtrl', function ($scope, PostFactory, $routeParams, $rootScope) {
	
	$rootScope.loading = true;

	$scope.newComment = {};
	
	PostFactory.get($routeParams.id).then(function(post){
		$rootScope.loading = false;
		$scope.title = post.name;
		$scope.picture = post.picture;
		$scope.content = post.content;
		$scope.comments = post.comments;
	}, function(msg) {
		alert(msg);
	});


	$scope.addComment = function () {
		$scope.comments.push($scope.newComment);
		PostFactory.add($scope.newComment).then(function() {

		}, function() {
			alert('Erreur message non sauvegarde');
		});

		$scope.newComment = {};
	}
	
});