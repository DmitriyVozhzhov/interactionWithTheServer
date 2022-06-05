
let run = function () {
    const createContent = (arr) => {
        let values = Object.values(arr.planets);

        values.forEach((item) => {
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const img = document.createElement('img');
            const span = document.createElement('span');


            h2.innerText = item.title;
            span.innerText = item.info;
            img.src = item.url;
            div.appendChild(h2);
            div.appendChild(span);
            div.appendChild(img);
            document.body.appendChild(div);

        });

    };

    fetch(' https://trevadim.github.io/vue/data/data.json ')
        .then((response) => response.json())
        .then((data) => createContent(data))
        .catch((error) => console.error(error));

}
let del = function () {
document.getElementById("btn1").style.display = "none";

}
