$(function(){

	let key = 'LmxvFy79pt0y3V8BBIwgZpGUbMBJrV52';

	let projectHTML = $('#templateFeatures').text();
	let projectTemplate = Template7(projectHTML).compile();

	let urlProjects = 'https://api.behance.net/v2/users/pervinozcan/projects?client_id='+key;

	$.ajax({
		url:urlProjects,
		dataType:'jsonp',
		success:function(res){
			
			_(res.projects).each(function(project,i){
				// console.log(project);
				if(i<6){
					let output = projectTemplate(project);
					$('.project-features').append(output);

				}
			
			});

		}
	});


	//------Show individual projects------
	let singleProjectHTML = $('#featuresSingleProject').text();
	let singleProjectTemplate = Template7(singleProjectHTML).compile();

	$('#portfolioModal1').on('show.bs.modal',function(e){

		let target = e.relatedTarget;
		let projectid = $(target).data('projectid');
		let urlProject = 'http://www.behance.net/v2/projects/'+projectid+'?api_key='+key;

		$.ajax({
			url:urlProject,
			dataType:'jsonp',
			success:function(res){
				
				let project = res.project;
				console.log(project);

				var output = singleProjectTemplate(project);
				$('.feature-single-project').empty();
				$('.feature-single-project').append(output);
				
			}
		});
		
		// console.log(projectid);
	});



});