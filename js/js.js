var link = document.querySelector(".form-link");
var popup = document.querySelector(".form-offer");
var closedForm = document.querySelector(".close-link");
var navernoeName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");
var isStorageSupport = true;
var storage = "";

// Проверка на доступность локалстораджа
try {
  storage = localStorage.getItem("name")
} catch (err) {
  isStorageSupport = false;
}

// Обработчик кнопки «Напишите нам»
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
  popup.classList.add("form-animation");
  if (storage) {
    navernoeName.value = storageName;
    email.value = storageEmail;
    text.focus();
  } else {
    navernoeName.focus();
  }
});

// Обработчик крестика закрытия формы
closedForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
  popup.classList.remove("form-error")
});

// Проверка, что все поля формы не пустые и запись в локалсторадж
popup.addEventListener("submit", function (evt) {
  if (!navernoeName.value || !email.value || !text.value) {
    evt.preventDefault();
    // alert("Не все поля заполнены!");
    popup.classList.remove("form-animation");
    popup.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", navernoeName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

// Обработчик события ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("visually-hidden")) {
      evt.preventDefault();
      popup.classList.add("visually-hidden");
    }
  }
})
