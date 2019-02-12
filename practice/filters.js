//custom filter

var app = angular.module('filterExample',[]).filter(
	'rainFltr', function(){
		return function(input){
			return input ? '\u2602' : '\u2600';
		}
	});

app.controller('main',function($scope){
	$scope.date = new Date();
	$scope.num = 1536;
	$scope.fname = '';
	$scope.amount = '';

	$scope.days = [
	{day :'sunday', rain : true},
	{day :'monday', rain : false},
	{day :'tuesday', rain : true},
	{day :'wednesday', rain : false},
	{day :'thursday', rain : false},
	{day :'friday', rain : true},
	{day :'satday', rain : true}
	]

	$scope.chars ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';

	$scope.students =[
		{nm : "john", marks : 26},
		{nm : "david", marks : 65},
		{nm : "lenny", marks : 55},
		{nm : "jack", marks : 33}
		];

})

