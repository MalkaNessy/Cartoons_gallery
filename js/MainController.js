

app.controller('MainController', ['$scope', function($scope) { 
  
  $scope.over = function (clickId) {
	  	  
	  console.log("catroon clicked "+clickId);
	   
	  
	  console.log("image")
	  
	  $scope.overview = $scope.cartoons[clickId];
	  console.log($scope.overview); 
	  
	  };

	  
  
  
  
  
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
	    clickId:0,
	    imageprev: 'img/pict1.jpg',
        title: 'First project',
		linkto: 'https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" '
      }, 
     { 
	    clickId:1,
        imageprev: 'img/pict2.jpg',
        title: 'Второй проект',
		linkto: 'https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" '
      }, 
   	  { 
	    clickId:2,
        imageprev: 'img/pict3.jpg',
        title: 'Третий проект',
		linkto: 'https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" '
      }, 
     { 
	    clickId:3,
        imageprev: 'img/pict4.jpg',
        title: 'Четвертый проект',
		linkto: 'https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" '
      }, 
		{ 
	    clickId:4,
        imageprev: 'img/pict5.jpg',
        title: 'Пятый проект',
		linkto: 'https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" '
      }, 
		{ 
	    clickId:5,
        imageprev: 'img/pict6.jpg',
        title: 'Шестой проект',
		linkto: 'https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" '
      } 	  
    ];
	/* $scope.projview = $scope.cartoons[1] */
	
   
  
  
   
/* function blogpost(){
var i;
for (i = 0; i < projects.length; i++) {
	if(projects[i].title:=="Forth project"){
	  var unit = projects[i];
  }
}
return unit;
} */
 


console.log('end of MainController definition')  
  
}]);        

app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);


/* Выводит список в обратном порядке

<div ng-init="title:s=['Jani','Hege','Kai']">
  <p>Looping with ng-repeat:</p>
  <ul>
    <li ng-repeat="x in title:s | orderBy: 'created_at':true ">
      {{ x }}
    </li>
  </ul>
</div> */
