"strict";

const username = prompt("username");
const usernameInput = document.getElementById("myName");
const tarihInput = document.getElementById("myClock");

// usernameInput.insertAdjacentText("beforeend", username);
usernameInput.append(username);
// usernameInput.textContent = username;

let clock = function () {
  const tarih = new Date();

  let saat = tarih.getHours();
  let dak = tarih.getMinutes();
  let sny = tarih.getSeconds();

  let day = tarih.getDay();

  let haftaninGunu;
  if (day === 1) {
    haftaninGunu = "Pazartesi";
  }
  if (day === 2) {
    haftaninGunu = "Salı";
  }
  if (day === 3) {
    haftaninGunu = "Çarşamba";
  }
  if (day === 4) {
    haftaninGunu = "Perşembe";
  }
  if (day === 5) {
    haftaninGunu = "Cuma";
  }
  if (day === 6) {
    haftaninGunu = "Cumartesi";
  }
  if (day === 7) {
    haftaninGunu = "Pazar";
  }

  saat = saat < 10 ? "0" + saat : saat;
  dak = dak < 10 ? "0" + dak : dak;
  sny = sny < 10 ? "0" + sny : sny;

  tarihInput.innerText = `${saat}:${dak}:${sny} ${haftaninGunu}`;
};

clock();
setInterval(clock, 1000);
