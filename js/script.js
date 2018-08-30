$(function(){
	var center ={lat:-36.842744,lng:174.766994};
    var map = L.map('map').setView(center,12);

	L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGhhbHl4OTAiLCJhIjoiY2o2YjdrZHRlMWJmYjJybDd2cW1rYnVnNSJ9.j_DQLfixHfhioVjH6qmqkw').addTo(map);

	L.marker({lat:-36.842744,lng:174.766994}).addTo(map);
	console.log('hi')
})