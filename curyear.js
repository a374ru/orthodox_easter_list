const arr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

window.addEventListener("load", function() {
    li = document.querySelectorAll('li');
    moment = new Date();
    numberMontf = moment.getMonth();
    dt = moment.getFullYear();
    mainElement = li[dt - 1];
    elementText = mainElement.textContent;
    dateElement = Number(elementText.match(/[0-9]*,/)[0].split(',')[0])

    for (var el of arr) {
        if (elementText.search(el) > -1) {
            indexMontfElement = arr.findIndex(i=>i == el);
        }
    }

    easterelement = new Date(`${dt}/${indexMontfElement}/${dateElement}`);

    if (moment.getTime() == easterelement.getTime()) {
        
        li[dt - 1].setAttribute('style', 'color:#e3423499; font-size: 1.3em');

        li[dt].setAttribute('style', 'color:#fff; font-size: 1.7em; background: rgb(227,66,52); background: linear-gradient(270deg, rgba(227,66,52,1) 0%, rgba(54,4,0,1) 100%); padding: 12px; box-shadow: 0px 0px 7px #0007;');
        li[dt].innerHTML += " <span style='color:#fca9a9; font-size: .7em; '>ожидаемая Пасха</span>";

    } else {

    li[dt - 1].setAttribute('style', 'color:#e34234; font-size: 1.7em');
        li[dt-1].setAttribute('style', 'color:#fff; font-size: 1.7em; background: rgb(227,66,52); background: linear-gradient(270deg, rgba(227,66,52,1) 0%, rgba(54,4,0,1) 100%); padding: 12px;');

        li[dt - 1].innerHTML += " <span style='color:#fca; font-size: .7em; '>ожидаемая Пасха</span>";

    }

    li[dt - 3].setAttribute("id", 'easter');

    // document.location.replace('#easter');
    el = document.querySelector('#easter');
    el.scrollIntoView();
});
