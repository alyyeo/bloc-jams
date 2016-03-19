// var pointsArray = document.getElementsByClassName('point');

// var animatePoints = function(points) {

// 	var revealPoint = function(point) {
// 		points[point].style.opacity = 1;
// 		points[point].style.transform = "scaleX(1) translateY(0)";
// 		points[point].style.msTransform = "scaleX(1) translateY(0)";
// 		points[point].style.WebkitTransform = "scaleX(1) translateY(0)";
// 	};

// 	for (var i = 0; i < points.length; i++) {
// 		revealPoint(i);
// 	};
// };

var animatePoints = function() {
	var revealPoint = function() {
		$(this).css({
			opacity: 1, 
			transform: 'scaleX(1) translateY(0)'
		});
	};

	$.each($('.point'), revealPoint);
};

$(window).load(function() {

	if ($(window).height() > 950) {
		animatePoints();
	}

	var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

	$(window).scroll(function(event) {
		if ($(window).scrollTop() >= scrollDistance) {
			animatePoints();
		}
	});
	// window.addEventListener('scroll', function(event) {
	// 	if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
	// 		animatePoints(pointsArray);
	// 	}
	// });
});