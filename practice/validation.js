var appln = angular.module("appl", [])

appln.controller("cntrl", function($scope){

	$scope.members = [
	{
		fname : 'will', 
		lname : 'smith',
		genre : 'comedy',
		retire : 'Not retired'	
	},
	{
		fname : 'johnny', 
		lname : 'depp',
		genre : 'action',
		retire : 'Retired'
	}
	]

	$scope.saveUser = function(user){
		if($scope.userForm.$valid){
			if(user.RETIRE == null){
				user.RETIRE = "Not retired"
			}
			$scope.members.push({
				fname : user.FNAME , lname : user.LNAME , genre : user.GENRE , retire : user.RETIRE
			});
		}
	}
})