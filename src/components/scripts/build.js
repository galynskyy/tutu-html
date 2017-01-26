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

var progressModule = (function() {
	var _init = function() {
		_initProgress();
	};

	var _initProgress = function() {
		var element = document.querySelector(".progress");
		var progressValue = element.getAttribute("20");


	};
	
	return {
		init: _init
	};
})();

window.onload = function() {
	stars && starsModule.init();
	progressModule.init();
};