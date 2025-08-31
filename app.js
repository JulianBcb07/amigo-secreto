// global variables
let arrayFriends = [];

listElement = document.getElementById("listaAmigos");
resultList = document.getElementById("resultado");
buttonSortear = document.getElementById("button-sortear");
console.log(listElement);
console.log(resultList);
console.log(buttonSortear);

// function called on HTML file
const agregarAmigo = () => {
  const friendValue = document.getElementById("amigo");
  if (friendValue.value === null || friendValue.value === "") {
    alert("Porfavor asegurese de no dejar el campo vacío");
  } else {
    console.log(friendValue.value);
    arrayFriends.push(friendValue.value);
    friendValue.value = "";
    console.log(arrayFriends);
    friendList();
  }
};

const friendList = () => {
  liElement = document.createElement("li");
  liElement.style.margin = "15px";
  listElement.style.fontSize = "1.5rem";
  liElement.innerText = arrayFriends[arrayFriends.length - 1];
  listElement.append(liElement);
};

// obtain the lenght of array

const sortearAmigo = () => {
  if (arrayFriends.length <= 0) {
    alert("No puede sortear con la lista vacía!");
  } else {
    sorteo = Math.floor(Math.random() * arrayFriends.length);
    liElement = document.createElement("li");
    liElement.style.margin = "15px";
    liElement.style.fontSize = "1.5rem";
    liElement.style.fontWeight = "600";
    liElement.innerText = `El amigo secreto es: ${arrayFriends[sorteo]}`;
    resultList.append(liElement);
    buttonSortear.setAttribute("disabled", "true");
    buttonSortear.style.background = "gray";
  }
};
