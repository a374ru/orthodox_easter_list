window.addEventListener("load", function () {
let li = document.querySelectorAll('li');
dt = new Date().getFullYear();
	li[dt - 1].setAttribute('style', 'color:#e34234; font-size: 1.5em');
	// li[dt].setAttribute('style', 'color:#fff; font-size: 1.7em; background-color: #e34234; padding: 12px;');
	// li[dt].innerHTML += " <span style='color:#fca9a9; font-size: .7em; '>Ожидаемая Пасха</span>";
	li[dt - 3].setAttribute("id", 'easter');
	
// document.location.replace('#easter');
el = document.querySelector('#easter');
el.scrollIntoView();
});

