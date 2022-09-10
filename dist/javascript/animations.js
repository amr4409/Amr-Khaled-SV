let tl = gsap.timeline({ defaults: { ease: "none" } });

let loader = document.querySelector(".loader");

window.onload = function () {
  loader.remove();
  gsap.registerPlugin(ScrollTrigger);
  // Start Landing Page Animation

  tl.fromTo(
    ".logo",
    { opacity: 0, x: "-30px" },
    { duration: 0.5, opacity: "1", x: "0px" }
  );
  tl.fromTo(
    ".list_nav li",
    { opacity: 0, y: 30 },
    { duration: 0.1, opacity: "1", y: 0, stagger: 0.2 }
  );
  tl.from("polygon , path , circle", {
    opacity: 0,
    stagger: 0.2,
  });
  tl.fromTo(".birgerListIcon", { opacity: 0 }, { duration: 0.5, opacity: "1" });
  tl.fromTo(
    ".landing_text_h2",
    { opacity: 0, y: "-50px" },
    { duration: 0.5, y: "0px", opacity: "1" }
  );
  tl.fromTo(
    ".media .media_icon",
    { opacity: 0, y: "50px" },
    { duration: 0.5, opacity: "1", y: "0px", stagger: 0.2 }
  );
  document.querySelector(".logo").onclick = function () {
    tl.fromTo(
      "ul .main_colors",
      { opacity: 0, y: "10px" },
      { duration: 0.1, opacity: "1", y: "0px", stagger: 0.1 }
    );
  };
  document.querySelector(".birgerListIcon i").onclick = function () {
    tl.fromTo(
      ".list_nav li",
      { opacity: 0 },
      { duration: 0.1, opacity: "1", stagger: 0.2 }
    );
  };

  // End Landing Page Animation
  // Start About Section Animation

  gsap.from(".about_text_box", {
    scrollTrigger: {
      trigger: ".about",
      toggleActions: "restart none none none",
      start: "top bottom",
      end: "center center",
      scrub: true,
    },
    width: "0px",
    padding: "30px 0px",
    duration: 1,
  });
  gsap.from(".about .container .image", {
    scrollTrigger: {
      trigger: ".about",
      toggleActions: "restart none none none",
      start: "top bottom",
      end: "center center",
      scrub: true,
    },
    y: 200,
    opacity: 0,
    duration: 1,
  });

  // End About Section Animation
  // Start My Skills Section Animation

  gsap.from(".prog span", {
    scrollTrigger: {
      trigger: ".skills_progress_theme",
      toggleActions: "restart none none none",
      start: "center bottom",
    },
    width: "0px",
    duration: 1,
  });

  // End My Skills Section Animation

  // Start Portfolio Section Animation
  gsap.from(".content article", {
    scrollTrigger: {
      trigger: ".portfolio",
      toggleActions: "restart none none none",
      start: "center bottom",
    },
    x: "20px",
    opacity: 0,
    stagger: 0.2,
    duration: 1,
  });
  gsap.from(".infoAndView .info p.projectName", {
    scrollTrigger: {
      trigger: ".portfolio",
      toggleActions: "restart none none none",
      start: "center bottom",
    },
    y: "-20px",
    opacity: 0,
    delay: 1.1,
    duration: 1,
  });
  gsap.from(".infoAndView .info p.dateTime", {
    scrollTrigger: {
      trigger: ".portfolio",
      toggleActions: "restart none none none",
      start: "center bottom",
    },
    y: "20px",
    opacity: 0,
    delay: 1.2,
    duration: 1,
  });
  gsap.from(".infoAndView a", {
    scrollTrigger: {
      trigger: ".portfolio",
      toggleActions: "restart none none none",
      start: "center bottom",
    },
    scale: 0.5,
    opacity: 0,
    delay: 1.3,
    duration: 1,
  });
  // End Portfolio Section Animation

  // Start My Certificates
  gsap.from(".certificate", {
    scrollTrigger: {
      trigger: ".certificates",
      toggleActions: "restart none none none",
      start: "center bottom",
    },
    scale: 0.5,
    opacity: 0,
    stagger: 0.1,
  });
  // End My Certificates
};
