$(function(){
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


});



