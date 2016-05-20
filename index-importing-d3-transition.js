import templateConstructor from "./circle-importing-d3-transition.js";

var t = templateConstructor();

export var state = t.state;

export function draw(container, w, h) {
	return t.draw(container, w, h);
}

export function update() {
	return t.update();
}
