/*var selectOneElement = document.querySelector(".main-nav");

selectOneElement.addEventListener("click", function doStuff(event) {
  console.dir(event.target.parentElement.parentElement);
});*/

var selectElementToObserve = document.querySelector(".home-about");
var firstSection = document.querySelector(".home-intro");

var options = {
  root: null,
  threshold: 0,
  rootMargin: "-200px 0px 0px 0px",
};

var observer = new IntersectionObserver(function navbarAnimation(
  ourEntries,
  observer
) {
  console.log(ourEntries);
  console.log(observer);
  console.log(Array.isArray(ourEntries));
  console.dir(ourEntries);
  //   console.log(ourEntries[0].isIntersecting);
  let headerElement = document.querySelector("header");
  for (let eachEntry of ourEntries) {
    if (!eachEntry.isIntersecting) {
      console.log("It is intersecting");
      headerElement.classList.add("change");
      console.log(eachEntry);
    } else {
      headerElement.classList.remove("change");
      console.log(eachEntry.target);
    }
  }
  //   if (ourEntries.isIntersecting) {
  //     console.log("It is intersecting");
  //     console.log(ourEntries);
  //     console.dir(ourEntries);
  //   } else {
  //     console.log("Not intersecting");
  //     console.dir(ourEntries);
  //   }
},
options);

var arrImgAndParagraphElements = document.querySelectorAll(".slide-in");
var paragraphFadeIn = document.querySelectorAll(".fade-in");
var secondOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

var secondObserver = new IntersectionObserver(function fadeInAndSlideIn(
  ourEnries,
  secondObserver
) {
  // var
  //   console.log(ourEnries[0].target);
  //   console.log(ourEnries);
  //   console.log(secondObserver);
  for (let eachObserved of ourEnries) {
    // console.log(eachObserved.target);
    if (!eachObserved.isIntersecting) {
      console.log(eachObserved.target);
      return;
      //   eachObserved.target.classList.remove("appear");
    } else {
      eachObserved.target.classList.add("appear");
      secondObserver.unobserve(eachObserved.target);
    }
  }
});

observer.observe(firstSection);
paragraphFadeIn.forEach(function observeEachElement(eachElement) {
  secondObserver.observe(eachElement);
});

arrImgAndParagraphElements.forEach(function eachElement(eachElement) {
  secondObserver.observe(eachElement);
});
// arrImgAndParagraphElements.forEach(function observeEachElement(eachElement) {
//   secondObserver.observe(eachElement);
// });

// selectElementToObserve.addEventListener(
//   "click",
//   function elementClicked(event) {
//     var headerElement = document.querySelector("header");
//     console.dir(headerElement);
//     headerElement.classList.toggle("change");
//     var leftSide = document.querySelector(".from-left");
//     var rightSide = document.querySelector(".from-right");
//     var arrOfSelectors = [leftSide, rightSide];
//     for (let eachSelector of arrOfSelectors) {
//       //   console.dir(eachSelector);
//       eachSelector.classList.toggle("appear");
//     }
//     console.dir(event.target);
//     console.dir(event.target.children);
//     var elementChildren = event.target.children;
//     console.dir(elementChildren);
//     var convertToArrray = Array.from(elementChildren);
//     var [firstChild, secondChild, thirdChild] = convertToArrray;
//     console.log(Array.isArray(convertToArrray));
//     console.dir(firstChild.nextElementSibling);
//     console.log(firstChild.nextElementSibling == secondChild);
//     console.dir(secondChild);
//     console.dir(thirdChild);
//   }
// );
