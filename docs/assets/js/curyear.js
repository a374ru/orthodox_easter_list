
if (window.innerWidth < 525) {
    b = document.body.setAttribute('style', 'background: radial-gradient(circle, rgb(242, 244, 255) 30%, rgb(255, 240, 243) 70%)');
}


const arr = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];

window.addEventListener("load", function () {
    li = document.querySelectorAll("li");
    moment = new Date();
    numberMontf = moment.getMonth();
    curentYear = moment.getFullYear();
    spanElement = `<br><a target='_blank' href='https://aprakos.a374.ru/currentday/APRAKOS/PASKHA/XB.html' class='badge-link'>Грядущая Пасха</a>`

    //=-=-=-=-=-=-=-=-=-=-=-=-=-
    li.forEach((node) => {
        let node3 = node.textContent.match(curentYear - 3);
        if (node3) {
            //anchor for scroll
            node.setAttribute("id", "easter");
        }

        yearElemet = node.textContent.match(curentYear);

        if (yearElemet != null) {
dateElement = Number(node.textContent.match(/[\d]{1,2}$/)[0].split(",")[0]);
            for (var el of arr) {
                if (node.textContent.search(el) > -1) {
                    indexMonthElement = arr.findIndex((i) => i == el);
                }
            }
            easterElement = new Date(
                `${yearElemet}/${indexMonthElement+0}/${dateElement}`
            );
            //=-=-=-=-=-=-=-=-=-=-=-=-=-
            if (moment.getTime() < easterElement.getTime()) {
                node.setAttribute("class", "last-easter");
                node.setAttribute("class", "easter pulse");
                node.innerHTML += spanElement

            } else {
                node.setAttribute("class", "last-easter");
            }
        }

        node2 = node.textContent.match(curentYear + 1);
        if (node2 && moment.getTime() > easterElement.getTime()) {
            node.setAttribute("class", "easter pulse");
            formatText = node.textContent.replace(/[\(\\)]{1}\s{1}/gi, '');
            node.innerHTML = formatText + spanElement;
        }
    });
    // el = document.querySelector("#easter");
    // el.scrollIntoView();
    document.location.replace("#easter");
});

document.querySelector(".copyright-year").innerHTML = new Date().getFullYear();
