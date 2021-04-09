const login = document.getElementById("login-link");
const signup = document.getElementById("signup-link");

const signupModal = document.querySelector(".modal");
const loginModal = document.querySelector(".loginmodal");

const displaySignup = function (e) {
  signupModal.style.display = "block";
};

const displayLogin = function (e) {
  loginModal.style.display = "block";
};

login.addEventListener("click", displayLogin);
signup.addEventListener("click", displaySignup);

const closeBtn = document.getElementById("signup-span");
const closeLoginBtn = document.getElementById("login-span");

const closeSignUpModal = function (e) {
  signupModal.style.display = "none";
};

const closeLoginModal = function (e) {
  loginModal.style.display = "none";
};

closeBtn.addEventListener("click", closeSignUpModal);
closeLoginBtn.addEventListener("click", closeLoginModal);
