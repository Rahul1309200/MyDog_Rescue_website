document.addEventListener("DOMContentLoaded", () => {
    const visitForm = document.getElementById('visitForm');
    const visitStatus = document.getElementById('formStatus');

    visitForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent real submission

        const name = visitForm.name.value;
        const date = visitForm.date.value;
        const time = visitForm.time.value;

        visitStatus.textContent = `Thank you ${name}! Your visit is booked on ${date} at ${time}.`;
        visitStatus.style.color = "green";

        visitForm.reset();
    });
});