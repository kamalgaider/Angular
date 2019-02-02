var appln = angular.module("appl", [])

appln.controller("cntrl", function($scope){

	$scope.members = [
	{
		fname : 'will', 
		lname : 'smith'
	},
	{
		fname : 'johnny', 
		lname : 'depp'
	}
	]

	$scope.saveUser = function(user){
		if($scope.userForm.$valid){
			$scope.members.push({
				fname : user.FNAME , lname : user.LNAME 
			});
		}
	}
})