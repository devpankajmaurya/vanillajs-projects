const mainImage = document.querySelector("#mainImage");

const tImages = document.querySelector(".thumbnailImage");

const mainSection = document.querySelector(".mainSection");

let id = 0;
let defaultSrc = mainImage.src;

tImages.children[id].style.border = "2px solid skyblue";
tImages.children[id].style.borderRadius = "20px";

function removeActive() {
    tImages.children[id].style.borderRadius = "0px";
    tImages.children[id].style.border = "0px";
}

function previousFun() {

    removeActive();

    if (id === 0) {
        id = tImages.children.length - 1;
    } else {
        id = id -1;
    }

    mainImage.src = tImages.children[id].src;
    tImages.children[id].style.borderRadius = "20px";
    tImages.children[id].style.border = "2px solid skyblue";
}

function nextFun() {

    removeActive();

    if (id === tImages.children.length - 1) {
        id = 0;
    } else {
        id = id + 1;
    }
    mainImage.src = tImages.children[id].src;
    tImages.children[id].style.borderRadius = "20px";
    tImages.children[id].style.border = "2px solid skyblue";
}

function tClick(element) {
    let currentId = Number(element.target.dataset.index);

    removeActive();

    mainImage.src = tImages.children[currentId].src;

    tImages.children[currentId].style.border = "2px solid skyblue";
    tImages.children[currentId].style.borderRadius = "20px";

    id = currentId;
}

mainSection.addEventListener("click", (element) => {

    if (element.target.id === "previous") {

        previousFun();

    } else if (element.target.id === "next") {

        nextFun();
    }

});

tImages.addEventListener("click", (element) => {

    if (element.target instanceof HTMLImageElement) {

        tClick(element);
    }
});

document.addEventListener("keydown", (k) => {

    if (k.key === "ArrowLeft") {
        previousFun();
    }

    if (k.key === "ArrowRight") {
        nextFun();
    }
})
