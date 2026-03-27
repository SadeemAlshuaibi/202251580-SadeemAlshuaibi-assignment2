// ── Year ──────────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

// ── Theme Toggle (localStorage) ───────────────────────
const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);

function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light");
        toggle.textContent = "🌙 Dark Mode";
    } else {
        document.body.classList.remove("light");
        toggle.textContent = "☀️ Light Mode";
    }
}

toggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});

// ── Live Project Search ────────────────────────────────
const searchInput = document.getElementById("projectSearch");
const clearBtn = document.getElementById("clearSearch");
const cards = document.querySelectorAll(".card[data-tags]");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", filterProjects);

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterProjects();
    searchInput.focus();
});

function filterProjects() {
    const q = searchInput.value.trim().toLowerCase();
    clearBtn.hidden = q === "";

    let visible = 0;

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const desc = card.querySelector("p").textContent.toLowerCase();
        const tags = card.dataset.tags || "";
        const match = title.includes(q) || desc.includes(q) || tags.includes(q);

        card.hidden = !match;
        if (match) visible++;
    });

    noResults.hidden = visible > 0;
}

// ── Daily Motivation ───────────────────────────────────
const quotes = [
    "Every expert was once a beginner. Keep learning. 🌱",
    "Small steps every day lead to big results over time. 🚀",
    "You don't have to be perfect to make progress. 💪",
    "Believe in your ability to figure things out. 🧠",
    "Consistency beats talent when talent doesn't show up. ⭐",
    "Your future self will thank you for the work you do today. 🌟",
    "Challenges are just opportunities in disguise. 🔑",
    "One line of code at a time — that's how great software is built. 💻",
    "The best time to start was yesterday. The next best time is now. ⏳",
    "Stay curious. Stay humble. Keep building. 🛠️",
    "Every bug you fix makes you a better developer. ✅",
    "Dream big, start small, act now. 🎯"
];

let lastIndex = -1;

const factText = document.getElementById("factText");
const newFactBtn = document.getElementById("newFactBtn");

function showQuote() {
    let index;

    do {
        index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex && quotes.length > 1);

    lastIndex = index;
    factText.textContent = quotes[index];

    factText.style.animation = "none";
    factText.offsetHeight;
    factText.style.animation = "fadeIn .4s ease";
}

showQuote();
newFactBtn.addEventListener("click", showQuote);

// ── Contact Form Validation ────────────────────────────
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const msgInput = document.getElementById("msgInput");
const formMsg = document.getElementById("formMessage");

[nameInput, emailInput, msgInput].forEach(field => {
    field.addEventListener("input", () => clearErr(field));
});

nameInput.addEventListener("blur", () => validateName(true));
emailInput.addEventListener("blur", () => validateEmail(true));
msgInput.addEventListener("blur", () => validateMsg(true));

form.addEventListener("submit", e => {
    e.preventDefault();

    const ok = validateName(true) && validateEmail(true) && validateMsg(true);
    if (!ok) return;

    formMsg.hidden = false;
    form.reset();

    setTimeout(() => {
        formMsg.hidden = true;
    }, 5000);
});

function validateName(show) {
    const v = nameInput.value.trim();

    if (!v) {
        if (show) showErr(nameInput, "nameError", "Name is required.");
        return false;
    }

    if (v.length < 2) {
        if (show) showErr(nameInput, "nameError", "At least 2 characters.");
        return false;
    }

    clearErr(nameInput);
    return true;
}

function validateEmail(show) {
    const v = emailInput.value.trim();

    if (!v) {
        if (show) showErr(emailInput, "emailError", "Email is required.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        if (show) showErr(emailInput, "emailError", "Enter a valid email address.");
        return false;
    }

    clearErr(emailInput);
    return true;
}

function validateMsg(show) {
    const v = msgInput.value.trim();

    if (!v) {
        if (show) showErr(msgInput, "msgError", "Message is required.");
        return false;
    }

    if (v.length < 5) {
        if (show) showErr(msgInput, "msgError", "At least 5 characters.");
        return false;
    }

    clearErr(msgInput);
    return true;
}

function showErr(field, errId, msg) {
    field.classList.add("invalid");
    document.getElementById(errId).textContent = msg;
}

function clearErr(field) {
    field.classList.remove("invalid");
    const errId = field.id.replace("Input", "Error");
    const el = document.getElementById(errId);
    if (el) el.textContent = "";
}

// ── Scroll Reveal ──────────────────────────────────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));