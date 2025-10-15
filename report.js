document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reportForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("✅ Thank you for reporting! Our team will reach out soon.");
            window.location.href = "index.html"; // redirect to homepage
        });
    }
});