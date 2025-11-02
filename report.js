document.getElementsByClassName("btn")[0].addEventListener("click",redirectToHome);

function redirectToHome(){
    const form = document.getElementById("reportForm");
    if (!form) return;

    // get all input and textarea fields inside the form
    const inputs = form.querySelectorAll("input, textarea");

    // check if any field is empty
    for (let field of inputs) {
        if (field.value.trim() === "") {
            alert("⚠️ Please fill out all fields before submitting!");
            return; // stop function here
        }
    }

    // if all fields are filled
    alert("✅ Thank you for reporting! Our team will reach out soon.");
    window.location.href = "index.html"; // redirect to homepage
}
