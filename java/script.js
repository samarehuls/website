document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navigate-link");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
