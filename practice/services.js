var app = angular.module('AppServ', []);

app.service('serv', function(){//service doesn't return object
	this.newSrv = function(){
		alert('hello service');
	}
})


.factory('fact', function(){//factory returns an object
	var ftry = {};
	ftry.newFact = function(){
		alert('hello factory');
	}
	return ftry;
})


.controller('cntrl', function(serv, fact){
	serv.newSrv();
	fact.newFact();
})


.controller('cntrl2', function($scope, $window, $location, $interval){
	$scope.greet = function(fname){
		$window.alert('Hello ' + fname)
	}	

	$scope.currURL = $location.absURL;//similarly we have .protocol, .port, .host
	$interval(function(){
		var hour = new Date().getHours();
		var min = ('0'+ new Date().getMinutes()).slice(-2);
		var sec = ('0'+ new Date().getSeconds()).slice(-2);
		$scope.tm = hour + ':'+ min + ':' + sec

	}, 1000);

	
});