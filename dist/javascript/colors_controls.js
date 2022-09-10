"use strict";
function setMainColorsInLocalStorgeByJson() {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "./Jsons/colors/colors.json");
  myRequest.send();
  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let myColorsJson = JSON.parse(this.responseText);
      // console.log(myColorsJson.color1);
      let localStorageColors = localStorage.getItem("colors");
      let colorsObject = JSON.parse(localStorageColors);
      if (localStorageColors) {
        // console.log(localStorage.getItem("colors"))
        document.documentElement.style.setProperty(
          "--dif_color",
          colorsObject.dif_color
        );
        document.documentElement.style.setProperty(
          "--active_color",
          colorsObject.active_color
        );
        document.documentElement.style.setProperty(
          "--icons_color",
          colorsObject.icons_color
        );
        document.documentElement.style.setProperty(
          "--landing_color",
          colorsObject.landing_color
        );
        document.documentElement.style.setProperty(
          "--footer_color",
          colorsObject.footer_color
        );
      }
      let control_btn = document.querySelector(".control_btn");
      let div_list_control = document.createElement("div");
      let div_list_span_close_control = document.createElement("span");
      let div_list_ul_control = document.createElement("ul");
      div_list_span_close_control.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
      div_list_span_close_control.onclick = function () {
        div_list_span_close_control.parentElement.style.display = "none";
        div_list_control.classList.remove("div_control");
      };
      div_list_control.append(div_list_span_close_control);
      div_list_control.append(div_list_ul_control);
      div_list_control.style.display = "none";
      control_btn.addEventListener("click", () => {
        div_list_control.classList.toggle("div_control");
        if (div_list_control.className === "div_control") {
          div_list_control.style.display = "flex";
        } else {
          div_list_control.style.display = "none";
        }
      });
      for (const colors of Object.keys(myColorsJson)) {
        let li = document.createElement("li");
        li.className = "main_colors";
        li.setAttribute("data-active_value", myColorsJson[colors].dif_color);

        if (li.dataset.active_value === myColorsJson[colors].dif_color) {
          li.classList.add("active");
        }
        let h5 = document.createElement("h5");
        h5.textContent = `${colors}`;
        let colorsBox = document.createElement("div");
        colorsBox.className = "colorsBox";
        for (const listColor of Object.keys(myColorsJson[colors])) {
          let colorSpan = document.createElement("span");
          colorSpan.className = "colorSpan";
          colorSpan.style.backgroundColor = myColorsJson[colors][listColor];
          colorsBox.append(colorSpan);
        }
        li.append(h5);
        li.append(colorsBox);
        li.addEventListener("click", () => {
          // li.classList.remove("active");
          // li.classList.add("active");
          document.documentElement.style.setProperty(
            "--dif_color",
            myColorsJson[colors].dif_color
          );
          document.documentElement.style.setProperty(
            "--active_color",
            myColorsJson[colors].active_color
          );
          document.documentElement.style.setProperty(
            "--icons_color",
            myColorsJson[colors].icons_color
          );
          document.documentElement.style.setProperty(
            "--landing_color",
            myColorsJson[colors].landing_color
          );
          document.documentElement.style.setProperty(
            "--footer_color",
            myColorsJson[colors].footer_color
          );
          window.localStorage.setItem(
            "colors",
            JSON.stringify(myColorsJson[colors])
          );
        });
        div_list_ul_control.prepend(li);
        document.body.prepend(div_list_control);
      }
    }
  };
}
setMainColorsInLocalStorgeByJson();
