let switchMode = document.querySelector(".theme-btn");
switchMode.onclick = function () {
   let theme = document.getElementById("theme");

   if (theme.getAttribute("href") == "./pages/style.css") {
      theme.href = "./pages/dark-mode.css";
   } else {
      theme.href = "./pages/style.css";
   }
}