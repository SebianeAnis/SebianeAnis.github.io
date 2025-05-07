document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const toggleBtn = document.getElementById("themeToggle");
  
    // Charger le thème depuis localStorage
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
    }
  
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");
      localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
    });
  });