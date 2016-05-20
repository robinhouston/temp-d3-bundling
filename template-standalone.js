(function (exports,d3) {
	'use strict';

	function templateConstructor() {
		// State
		var state = {
			radius: 10,
			stroke: 2,
			color: "#FF0000"
		};

		// Graphics
		var circle;
		function draw(container, w, h) {
			var svg = d3.select(container).append("svg").attr("width", w).attr("height", h);
			circle = svg.append("circle")
				.attr("cx", w/2)
				.attr("cy", h/2)
				.attr("r", state.radius)
				.attr("fill", state.color)
				.attr("stroke-width", state.stroke);
		}

		function update() {
			circle.transition()
				.attr("r", state.radius)
				.attr("fill", state.color)
				.attr("stroke-width", state.stroke);
		}

		return {
			draw: draw,
			update: update,
			state: state,
		};
	}

	var t = templateConstructor();

	var state = t.state;

	function draw(container, w, h) {
		return t.draw(container, w, h);
	}

	function update() {
		return t.update();
	}

	exports.state = state;
	exports.draw = draw;
	exports.update = update;

}((this.template = this.template || {}),d3));