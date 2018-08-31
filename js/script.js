$(function(){

	var center ={lat:-36.842744,lng:174.766994};
    var map = L.map('map').setView(center,12);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhbHl4OTAiLCJhIjoiY2o2YjdrZHRlMWJmYjJybDd2cW1rYnVnNSJ9.j_DQLfixHfhioVjH6qmqkw').addTo(map);

	L.marker({lat:-36.842744,lng:174.766994}).addTo(map);
	console.log('hi')

	$('.col-md-4.photo').click(function(){
   window.location.href='photog.htm';
   });

   $('.col-md-4.GD').click(function(){
   window.location.href='graphic_design.htm';
   });

   $('.col-md-4.advert').click(function(){
   window.location.href='advertisment.htm';
   });

});

    var piano = anime({
        targets: '.intro-lead-in span',
        translateX: ['120vh', 0],
        duration: function(el, i, l) {
            return 800 + (i * 100);
        },

        easing: 'easeInOutCubic',
        delay: 200,
    })
    var oHeadingTopText = anime


// behance	-	-	-	-	-	-	-	-	-	-	-	-	-

let key = 'xd3k9yk7ttvAceiWL3gexGrH6FNhgQpS';

let urlProjects = 'https://api.behance.net/v2/users/pervinozcan?client_id='+key;

var profileHTML = $('#templateProfile').html();
var profileTemplate = Template7.compile(profileHTML);

$.ajax({
		
		url:urlProjects,
		dataType:'jsonp',
		success:function(res){
			var user = res.user;
			console.log(user);
			var output = profileTemplate(user);
			$(output).appendTo('.profile-details')
			
		

		}
	});



