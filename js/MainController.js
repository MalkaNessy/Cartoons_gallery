

app.controller('MainController', ['$scope', function($scope) { 
  
  $scope.over = function (clickId) {
	  	  
	  console.log("catroon clicked "+clickId);
	   
	  
	  console.log("image")
	  
	  $scope.overview = $scope.cartoons[clickId];
	  console.log($scope.overview); 
	  
	  };

	      
  $scope.cartoons = 
   [ 
      { 
	    clickId:0,
	    imageprev: 'img/fixiki.jpg',
        title: 'Фиксики',
		linkto: 'https://www.youtube.com/embed/SrWYMz26ZOU?list=PLnwMMZEhCeyTLk-6V5cT6IeiqNpuoMn89',
		ordinary_link:'http://mega-mult.ru/russkie/417-fiksiki.html' 	
      }, 
     { 
	    clickId:1,
        imageprev: 'img/umizumi.jpg',
        title: 'Команда Умизуми',
		linkto: 'http://ok.ru/videoembed/234704734890 ',
		ordinary_link:'http://mega-mult.ru/serii/330-komanda-umizumi.html' 	
		
				
      }, 
   	  { 
	    clickId:2,
        imageprev: 'img/geroi.jpg',
        title: 'Герои в масках',
		linkto: 'https://www.youtube.com/embed/TH5khABJens',
		ordinary_link:'http://onlinemultfilmy.ru/pi-dzhej-maski/' 
      }, 
     { 
	    clickId:3,
        imageprev: 'img/tutit.jpg',
        title: 'Шарлотта Земляничка',
		linkto: 'https://www.youtube.com/embed/5QWnW8cJb6A ',
        ordinary_link:'http://coolmult.ru/news/2015-05-10-330'
	  }, 
		{ 
	    clickId:4,
        imageprev: 'img/pokemon.jpg',
        title: 'Покемон',
		linkto: 'https://www.youtube.com/embed/4GAe7zV3O3k ',
        ordinary_link:'http://onlinemultfilmy.ru/pokemon-1-sezon-liga-indigo/'
	  }, 
		{ 
	    clickId:5,
        imageprev: 'img/smeshariki.jpg',
        title: 'Смешарики',
		linkto: 'https://www.youtube.com/embed/ySzbgdTEjlA?list=PLn7UD0nnd1CZu9_H0OSoQflQxEUfhiNBb" ',
        ordinary_link:'http://mega-mult.ru/russkie/smeshariki/412-vse-serii.html'
	  }, 
		{ 
	    clickId:6,
        imageprev: 'img/einshtein.jpg',
        title: 'Маленькие Эйнштейны',
		linkto: 'https://vk.com/video_ext.php?oid=221076949&id=167068848&hash=929c9b51b536131d',
        ordinary_link:'http://onlinemultfilmy.ru/malenkie-enshtejny/'
	  
	  }, 
		{ 
	    clickId:7,
        imageprev: 'img/luntik.jpg',
        title: 'Лунтик',
		linkto: 'https://www.youtube.com/embed/3Hz3kHRRISU?list=PLF40DD57434E48E66 ',
        ordinary_link:'http://onlinemultfilmy.ru/luntik/'
	   }, 
		{ 
	    clickId:8,
        imageprev: 'img/dinotrain.jpg',
        title: 'Поезд динозавров',
		linkto: 'https://www.youtube.com/embed/GDN-4_bnzUU ',
		ordinary_link:'http://onlinemultfilmy.ru/poezd-dinozavrov/'
	   } , 
		{ 
	    clickId:9,
        imageprev: 'img/peppa.jpg',
        title: 'Свинка Пеппа',
		linkto: 'https://www.youtube.com/embed/5j-kcswYs64',
		ordinary_link:'http://onlinemultfilmy.ru/svinka-peppa/'
		} , 
		
		{ 
	    clickId:10,
        imageprev: 'img/holly.jpg',
        title: 'Маленькое королевство Бена и Холли',
		linkto: 'https://www.youtube.com/embed/V-ZFrU6R3oU ',
		ordinary_link:'http://onlinemultfilmy.ru/malenkoe-korolevstvo-bena-i-xolli/'
		}    	  
    ];
	/* $scope.projview = $scope.cartoons[1] */
	$scope.overview = $scope.cartoons[1]
   
  $scope.overfilm = function (clickId) {
	  	  
	  console.log("catroon clicked "+clickId);
	   
	  
	  console.log("image")
	  
	  $scope.overviewfilm = $scope.films[clickId];
	  console.log($scope.overview); 
	  
	  };
  
  
  $scope.films = 
   [ 
      { 
	    clickId:0,
	    imageprev: 'img/fairy.jpg',
        title: 'Феи',
		linkto: 'http://50.7.161.138/stream/films/fei_1_din',
		ordinary_link:'http://mega-mult.ru/disney/fei/74-multfilm-1-din.html' 	
      }, 
     { 
	    clickId:1,
        imageprev: 'img/home.jpg',
        title: 'Дом',
		linkto: 'http://ok.ru/videoembed/234704734890 ',
		ordinary_link:'http://gidonline.club/2015/03/dom-2015/' 	
		
				
      }
   ];
   $scope.overviewfilm = $scope.films[1] 
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

app.filter('trusted', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
});


/* Выводит список в обратном порядке

<div ng-init="title:s=['Jani','Hege','Kai']">
  <p>Looping with ng-repeat:</p>
  <ul>
    <li ng-repeat="x in title:s | orderBy: 'created_at':true ">
      {{ x }}
    </li>
  </ul>
</div> */
