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

let urlProjects = 'https://api.behance.net/v2/users/pervinozcan/projects?client_id='+key;


$.ajax({
		
		url:urlProjects,
		dataType:'jsonp',
		success:function(res){
			
			_(res.projects).each(function(project){
				console.log(project);
				
			});

		}
	});


});

console.log('hello')