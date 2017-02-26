var links = document.querySelectorAll('a');

for (var i=0; i<links.length; i++) {
	links[i].classname = 'kevlink';
	links[i].addEventListener(mouseenter, enlargeText);
	links[i].addEventListener(mouseleave, initialText);
}

function enlargeText() {
	this.classname = 'enlarge';
}

function initialText() {
	this.classname = 'initialSize';
}