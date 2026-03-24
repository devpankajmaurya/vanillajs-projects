const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const ul = document.querySelector("#ul");
const listCount = document.querySelector("#listCount");

listCount.textContent = 0;

let editFlag = false;
let list;
let index;


let data = JSON.parse(localStorage.getItem("dB")) || [];
console.log(data);
ul.innerHTML = "";

data.forEach((text) => {
    renderList(text, listCount);
});

submit.addEventListener("click", () => {

    if (input.value !== "") {

        if (editFlag !== true) {

            data.push(input.value);
            renderList(input.value, listCount);
            localStorage.setItem("dB", JSON.stringify(data));
            input.value = "";
        } else {

            editFlag = false;
            list.childNodes[0].nodeValue = input.value;

            data[index] = input.value;
            localStorage.setItem("dB", JSON.stringify(data));

            input.value = "";
        }

    } else {
        input.value = "";
        alert("Empty field is not allowed!");
    }
});

input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        submit.click();
    }
});

reset.addEventListener("click", () => {
    ul.innerHTML = "";
    data = [];
    localStorage.removeItem("dB");
    listCount.textContent = data.length;
});

ul.addEventListener("click", (e) => {

    if (e.target.textContent === "🖋️") {

        editFlag = true;

        list = e.target.closest("li");
        input.focus();
        input.value = list.childNodes[0].nodeValue;
        index = [...ul.children].indexOf(list);
    }

    if (e.target.textContent === "❌") {

        list = e.target.closest("li");
        index = [...ul.children].indexOf(list);
        list.remove();

        data.splice(index, 1);
        localStorage.setItem("dB", JSON.stringify(data));

        listCount.textContent = data.length;
    }
});

function renderList(text, listCount) {
    let li = document.createElement("li");
    li.textContent = text;

    let div = document.createElement("div");

    let editLi = document.createElement("button");
    editLi.textContent = "🖋️"
    div.appendChild(editLi);

    let deleteLi = document.createElement("button");
    deleteLi.textContent = "❌";
    div.appendChild(deleteLi);

    li.appendChild(div);
    ul.appendChild(li);

    listCount.textContent = data.length;
}
