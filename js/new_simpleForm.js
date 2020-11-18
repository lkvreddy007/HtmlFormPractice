const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input',function(){
output.textContent = salary.value;
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$');
    if(emailRegex.test(email.value)){
        emailError.textContent = "";
    }
    else{
        emailError.textContent = "Email is incorrect";
    }
});

const phone = document.querySelector('#tel');
const phoneError = document.querySelector('.phone-error');
phone.addEventListener('input',function(){
    let phoneRegex = RegExp("^\\d{2} [1-9]\\d{9}$");
    if(phoneRegex.test(phone.value)){
        phoneError.textContent = "";
    }
    else{
        phoneError.textContent = "Phone Number is incorrect";
    }
});

const passwrd = document.querySelector('#pwd');
const passwrdError = document.querySelector('.pwd-error');
passwrd.addEventListener('input',function(){
    let pwdRegex = RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.*\\W\\w*\\W)(?!.*\\s).{8,}$")
    if(pwdRegex.test(passwrd.value)){
        passwrdError.textContent = "";
    }
    else{
        passwrdError.textContent = "Invalid Password";
    }
}); 