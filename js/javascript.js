function clearDisplay() {
    document.getElementsById("display")[0].value = "";
  }

  function deleteLastCharacter() {
    var display = document.getElementsById("display")[0];
    display.value = display.value.slice(0, -1);
  }

  function appendCharacter(character) {
    document.getElementsById("display")[0].value += character;
  }

  function calculate() {
    var display = document.getElementsById("display")[0];
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }