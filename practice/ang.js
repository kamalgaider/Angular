var  appl = angular.module('appl' , []);

appl.controller('ctrl', function($scope){
	$scope.vone = '1';
	$scope.vtwo = '2';
	$scope.output = '';
	
	$scope.updateValue = function(){
		$scope.output = $scope.vone + ' + ' + $scope.vtwo + ' = ' + (+$scope.vone + +$scope.vtwo)

	}
})