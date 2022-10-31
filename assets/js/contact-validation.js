//! ================================
//?  Form Email Validation Function 
//! ================================
let regexPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let contactEmail = document.getElementById("email");
let formMessage = document.querySelector(".form-message");
let submitBtn = document.querySelector(".submit-form");

contactEmail.addEventListener("keyup", ()=>{
    if(!regexPattern.test(contactEmail.value)) {
        contactEmail.className = "invalid";
        formMessage.style.display = 'flex';
        formMessage.innerHTML = `
        <i class="bx bxs-error"></i>
        Invalid Email
        `;
    }else {
        contactEmail.className = "valid";
        formMessage.style.display = 'none';
        submitBtn.removeAttribute("disabled");
        submitBtn.addEventListener("onsubmit", ()=>{
            formMessage.innerHTML = `
                <i class='bx bx-mail-send'></i>
                Thanks For Messaging Us
            `;
        })
    }
})