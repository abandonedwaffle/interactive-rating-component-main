let selectedRating = 0;








const buttons = document.querySelectorAll(".rating-button");

buttons.forEach(button => {
    button.addEventListener('click', function(){
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        selectedRating = this.textContent;
        submit.disabled = false;
    })
})


const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thankYouState");
const submit = document.querySelector(".submit");
const submittedRating = document.getElementById("submitted-rating");

submit.addEventListener("click", function() {
    mainContainer.style.display = "none";
    thankYouContainer.style.display = "unset";
    submittedRating.textContent = selectedRating;
});

