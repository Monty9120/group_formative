const key = 'CNqjEeIdielReQ8b9jVcZyoqGd2dmGia';


var photogUsers = ['timtadder','heycheese','tania_depascalis']
var gdUsers = ['junki211','belu-design','visee-design']
var advertUsers = ['yeni_kim','batoolfatima','nayangazi987']

if ($('#photog').length > 0) {

	$(function(){

		_(photogUsers).each(function(username,i){


		

			let urlProjects = 'https://api.behance.net/v2/users/'+username+'/projects?client_id='+key;
			let urlUser = 'https://api.behance.net/v2/users/'+username+'?client_id='+key;

			
			$.ajax({
				url:urlUser,
				dataType:'jsonp',
				success:function(res){
					// console.log(res);
					let user = res.user;

					$('<div class="profile-img" style="background-image:url('+user.images[138]+');"></div>').appendTo('.card'+i+' .profile-pic')
					$('<h5>'+user.display_name+'</h5>').appendTo('.card'+i+' .profile-pic')
				}
			});

			$.ajax({
				url:urlProjects,
				dataType:'jsonp',
				success:function(res){
					
					let projects = res.projects;
					console.log(projects);

					for (var a = 2; a < 6; a++) {
						$('<div class="project-img" style="background-image:url('+projects[a].covers[230]+');""></div>').appendTo('.card'+i+' .projects')
						console.log(projects[a].covers[230])
					}
				}
			});


		});



	});
}

if ($('#graphic_design').length > 0) {

	$(function(){

		_(gdUsers).each(function(username,i){


		

			let urlProjects = 'https://api.behance.net/v2/users/'+username+'/projects?client_id='+key;
			let urlUser = 'https://api.behance.net/v2/users/'+username+'?client_id='+key;

			
			$.ajax({
				url:urlUser,
				dataType:'jsonp',
				success:function(res){
					// console.log(res);
					let user = res.user;

					$('<div class="profile-img" style="background-image:url('+user.images[138]+');"></div>').appendTo('.card'+i+' .profile-pic')
					$('<h5>'+user.display_name+'</h5>').appendTo('.card'+i+' .profile-pic')
				}
			});

			$.ajax({
				url:urlProjects,
				dataType:'jsonp',
				success:function(res){
					
					let projects = res.projects;
					console.log(projects);

					for (var a = 2; a < 6; a++) {
						$('<div class="project-img" style="background-image:url('+projects[a].covers[230]+');""></div>').appendTo('.card'+i+' .projects')
						console.log(projects[a].covers[230])
					}
				}
			});


		});



	});
}

if ($('#advertisement').length > 0) {

	$(function(){

		_(advertUsers).each(function(username,i){


		

			let urlProjects = 'https://api.behance.net/v2/users/'+username+'/projects?client_id='+key;
			let urlUser = 'https://api.behance.net/v2/users/'+username+'?client_id='+key;

			
			$.ajax({
				url:urlUser,
				dataType:'jsonp',
				success:function(res){
					// console.log(res);
					let user = res.user;

					$('<div class="profile-img" style="background-image:url('+user.images[138]+');"></div>').appendTo('.card'+i+' .profile-pic')
					$('<h5>'+user.display_name+'</h5>').appendTo('.card'+i+' .profile-pic')
				}
			});

			$.ajax({
				url:urlProjects,
				dataType:'jsonp',
				success:function(res){
					
					let projects = res.projects;
					console.log(projects);

					for (var a = 2; a < 6; a++) {
						$('<div class="project-img" style="background-image:url('+projects[a].covers[230]+');""></div>').appendTo('.card'+i+' .projects')
						console.log(projects[a].covers[230])
					}
				}
			});


		});



	});
}	