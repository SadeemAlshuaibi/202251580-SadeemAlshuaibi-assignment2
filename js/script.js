const toggle = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

yearEl.textContent = new Date().getFullYear();

// Default dark
const savedTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme){
    if(theme === "light"){
        document.body.classList.add("light");
        toggle.textContent = "🌙 Dark Mode";
    }else{
        document.body.classList.remove("light");
        toggle.textContent = "☀️ Light Mode";
    }
}

applyTheme(savedTheme);

toggle.addEventListener("click",()=>{
    const isLight = document.body.classList.contains("light");
    const newTheme = isLight ? "dark" : "light";
    localStorage.setItem("theme",newTheme);
    applyTheme(newTheme);
});

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formMessage.textContent="Thanks!";
    form.reset();
});
