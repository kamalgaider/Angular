var modName = angular.module('appl', []);

modName.controller('cntrl', function($scope){

	$scope.chair = '0';
	$scope.table = '0';
	$scope.total ='';

	$scope.hideswitch = true

	$scope.totalprice = function(){

		$scope.total = (+$scope.chair)* 150 + (+$scope.table)*200;
		$scope.hideswitch = false;
	}

	$scope.reset = function(){
		$scope.chair = '0';
		$scope.table = '0';
		$scope.hideswitch = true
	}

	$scope.count = 0

	$scope.vehicles = [
	{company :'noone wants this', model : 'useless car'},
	{company :'honda', model : 'city'},
	{company : 'suzuki', model : 'swift'},
	{company : 'hyundai', model : 'xcent'}
	];
})