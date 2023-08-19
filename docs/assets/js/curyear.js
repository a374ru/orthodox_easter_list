/** @format */

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

    //=-=-=-=-=-=-=-=-=-=-=-=-=-
    li.forEach(node => {
        let node3 = node.textContent.match(curentYear - 3);
        if (node3) {
            //anchor for scroll
            node.setAttribute("id", "easter");
        }

        yearElemet = node.textContent.match(curentYear);

        if (yearElemet != null) {
            dateElement = Number(node.textContent.match(/[\d]{2}/)[0].split(",")[0]);
            for (var el of arr) {
                if (node.textContent.search(el) > -1) {
                    indexMontfElement = arr.findIndex((i) => i == el);
                }
            }
            easterElement = new Date(`${yearElemet}/${indexMontfElement}/${dateElement}`);
            //=-=-=-=-=-=-=-=-=-=-=-=-=-
            if (moment.getTime() < easterElement.getTime()) {
                node.setAttribute("class", "last-easter");
                node.setAttribute("class", "easter pulse");
                node.innerHTML +=
                    " <br><span style='color:#fca9a9; font-size: .7em; '>Ожидаемая Пасха</span>";
            } else {
                node.setAttribute("class", "last-easter");
            }
        }

        node2 = node.textContent.match(curentYear + 1);
        if (node2 && moment.getTime() > easterElement.getTime()) {
            node.setAttribute("class", "easter pulse");
            node.innerHTML +=
                " <br><span style='color:#fca; font-size: .7em; '>Ожидаемая Пасха</span>";
        }

    });
    // el = document.querySelector("#easter");
    // el.scrollIntoView();
    document.location.replace('#easter');
});
