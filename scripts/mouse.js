console.log("Mouse Script Loaded!");

var cursor = $(".cursor"),
	  follower = $(".follower");

var posX = 0,
	  posY = 0;

var mouseX = 0,
	  mouseY = 0;

TweenMax.to({}, 0.020, {repeat: -1, onRepeat: function() {
		posX += (mouseX - posX) / 5;
		posY += (mouseY - posY) / 5;
		TweenMax.set(follower, {css: {left: posX - 5, top: posY - 5}});
		TweenMax.set(cursor, {css: {left: mouseX,top: mouseY}});
	}
});

$(document).on("mousemove", function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$("a").on("mouseenter", function() {
	cursor.addClass("active");
	follower.addClass("active");
});
$("a").on("mouseleave", function() {
	cursor.removeClass("active");
	follower.removeClass("active");
});
