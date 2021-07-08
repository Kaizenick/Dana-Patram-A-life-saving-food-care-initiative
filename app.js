const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");

//create element and render cafe
function renderCafe(doc) {
  let li = document.createElement("div");
  li.setAttribute("class", "form_detail");

  let name = document.createElement("div");
  name.setAttribute("class", "pad name_input");

  let address = document.createElement("div");
  address.setAttribute("class", "pad address_input");

  let date = document.createElement("div");
  date.setAttribute("class", "pad date_input");

  let expiry_date = document.createElement("div");
  expiry_date.setAttribute("class", "pad expirydate_input");

  let phone = document.createElement("div");
  phone.setAttribute("class", "pad phone_input");

  let food = document.createElement("div");
  food.setAttribute("class", "pad food_input");

  let quantity = document.createElement("div");
  quantity.setAttribute("class", "pad quantity_input");


  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);

  name.textContent = doc.data().name;
  address.textContent = doc.data().address;
  date.textContent = doc.data().date;
  expiry_date.textContent = doc.data().expiry_date;
  phone.textContent = doc.data().phone;
  food.textContent = doc.data().food;
  quantity.textContent = doc.data().quantity;

  cross.textContent = "x";

  name.textContent = 'Name: ' + name.textContent;
  address.textContent = 'Address: ' + address.textContent;
  date.textContent = 'Date and Time: ' + date.textContent;
  expiry_date.textContent = 'Date of Expiry: ' + expiry_date.textContent;
  phone.textContent = 'Contact: ' + phone.textContent;
  food.textContent = 'Food present: ' + food.textContent;
  quantity.textContent = 'Number of people who can be fed: ' + quantity.textContent;

  // name="Name: "+name;
  li.appendChild(name);
  li.appendChild(address);
  li.appendChild(date);
  li.appendChild(expiry_date);
  li.appendChild(phone);
  li.appendChild(food);
  li.appendChild(quantity);


  //li.appendChild(cross);

  cafeList.appendChild(li);

  //delete data
  cross.addEventListener("click", (event) => {
    event.stopPropagation();
    let id = event.target.parentElement.getAttribute("data-id");
    db.collection("cafes").doc(id).delete();
  });
}
//Getting the data
// db.collection("cafes").orderBy('name').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         renderCafe(doc);
//     });
// });

//adding the data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("cafes").add({
    name: form.name.value,
    address: form.address.value,
    date: form.date.value,
    expiry_date: form.expiry_date.value,
    phone: form.phone.value,
    food: form.food.value,
    quantity: form.quantity.value,


  });
  form.name.value = "";
  form.address.value = "";
  form.date.value = "";
  form.expiry_date.value = "";
  form.phone.value = "";
  form.food.value = "";
  form.quantity.value = "";

});

//real time listener
db.collection("cafes")
  .orderBy("date")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type == "added") {
        renderCafe(change.doc);
      } else if (change.type == "removed") {
        let li = cafeList.querySelector("[data-id=" + change.doc.id + "]")
        cafeList.removeChild(li);
      }
    });
  });
