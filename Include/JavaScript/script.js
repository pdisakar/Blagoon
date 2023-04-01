let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");
let wholebody = document.getElementsByClassName("wrapper");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      wholebody[i].style.background = "#F2F8FE";
      contentDiv[i].style.margin = "2rem";
      toggles[i].style.background = "#DFF1F0";
      wholebody[i].style.borderRadius = "0.8rem";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      toggles[i].style.background = "#F2F8FE";
      contentDiv[i].style.height = "0px";
      contentDiv[i].style.margin = "0px";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        toggles[j].style.background = "#F2F8FE";  
        contentDiv[j].style.height = "0px";
        contentDiv[j].style.margin = "0px";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}
