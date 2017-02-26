var links = document.querySelectorAll('a');

for (var i=0; i<links.length; i++) {
	links[i].classname = 'kevlink';
	links[i].addEventListener(mouseenter, enlargeText);
	links[i].addEventListener(mouseleave, initialText);
}

function enlargeText() {
	for (var i=0; i<links.length; i++) {
		links[i].classname = 'enlarge';
	}
}

function initialText() {
	for (var i=0; i<links.length; i++) {
		links[i].classname = 'initialText';
	}
}