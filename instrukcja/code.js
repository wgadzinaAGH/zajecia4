function pustoTu(words) {
  if (words.length > 0) {
    return true;
  } else {
    return false;
  }
}

function bialeZnaki(string) {
  return /[\s\t\r\n]{1,}/.test(string);
}

function poprawnyAdres(adres) {
  let email_form = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
  if (email_form.test(adres)) {
    return true;
  } else {
    // alert("Adres email jest niepoprawny");
    return false;
  }
}

function walidujNapis(string, alertText) {
  let nameFilled = pustoTu(string);
  let noWhiteSigns = bialeZnaki(string);

  if (nameFilled == true && noWhiteSigns == false) {
    return true;
  } else {
    alert(alertText);
    return false;
  }
}

function walidacjaFocus(obiekt, wiadomosc) {
  let str = obiekt.value;
  let errorField = "blad_" + obiekt.name;

  if (bialeZnaki(str)) {
    document.getElementById(errorField).innerHTML = wiadomosc;
    obiekt.focus();
    return false;
  } else {
    document.getElementById(errorField).innerHTML = "";
    return true;
  }
}

function walidacjaEmailFocus(obiekt, wiadomosc) {
  let str = obiekt.value;
  let errorField = "blad_" + obiekt.name;

  if (poprawnyAdres(str)) {
    document.getElementById(errorField).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorField).innerHTML = wiadomosc;
    obiekt.focus();
    return false;
  }
}

function walidacjaAllFocus(object, message, functionType) {
  functionType(object, message);
}

function weryfikacja() {
  walidacjaAllFocus(
    document.forms["user_data"]["imie"],
    "Podaj swoje imię!",
    walidacjaFocus
  );

  walidacjaAllFocus(
    document.forms["user_data"]["email"],
    "Podaj swój adres email!",
    walidacjaEmailFocus
  );

  walidacjaAllFocus(
    document.forms["user_data"]["kod"],
    "Podaj swój kod pocztowy!",
    walidacjaFocus
  );

  walidacjaAllFocus(
    document.forms["user_data"]["wiadomosc"],
    "Dodaj wiadomość!",
    walidacjaFocus
  );
}

function pokazElement(element) {
  document.getElementById(element).style.visibility = "visible";
}

function ukryjElement(element) {
  document.getElementById(element).style.visibility = "hidden";
}

function kodPodstOnly() {
  let wykszValue = document.getElementById("wyksztalcenie_p");

  if (wykszValue.checked) {
    pokazElement("KodPocztowy");
  } else {
    ukryjElement("KodPocztowy");
  }
}

function licznikWierszy(i, e) {
  if (e) {
    if (i % 2 === 1) {
      e.style.backgroundColor = "red";
    }
    let nextRow = e.nextElementSibling;
    licznikWierszy(++i, nextRow);
  }
}

window.onload = function () {
  const firstRow = document.querySelector("tbody tr");
  licznikWierszy(0, firstRow);
};

function nastepnyWezel(e) {
  while (e && e.nodeType != 1) {
    e = e.nextSibling;
  }
  return e;
}

function poprzedniWezel(e) {
  while (e && e.nodeType != 1) {
    e = e.previousSibling;
  }
  return e;
}

function zamienWezly(b) {
  let tab = poprzedniWezel(b.closest("tr").previousSibling);
  let tBody = nastepnyWezel(b.closest("tbody"));
  let lastNode = poprzedniWezel(tBody.lastChild);
  tBody.removeChild(lastNode);
  let firstNode = nastepnyWezel(tBody.firstChild);
  tBody.insertBefore(lastNode, firstNode);
}

function licznik(textarea, span, limit) {
  let currentLength = textarea.value.length;
  let remaining = limit - currentLength;

  span.textContent = remaining;

  if (remaining < 0) {
    span.style.color = "red";
    document.getElementById("blad_wiadomosc").textContent =
      "Przekroczono limit znaków!";
  } else {
    span.style.color = "black";
    document.getElementById("blad_wiadomosc").textContent = ""; // Usuwamy błąd, jeśli limit nie został przekroczony
  }
}
