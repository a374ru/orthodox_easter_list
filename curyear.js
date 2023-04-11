let li = document.querySelectorAll('li');
dt = new Date().getFullYear();
li[dt - 1].setAttribute('style', 'color:#e34234; font-size: 2em');
li[dt - 4].setAttribute("id", 'easter');

window.addEventListener("load", function () {
document.location.replace('#easter');
});