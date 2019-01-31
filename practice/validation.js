var appln = angular.module("appl", [])

appln.controller("cntrl", function($scope){

	$scope.chair =0;
	$scope.table= 0;

	$scope.switch = true;

	$scope.clicked =function(){
		$scope.calculation =  (+$scope.chair) +  (+$scope.table );
		$scope.switch= false;
	}

	$scope.elements = [
	{
		item : "abc", number : '4'
	},
	{
		item : "def", number : '45'
	},
	{
		item : "xyz", number : '16'
	}
	]


})