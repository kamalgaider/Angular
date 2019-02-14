var app = angular.module('dir',[])


.controller('cntrl', function($scope){
	$scope.players = [
	{fname : 'Sachin', avg : 50},
	{fname : 'Rahul', avg : 46},
	{fname : 'Dhoni', avg : 48}
	];

	$scope.coderRaj = {name : 'Raj', level : 2};
	$scope.coderMohit = {name : 'Mohit', level : 3};

	$scope.moreLorem = 'The amazing story!';
})



.directive('newDirective', function(){//directive function() dont have parameters

	return function(scope, element, attrs){//S E A

		var students = element.children();

		var studentList = '';

		for(i =0; i< students.length; i++){
			if(students.eq(i).text() == "Chintu Sharma"){
				students.eq(i).css("color","red");
			}

			studentList += students.eq(i).text() +' | ';
		}

		angular.element(document.querySelector('#nameList')).text(studentList);
	}

})


.directive('pickThisArray', function(){

	return function(scope, element, attrs){

		var arr = scope[attrs['pickThisArray']];
		var atr = attrs['showThisAttribute'];

		var ul = angular.element('<ul>');

		element.append(ul);

		for(var i = 0; i < arr.length; i++){
			//$eval is required because we are using filter
			ul.append(angular.element('<li>').text(scope.$eval(atr, arr[i])));
		}
		ul.prepend(angular.element("<span id = 'frst'>").text('Below are elements of array-'));
		ul.after(angular.element("<span id = 'lst'>").text('this is it!'));

	}
})

.directive('coder', function(){
	var directive ={};

	directive.restrict ='E';
	directive.template = 'Click -> {{coder.name}} is on level {{coder.level}}';
	directive.scope ={ coder: "=name"};
	directive.compile = function(element, attributes){
		var link = function($scope, element, attributes){
			element.bind('click', function(){
				element.html('disappeared');
			});
		}
		return link;
	}
	return directive;
})


.directive('addHeading', function(){
	return{
		transclude : true,
		template: '<div><h3>{{moreLorem}}</h3></div><div ng-transclude></div>'
	}
})