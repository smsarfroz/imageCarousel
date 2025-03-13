let imageArray = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "images/img5.jpg",
];

let arrayLength = imageArray.length;
let curIndex = 0;

const forwardIconButton = document.querySelector(".forwardIcon");
const backwardIconButton = document.querySelector(".backwardIcon");
const imageSlide = document.querySelector(".imageSlide");

const setColorInDots = function () {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    console.log(dot.dataset.index, curIndex);
    if (dot.dataset.index != curIndex) {
      dot.style.backgroundColor = "rgb(" + 93 + "," + 93 + "," + 93 + ")";
    } else {
      dot.style.backgroundColor = "rgb(" + 161 + "," + 161 + "," + 161 + ")";
    }
  });
};

setColorInDots();
forwardIconButton.addEventListener("click", () => {
  curIndex++;
  curIndex %= arrayLength;
  imageSlide.innerHTML = `<img src=${imageArray[curIndex]} style="width: 1536px; height: 635px;" alt="">`;
  setColorInDots();
});

backwardIconButton.addEventListener("click", () => {
  curIndex--;
  curIndex += arrayLength;
  curIndex %= arrayLength;
  imageSlide.innerHTML = `<img src=${imageArray[curIndex]} style="width: 1536px; height: 635px;" alt="">`;
  setColorInDots();
});

const navigationDots = document.querySelector(".navigationDots");

navigationDots.addEventListener("click", (e) => {
  const element = e.target;
  if (element.className === "dot") {
    const indexClicked = element.dataset.index;
    console.log(element);
    console.log(indexClicked);
    curIndex = indexClicked;
    setColorInDots();
    imageSlide.innerHTML = `<img src=${imageArray[curIndex]} style="width: 1536px; height: 635px;" alt="">`;
  }
});
