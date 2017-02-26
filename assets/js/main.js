var links = document.querySelectorAll('a');

for (var i=0; i<links.length; i++) {
	links[i].className = "kevlink";
	links[i].addEventListener('mouseenter', enlargeText);
	links[i].addEventListener('mouseleave', initialText);
}

function enlargeText() {
	this.className = "enlarge";
}

function initialText() {
	this.className = "initialSize";
}