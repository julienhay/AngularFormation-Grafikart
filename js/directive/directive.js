app.directive('ngComment', function() {
	
	return {
		scope: {
			comment: '='
		},
		restrict: 'E',
		templateUrl: 'partials/_comment.html'
	}
})


app.directive('ngTabs', function() {
	return {
		restrict: 'E', 
		transclude: true,
		templateUrl: 'directive/tabs.html',
		scope: {

		},
		controller: function($scope) {
			
			$scope.tabs = [];

			this.add = function(tab) {
				$scope.tabs.push(tab);
			}
		}
	}
});

app.directive('ngTab', function() {
	return {
		restrict: 'E', 
		transclude: true,
		scope: {
			title: '@'
		},
		templateUrl: 'directive/tab.html',
		require: '^ngTabs',
		link: function(scope, element, attrs, tabsCtrl) {
			scope.selected = false;
			tabsCtrl.add(scope);
		}
	}
});


/* 
Directive example


app.directive('ngTest', function() {
	return {
		template: "<div>Salut <strong>{{username}}</strong><div ng-transclude></div></div>",
		restrict: 'A',
		transclude: true,
		scope: {
			username: '='
		}
	}
});


// Directive example date picker
app.directive('datepicker', function() {
	return {
		restrict: 'C',
		scope: {
			'options': '=datepickerOptions'
		},
		link: function (scope, element, attrs) {
			$(element).pickadate(scope.options);
		}
	}
});


app.directive('time', function(dateFilter, $interval) {
	return {
		restrict: 'E',
		template: '{{time}}',
		scope: {},
		link: function(scope, element, attrs) {
			scope.time = dateFilter(new Date(), 'hh:mm:ss');

			element.on('$destroy', function() {
				$interval.cancel(interval);
			})

			interval = $interval(function() {
				scope.time = dateFilter(new Date(), 'hh:mm:ss');
				console.log('time changed');
			}, 1000)
		}
	}
})
*/