// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSignup = document.querySelector(".login-signup");

const userElem = document.querySelector(".user");
const usernameElem = document.querySelector(".user-name");


const listUsers = [
  {
    id: "01",
    email: "ks.lavrova55@gmail.com",
    password: "123456",
    displayName: "KseniaJS"
  },
  {
    id: "02",
    email: "ksenia.lavrova@yahoo.de",
    password: "123456789",
    displayName: "KseniaYahoo"
  }
];

const setUsers = {
  user: null, 
  //functions
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert("User with this email address not found")
    }
  },
  logOut() {
    console.log("logOut")
  },
  signUp(email, password, handler) {
    if (!this.getUser(email)) {
      const user = {email, password, displayName: email.split("@")[0]};
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
  } else {
    alert("User with this email address already exists")
    }
  },
  getUser(email) {
    return listUsers.find((item) => item.email === email)
    },
    authorizedUser(user){
      this.user = user;
    }
  };

  const toggleAuthDom = () => {
    const user = setUsers.user;
    console.log("user: ", user);

    if (user) {
      loginElem.style.display = "none";
      userElem.style.display = "";
      usernameElem.textContent = user.displayName;
    } else {
      loginElem.style.display = "";
      userElem.style.display = "none";
    }
  }

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
});

loginSignup.addEventListener("click", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
});

toggleAuthDom();






