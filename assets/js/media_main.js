currentButton = document.getElementById("2019");
lastButton = currentButton;
currentYear = 2019;

function dateAction(year) {
  currentYear = year;
  // switch buttons
  lastButton = currentButton;
  currentButton = document.getElementById(year);
  lastButton.src = "/assets/img/" + lastButton.attributes[0].value + "-off.png";
  currentButton.src = "/assets/img/" + year + "-on.png";
  // switch poster
  poster = document.getElementById("poster");
  poster.src = "/assets/img/Af" + year + ".jpg";
  // hide/discover movies links
  if (year == 2018) {
    el = document.getElementById("movies");
    el.firstElementChild.style.display = "none";
    el.lastElementChild.href =
      "https://www.youtube.com/watch?v=s1WJgER4Ir0&feature=emb_logo";
    el.lastElementChild.lastElementChild.src = "/assets/img/aftermov2018.png";
    el.style.display = "flex";
  } else if (year != 2019) {
    el.style.display = "none";
  } else {
    el.firstElementChild.style.display = "";
    el.lastElementChild.href =
      "https://www.youtube.com/watch?v=gC6xYWVUZNk&feature=emb_logo";
    el.lastElementChild.lastElementChild.src = "/assets/img/aftermov2019.png";
    el.style.display = "flex";
  }
  // switch thumbnails
  if (year == 2019 || year == 2018) {
    document.getElementById("thumbnails").style.display = "flex";
    document.getElementById("ap1").src = "/assets/img/ap1-" + year + ".jpg";
    document.getElementById("ap2").src = "/assets/img/ap2-" + year + ".jpg";
    document.getElementById("ap3").src = "/assets/img/ap3-" + year + ".jpg";
    document.getElementById("ap4").src = "/assets/img/ap4-" + year + ".jpg";
    document.getElementById("ap5").src = "/assets/img/ap5-" + year + ".jpg";
    document.getElementById("ap6").src = "/assets/img/ap6-" + year + ".jpg";
    document.getElementById("ap7").src = "/assets/img/ap7-" + year + ".jpg";
    document.getElementById("ap8").src = "/assets/img/ap8-" + year + ".jpg";
    document.getElementById("ap9").src = "/assets/img/ap9-" + year + ".jpg";
  } else {
    document.getElementById("thumbnails").style.display = "none";
  }
}

function modalAction(i) {
  // Get the modal
  modal = document.getElementById("modal");

  // Insert image inside the modal
  modalImg = document.getElementById("modal-content");
  modal.style.display = "block";
  modalImg.src = "/assets/img/tof" + i + "-" + currentYear + ".jpg";

  // Get the <span> element that closes the modal
  span = document.getElementById("close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
}
