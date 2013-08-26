$(function() {
    $("#cats_button").click(function() {
        getCatPic();
    });

    $("#meow_button").click(function() {
        meow();
    });  
});

function getCatPic(){
	var img = document.getElementById('cat_pic'); 
	
	//cache breaker
	img.src = "http://your_pi_purr_location/cats.jpeg?" + new Date().getTime();
}
    
function meow(){
	$.get("http://your_pipurr_location/sound");
}
    
    
    
    
