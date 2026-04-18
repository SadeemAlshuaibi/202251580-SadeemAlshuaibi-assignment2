document.getElementById("year").textContent = new Date().getFullYear();

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

const visitorNameInput = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const visitorGreeting = document.getElementById("visitorGreeting");

function loadVisitorName() {
    const savedName = localStorage.getItem("visitorName");
    if (savedName) {
        visitorGreeting.textContent = `Welcome back, ${savedName}!`;
        visitorNameInput.value = savedName;
    } else {
        visitorGreeting.textContent = "Enter your name for a personalized greeting.";
    }
}

saveNameBtn.addEventListener("click", () => {
    const name = visitorNameInput.value.trim();

    if (name.length < 2) {
        visitorGreeting.textContent = "Please enter a valid name with at least 2 characters.";
        return;
    }

    localStorage.setItem("visitorName", name);
    visitorGreeting.textContent = `Nice to meet you, ${name}! Your name has been saved.`;
});

loadVisitorName();


// Time on Site Counter
const timeCounter = document.getElementById("timeCounter");
let secondsOnSite = 0;

function updateTimer() {
    secondsOnSite++;

    const minutes = Math.floor(secondsOnSite / 60);
    const seconds = secondsOnSite % 60;

    if (minutes > 0) {
        timeCounter.textContent = `${minutes} minute(s) ${seconds} second(s)`;
    } else {
        timeCounter.textContent = `${seconds} second(s)`;
    }
}

setInterval(updateTimer, 1000);

// Project search,filter and sort

const searchInput = document.getElementById("projectSearch");
const clearBtn = document.getElementById("clearSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortProjects = document.getElementById("sortProjects");
const projectsGrid = document.getElementById("projectsGrid");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", updateProjects);
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    updateProjects();
    searchInput.focus();
});
categoryFilter.addEventListener("change", updateProjects);
sortProjects.addEventListener("change", updateProjects);

function updateProjects() {
    const q = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const sortValue = sortProjects.value;

    clearBtn.hidden = q === "";

    let cards = Array.from(document.querySelectorAll(".project-card"));

    cards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const tags = (card.dataset.tags || "").toLowerCase();
        const text = card.querySelector("p").textContent.toLowerCase();
        const categories = (card.dataset.category || "").toLowerCase();

        const matchesSearch =
            q === "" ||
            title.includes(q) ||
            tags.includes(q) ||
            text.includes(q);

        const matchesCategory =
            category === "all" ||
            categories.includes(category);

        card.hidden = !(matchesSearch && matchesCategory);
    });

    let visibleCards = cards.filter(card => !card.hidden);

    visibleCards.sort((a, b) => {
        const levelA = Number(a.dataset.level);
        const levelB = Number(b.dataset.level);

        switch (sortValue) {
            case "level-asc":
                return levelA - levelB;
            case "level-desc":
                return levelB - levelA;
            default:
                return 0;
        }
    });

    visibleCards.forEach(card => projectsGrid.appendChild(card));

    noResults.hidden = visibleCards.length > 0;
}

updateProjects();

// API integration

const githubRepos = document.getElementById("githubRepos");
const apiStatus = document.getElementById("apiStatus");
const githubUsername = "SadeemAlshuaibi";

async function loadGitHubRepos() {
    apiStatus.textContent = "Loading GitHub repositories...";
    githubRepos.innerHTML = "";

    try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const repos = await response.json();

        if (!Array.isArray(repos) || repos.length === 0) {
            apiStatus.textContent = "No repositories were found on GitHub.";
            return;
        }

        apiStatus.textContent = "GitHub repositories loaded successfully.";

        repos.forEach(repo => {
            const article = document.createElement("article");
            article.className = "card";

            article.innerHTML = `
                <div class="project-header">
                    <div>
                        <h3>${repo.name}</h3>
                        <div class="tag-row">
                            <span class="tag">${repo.language || "No language"}</span>
                            <span class="tag">★ ${repo.stargazers_count}</span>
                        </div>
                    </div>
                </div>
                <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View Repository</a>
            `;

            githubRepos.appendChild(article);
        });
    } catch (error) {
        apiStatus.textContent = "Unable to load GitHub repositories right now. Please try again later.";
        console.error("GitHub API Error:", error);
    }
}

loadGitHubRepos();

// Daily motivation

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
    "Stay curious. Stay humble. Keep building. 🛠️"
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


// Contact

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

    const isValid =
        validateName(true) &&
        validateEmail(true) &&
        validateMsg(true);

    if (!isValid) return;

    formMsg.hidden = false;
    form.reset();

    setTimeout(() => {
        formMsg.hidden = true;
    }, 5000);
});

function validateName(show) {
    const value = nameInput.value.trim();

    if (!value) {
        if (show) showErr(nameInput, "nameError", "Name is required.");
        return false;
    }

    if (value.length < 2) {
        if (show) showErr(nameInput, "nameError", "Name must be at least 2 characters.");
        return false;
    }

    clearErr(nameInput);
    return true;
}

function validateEmail(show) {
    const value = emailInput.value.trim();

    if (!value) {
        if (show) showErr(emailInput, "emailError", "Email is required.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        if (show) showErr(emailInput, "emailError", "Enter a valid email address.");
        return false;
    }

    clearErr(emailInput);
    return true;
}

function validateMsg(show) {
    const value = msgInput.value.trim();

    if (!value) {
        if (show) showErr(msgInput, "msgError", "Message is required.");
        return false;
    }

    if (value.length < 10) {
        if (show) showErr(msgInput, "msgError", "Message must be at least 10 characters.");
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
    const errorElement = document.getElementById(errId);
    if (errorElement) {
        errorElement.textContent = "";
    }
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));