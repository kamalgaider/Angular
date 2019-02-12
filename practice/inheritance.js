var app = angular.module('inherit',[]);

app.controller('parent', function(){
	this.Name = 'Animal';
	this.Sound = 'grrr';
})

app.controller('kid', function($controller){
	
	this.child = $controller('parent', {});

	this.child.Name = 'Dog';
	this.child.bark = 'woof';
})