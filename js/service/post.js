app.factory('PostFactory', function($http, $q, $timeout) {
	var factory = {
		posts : false,
		find : function() {
			var deferred = $q.defer();

			if(factory.posts !== false) {
				deferred.resolve(factory.posts);
			}
			else
			{
				$http.get('posts.json')
					.success(function(data, status) {
						factory.posts = data;
						$timeout(function() {
							deferred.resolve(factory.posts);
						}, 100)
						
					})
					.error(function(data, status) {
						deferred.reject('Impossible de recuperer les articles')
					});
			}

			return deferred.promise;
		},
		get : function(id) {
			var deferred = $q.defer();
			var post = {};
			var posts = factory.find().then(function(posts) {
				angular.forEach(posts, function(value, key) {
					if (value.id == id) {
						post = value;
					};
				});
				deferred.resolve(post);
			}, function(msg) {
				deferred.reject(msg);
			})
			
			return deferred.promise;
			//return factory.posts[id];
		},
		add : function(comment){
			var defer = $q.defer();

			//...... 

			deferred.resolve();
			return deferred.promise;
		}
	}

	return factory;
})