const submit = document.getElementById("select-hint");
let hintContent = document.getElementById("info");

submit.addEventListener("mouseover", function () {
  hintContent.style.visibility = "visible";
});

submit.addEventListener("mouseout", function () {
  hintContent.style.visibility = "hidden";
  // or:
  setTimeout(function() {
    if (!isMouseOver)
    hintContent.style.visibility = 'hidden';
    }, timeout);
  
});
