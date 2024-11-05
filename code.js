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

function weryfikacja() {
  let nameFilled = pustoTu(document.forms["user_data"]["imie"].value);
  let noWhiteSigns = bialeZnaki(document.forms["user_data"]["imie"].value);

  if (nameFilled == true && noWhiteSigns == false) {
    return true;
  } else {
    alert("Podaj swoje imię!");
    return false;
  }
}
