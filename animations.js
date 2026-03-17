const animatedSelectors = [
    ".section-header",
    ".info-card",
    ".step-card",
    ".stack-item",
    ".price-card",
    ".contact-card",
    ".cta-shell",
    ".hero-copy",
    ".hero-panel",
    ".page-hero .narrow"
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
    const animatedElements = document.querySelectorAll(animatedSelectors.join(", "));

    animatedElements.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
    });

    animatedElements.forEach((element) => observer.observe(element));
}
