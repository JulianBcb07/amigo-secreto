// global variables
let arrayFriends = [];

listElement = document.getElementById("listaAmigos");
console.log(listElement);

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
  }
};

const friendList = () => {
  for (const friend of arrayFriends) {
    console.log(friend);
    liElement = document.createElement("li");
    liElement.innerText = friend;
    listElement.append(liElement);
  }
};
