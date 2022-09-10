"use strict";
// Start Navgiton Bar Birger List Icon
function addClassActiveForElement(element) {
  let ele = document.querySelector(element);
  ele.classList.toggle("active");
}
// Heading Attribut Fill
let mainHeading = document.querySelectorAll(".main_heading");
mainHeading.forEach((ele) => {
  ele.setAttribute("data-heading_text", ele.textContent);
});
// End Navgiton Bar Birger List Icon
// Start Navgiton Bar List
addActiveClassAndRemoveForAllEle(".list_nav > li");
addActiveClassAndRemoveForAllEle(".skill_views > .view");
function addActiveClassAndRemoveForAllEle(ele) {
  let list_nav = document.querySelectorAll(ele);
  list_nav.forEach((element) => {
    element.addEventListener("click", () => {
      list_nav.forEach((ele) => {
        ele.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}
// End Navgiton Bar List
// Start My Skills
// Connect XML JSON
function getSkillsInPage() {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "./Jsons/sections_content/my_skills_section.json");
  myRequest.send();
  myRequest.onreadystatechange = function () {
    var _a, _b;
    if (this.readyState === 4 && this.status === 200) {
      // Convert Json To Javascript Object
      let skillsObjcets = JSON.parse(this.responseText);
      let grid_theme_skills = document.getElementById("grid_theme_skills");
      let progress_theme_skills = document.getElementById(
        "progress_theme_skills"
      );
      let skills_grid_theme = document.querySelector(".skills_grid_theme");
      let skills_progress_theme = document.querySelector(
        ".skills_progress_theme"
      );
      // Grid Theme For Skills
      grid_theme_skills.onclick = function () {
        progress_theme_skills.classList.remove("active");
        skills_progress_theme.classList.remove("active");
        grid_theme_skills.classList.add("active");
        skills_grid_theme.classList.add("active");
      };
      progress_theme_skills.onclick = function () {
        grid_theme_skills.classList.remove("active");
        skills_grid_theme.classList.remove("active");
        progress_theme_skills.classList.add("active");
        skills_progress_theme.classList.add("active");
      };
      for (const skill of Object.keys(skillsObjcets)) {
        // ########################################################################################################
        // ################################################ Start Grid Theme ######################################
        // ########################################################################################################
        // Create Elements
        // ---- Skill Div
        let skill_div = document.createElement("div");
        skill_div.className = "skill";
        // ---- Icon Skill Div
        let iconSkill_div = document.createElement("div");
        iconSkill_div.className = "iconSkill";
        iconSkill_div.style.setProperty(
          "--clr",
          skillsObjcets[skill].color_icon
        );
        // ---- Icon Skill Div -> {i} Element
        let iconSkill_i = document.createElement("i");
        iconSkill_i.className = skillsObjcets[skill].icon_class;
        // ---- Skill Div -> Text Div
        let skill_div_text = document.createElement("div");
        skill_div_text.className = "text";
        // ---- Skill Div -> Text Div -> H3
        let skill_div_text_h3 = document.createElement("h3");
        skill_div_text_h3.className = "heading_text";
        skill_div_text_h3.textContent = skillsObjcets[skill].skill_name;
        // Appending Elements
        skill_div.append(iconSkill_div);
        iconSkill_div.append(iconSkill_i);
        skill_div.append(skill_div_text);
        skill_div_text.append(skill_div_text_h3);
        (_a = document.querySelector(".skills_grid_theme")) === null ||
        _a === void 0
          ? void 0
          : _a.append(skill_div);
        // ########################################################################################################
        // ################################################## End Grid Theme ######################################
        // ########################################################################################################
        // ########################################################################################################
        // ################################################ Start Progess Theme ###################################
        // ########################################################################################################
        // Create Elements
        // ---- Skill Progress Div
        let skill_progress_div = document.createElement("div");
        skill_progress_div.className = "skill_progress";
        let lable_skill = document.createElement("div");
        lable_skill.className = "lable_skill";
        let lable_skill_text = document.createElement("div");
        lable_skill_text.className = "text";
        let lable_skill_iconSkill = document.createElement("div");
        lable_skill_iconSkill.className = "iconSkill";
        lable_skill_iconSkill.style.setProperty(
          "--clr",
          skillsObjcets[skill].color_icon
        );
        let lable_skill_iconSkill_i = document.createElement("i");
        lable_skill_iconSkill_i.className = skillsObjcets[skill].icon_class;
        let lable_skill_heading_text_h3 = document.createElement("h3");
        lable_skill_heading_text_h3.className = "heading_text";
        lable_skill_heading_text_h3.textContent =
          skillsObjcets[skill].skill_name;
        let lable_skill_progNum = document.createElement("div");
        lable_skill_progNum.className = "progNum";
        lable_skill_progNum.textContent = skillsObjcets[skill].progress + "%";
        let skill_div_prog = document.createElement("div");
        skill_div_prog.className = "prog";
        let skill_div_prog_value = document.createElement("span");
        skill_div_prog_value.style.display = "block";
        skill_div_prog_value.style.height = "100%";
        skill_div_prog_value.style.width = skillsObjcets[skill].progress + "%";
        //######### color progress ###############
        skill_div_prog_value.style.backgroundColor = "var(--dif_color)";
        //########################
        skill_progress_div.append(lable_skill);
        lable_skill.append(lable_skill_text);
        lable_skill_text.append(lable_skill_iconSkill);
        lable_skill_iconSkill.append(lable_skill_iconSkill_i);
        lable_skill_text.append(lable_skill_heading_text_h3);
        lable_skill.append(lable_skill_progNum);
        lable_skill_text.append(lable_skill_heading_text_h3);
        skill_progress_div.append(skill_div_prog);
        skill_div_prog.append(skill_div_prog_value);
        (_b = document.querySelector(".skills_progress_theme")) === null ||
        _b === void 0
          ? void 0
          : _b.append(skill_progress_div);
        // ########################################################################################################
        // ################################################ End Progess Theme #####################################
        // ########################################################################################################
      }
    }
  };
}
getSkillsInPage();
// End My Skills

// Start Portfolio Section

// Import The Elements
let side_left = document.querySelector(".side_left .content");
let info_projectName = document.querySelector(".info .projectName");
let info_dateTime = document.querySelector(".info .dateTime");
let buttonViewPort = document.querySelector(".infoAndView a");
let slider_img = document.querySelector(".slider-container img");


getGithubRepos();

function getGithubRepos() {
  // Get The Request Github api
  let myRequst = new XMLHttpRequest();
  myRequst.open("GET", "https://api.github.com/users/amr4409/repos");
  myRequst.send();

  myRequst.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Make Json Object To Javascript Object
      let reposObject = JSON.parse(this.responseText);
      // Get The Repos Length
      let reposCount = reposObject.length;

      for (let i = 0; i < reposCount; i++) {
        // Create The Article Elements And The Pragraphs
        let theArticle = document.createElement("article");
        let theArticle_p = document.createElement("p");

        theArticle_p.textContent = reposObject[i].name;

        theArticle.appendChild(theArticle_p);
        side_left.appendChild(theArticle);

        theArticle.onclick = function () {
          info_projectName.textContent = reposObject[i].name;
          info_dateTime.textContent = reposObject[i].created_at.split("T")[0];

          slider_img.setAttribute(
            "src",
            `https://raw.githubusercontent.com/amr4409/${reposObject[i].name}/${reposObject[i].default_branch}/design/desktop-preview.jpg`
          );

          buttonViewPort.setAttribute(
            "href",
            `https://amr4409.github.io/${reposObject[i].name}/`
          );
        };

        if (reposObject[i].name === "Amr-Khaled-SV") {
          theArticle.remove()
        }

          let articles = Array.from(
            document.querySelectorAll(".side_left .content article")
          );
          info_projectName.innerHTML = reposObject[0].name;
          info_dateTime.textContent = reposObject[0].created_at.split("T")[0];
          slider_img.setAttribute(
            "src",
            `https://raw.githubusercontent.com/amr4409/${reposObject[0].name}/${reposObject[0].default_branch}/design/desktop-preview.jpg`
          );
          buttonViewPort.setAttribute(
            "href",
            `https://amr4409.github.io/${reposObject[0].name}/`
          );
          articles[0].classList.add("active");
          articles.forEach((ele) => {
            ele.addEventListener("click", () => {
              articles.forEach((ele) => {
                ele.classList.remove("active");
              });
              ele.classList.add("active");
            });
          });
      }
    }
  };
}

// End Portfolio Section

// Start Footer Section

let date = new Date();
let theDateFooter = document.getElementById("theDateFooter");


theDateFooter.append(`${date.getFullYear()}`);

// End Footer Section
