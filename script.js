'use strict';


let text = document.getElementById('text');
document.getElementById('transform').addEventListener('click', () => {
	text.textContent = text.textContent.replace(/\B'|'\B/g, '"');
});

