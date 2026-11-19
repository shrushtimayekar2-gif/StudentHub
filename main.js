
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const currentYear = document.getElementById("currentYear");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            const isOpen =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", String(!isOpen));
            navLinks.classList.toggle("active", !isOpen);
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    if (welcomeMessage) {
        welcomeMessage.textContent =
            "Explore internships, discover opportunities, and build your future.";
    }

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
