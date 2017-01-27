var progress = document.querySelector(".progress");

var progressModule = (function() {
	var _init = function() {
		_initProgress();
	};

	var _initProgress = function() {
		var currentValue = Number(progress.getAttribute("value"));
		var maxValue = Number(progress.getAttribute("max"));

  		while (currentValue !== maxValue) {
  			currentValue++;
  			progress.setAttribute("value", currentValue);
  		}
	};

	return {
		init: _init
	};
})();

window.onload = function() {
	progress && progressModule.init();
};