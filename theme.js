const storageKey = "zoro-theme";
const root = document.body;
const toggle = document.querySelector("[data-theme-toggle]");

const getPreferredTheme = () => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") {
        return saved;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = (theme) => {
    root.dataset.theme = theme;
};

applyTheme(getPreferredTheme());

if (toggle) {
    toggle.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        window.localStorage.setItem(storageKey, nextTheme);
    });
}
