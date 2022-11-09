const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});

const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      var input_text = document.querySelector('#input_text');
      var input_password = document.querySelector("#input_password");
      var error_message = document.querySelector("error_message");

      $("submit").submit(function (e) {
        e.preventDefault();

        if(input_text.value.length  < 1) {
            error_message.style.display = "inline-block";
        }
      })