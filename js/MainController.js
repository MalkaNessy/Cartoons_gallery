

app.controller('MainController', ['$scope', function($scope) { 
  
  $scope.blog1 = function (valueToAdd) {
	  console.log("clicked blog1");
	  $scope.projview = $scope.projects[0]; 
   }
  
   $scope.blog2 = function (valueToAdd) {
	  console.log("clicked blog2");
	  $scope.projview = $scope.projects[1]; 
   }
   
    $scope.blog3 = function (valueToAdd) {
	  console.log("clicked blog3");
	  $scope.projview = $scope.projects[2]
   }
   
    $scope.blog4 = function (valueToAdd) {
	  console.log("clicked blog4");
	  $scope.projview = $scope.projects[3]
   }
  
    
  $scope.cartoons = 
   [ 
      { 
	    imageprev: 'img/pict1.jpg',
        name: 'First project',
		linkto: 'https://www.w3schools.com/angular/angular_scopes.asp'
      }, 
     { 
        imageprev: 'img/pict2.jpg',
        name: 'First project',
		linkto: 'https://www.w3schools.com/angular/angular_scopes.asp' 
      } ,
   	  { 
        imageprev: 'img/pict3.jpg',
        name: 'First project',
		linkto: 'https://www.w3schools.com/angular/angular_scopes.asp'
      }, 
     { 
        imageprev: 'img/pict4.jpg',
        name: 'First project',
		linkto: 'https://www.w3schools.com/angular/angular_scopes.asp'
      },
		{ 
        imageprev: 'img/pict5.jpg',
        name: 'First project',
		linkto: 'https://www.w3schools.com/angular/angular_scopes.asp'
      } ,
		{ 
        imageprev: 'img/pict6.jpg',
        name: 'First project',
		linkto: 'https://www.w3schools.com/angular/angular_scopes.asp'
      } 	  
    ];
	
	/* $scope.projview = $scope.projects[3]; */
  
  
   
function blogpost(){
var i;
for (i = 0; i < projects.length; i++) {
	if(projects[i].name=="Forth project"){
	  var unit = projects[i];
  }
}
return unit;
}
 


console.log('end of MainController definition')  
  
}]);


/* Выводит список в обратном порядке

<div ng-init="names=['Jani','Hege','Kai']">
  <p>Looping with ng-repeat:</p>
  <ul>
    <li ng-repeat="x in names | orderBy: 'created_at':true ">
      {{ x }}
    </li>
  </ul>
</div> */
