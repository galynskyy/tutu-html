var stars = document.querySelectorAll(".rating__label");

var starsModule = (function() {
	var _init = function() {
		_eventListeners();
	};

	var _eventListeners = function() {
		for (var star of stars) {
			star.addEventListener("click", _animationStar);
		};
	};

	var _animationStar = function(event) {
		var element = event.target;

		for (var i = 0; i < stars.length; i++) {
			stars[i].classList.remove("_active");
		}

		element.classList.add("_active");
	};
	
	return {
		init: _init
	};
})();

stars && starsModule.init();