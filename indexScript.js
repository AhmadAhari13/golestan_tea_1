//تابع برای مدیریت نمایش یا عدم نمایش هدر سایت در حالت موبایل
const headerHandler = (e) => {
  if (e.target.nextElementSibling.firstElementChild.style.display == "block") {
    e.target.nextElementSibling.firstElementChild.style.display = "";
  } else {
    e.target.nextElementSibling.firstElementChild.style.display = "block";
  }
};

export function setupCounter(element) {
  // const htm = document.querySelector("html");
  // const backToUp = document.querySelector(".back-to-up");
  // const bars = document.querySelector(".bars");
  // const headerBody = document.querySelector(".header-body");
  // const header = document.querySelector(".header");
  // const telegram = document.querySelector(".telegram");
  // const darkmode = document.querySelector(".darkmode");
  // const goDown = document.querySelectorAll(".go-down");
  // const goRight = document.querySelector(".go-right");
  // const goIn = document.querySelector(".go-in");
  // const a = document.querySelectorAll(".header div div nav ul li a");
  const htm = element[0];
  const backToUp = element[1];
  const bars = element[2];
  const headerBody = element[3];
  const header = element[4];
  const telegram = element[5];
  const darkmode = element[6];
  const goDown = element[7];
  const goRight = element[8];
  const goIn = element[9];
  const a = element[10];
  if (window.location.pathname == "/blog") {
    document.title = "وبلاگ گلستان - وب سایت رسمی شرکت گلستان | golestan";
  } else {
    document.title = " صفحه اصلی - وب سایت رسمی شرکت گلستان | golestan";
  }
  //در هنگام لود وبسایت تصویر و متن ایتدایی از بالا به پایین حرکت میکنند
  goDown.forEach((item) => item.classList.add("go-up"));
  // if(window.location.pathname != "/blog"){}

  //رویداد کلیک برای لینک های درون نوبار
  if (window.innerWidth < 1000) {
    a.forEach((item) => item.addEventListener("click", headerHandler));
  }

  // هنگام کلیک بر روی دکمه بازگشت به بالای صفحه
  backToUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });

  //رویداد اسکرول که هنگام اسکرول شدن وبسایت اجرا می شود
  window.addEventListener("scroll", () => {
    //مدیریت نمایش یا عدم نمایش دکمه بازگشت به بالا
    if (window.scrollY > 330) {
      backToUp.style.display = "block";
    } else {
      backToUp.style.display = "none";
    }

    if (window.location.pathname != "/blog") {
      //برای مدیریت حرکت از راست به چپ متن درون قسمت <معرفی گلستان> است
      if (goRight.getBoundingClientRect().top < window.innerHeight * (3 / 4)) {
        goRight.classList.add("go-left");
      }
      if (goIn.getBoundingClientRect().top < window.innerHeight) {
        goIn.classList.add("go-out");
      }
    }
  });

  //رویداد تغییر سایز که هنگام تغییر سایز مرورگر و جابه جای بین حالت موبایل و دستکتاپ رخ می دهد
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth < 1000) {
      a.forEach((item) => item.addEventListener("click", headerHandler));
    } else {
      a.forEach((item) => item.removeEventListener("click", headerHandler));
      a.forEach(
        (item) =>
          item.nextElementSibling &&
          (item.nextElementSibling.firstElementChild.style.display = "")
      );
    }
  });

  //رویداد کلیک برای دکه منو در حالت موبایل
  bars.addEventListener("click", (e) => {
    if (bars.classList.contains("text-3xl")) {
      bars.classList.remove("text-3xl");
      bars.classList.add("text-4xl");
      headerBody.classList.remove("hidden");
      headerBody.classList.add("flex");
      headerBody.classList.add("overflow-y-auto");
      header.classList.remove("h-[168.5px]");
      header.classList.remove("lg:h-[100.5px]");
      header.classList.add("max-h-screen");
    } else {
      bars.classList.add("text-3xl");
      bars.classList.remove("text-4xl");
      headerBody.classList.add("hidden");
      headerBody.classList.remove("flex");
      headerBody.classList.remove("overflow-y-auto");
      header.classList.add("h-[168.5px]");
      header.classList.add("lg:h-[100.5px]");
      header.classList.remove("max-h-screen");
    }
  });

  //مدیریت دکمه حالت darkmode
  darkmode.addEventListener("click", () => {
    if (darkmode.firstElementChild.classList.contains("moon")) {
      darkmode.firstElementChild.className = "fa-solid fa-sun";
      htm.classList.add("dark");
    } else {
      darkmode.firstElementChild.className = "fa-solid fa-moon moon";
      htm.classList.remove("dark");
    }
  });
}
