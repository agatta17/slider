document.getElementById('slider-left').onclick = sliderLeft;
let left = 0;

function sliderLeft() {
	let bar = document.getElementById('bar');
	left = left-400;
	if (left<-800) {
		left = 0;
	}
	bar.style.transform = 'translateX(' + left + 'px)';
}