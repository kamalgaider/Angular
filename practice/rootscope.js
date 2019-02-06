var root = angular.module('appl',[]);

root.controller('heroCntrl', function($scope, $rootScope){

//these empty variable declarations can be omitted
$scope.srcHero= '';
$scope.heroData= '';
$scope.Rname= '';
$scope.Hname= '';



$scope.hero= [
		{
		realname: 'Bruce wayne',
		heroname: 'Batman'
		},
		{
		realname: 'Clark Kent',
		heroname: 'Superman'
		}
	];

$scope.searchHero = function(){
	$scope.heroData = 'Not found';
	for(i =0 ; i<$scope.hero.length; i++){
		if ($scope.srcHero == $scope.hero[i].heroname){
			$scope.heroData = $scope.hero[i].realname + ' is ' + $scope.hero[i].heroname;
		}
	}
};


$scope.addHero = function(){
	$rootScope.$broadcast('newData', {
		r : $scope.Rname,
		h : $scope.Hname
	});
};

$scope.$on('newData', function(event,args){
	$scope.hero.push({
		realname : args.r,
		heroname : args.h
	})
}); 


})