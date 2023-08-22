window.addEventListener("load", function () {
let li = document.querySelectorAll('li');
dt = new Date().getFullYear();
	li[dt - 1].setAttribute('style', 'color:#e34234; font-size: 1.5em');
	li[dt - 4].setAttribute("id", 'easter');
	document.location.href('#easter');
});