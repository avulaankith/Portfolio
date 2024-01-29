function clickName() {
    location.href = "/";
}

document.addEventListener("DOMContentLoaded", function () {
    var reveals = document.querySelectorAll(".reveal");

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in-right");
                    observer.unobserve(entry.target); // Stop observing the element after animation
                }
            });
        },
        {
            threshold: 0.1, // Adjust as needed
        }
    );

    reveals.forEach(function (reveal) {
        observer.observe(reveal);
    });
});

var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);
