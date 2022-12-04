let listphone =JSON.parse(localStorage.getItem("products"));

let dom_phones_container = document.querySelector(".main-content");

let dom_searchinput = document.querySelector("#search");
dom_searchinput.addEventListener("keyup", searchPhone);

let dom_sortby = document.querySelector("#sort");
dom_sortby.addEventListener("click", sortbyPhone);

let phonetodetails = [];

function createPhoneList() {

    dom_phones_display = document.querySelector(".display-phonelist");

    dom_phones_container.appendChild(dom_phones_display);

    for (let index = 0; index < listphone.length; index++) {
        let phone = listphone[index];

        let to_details = document.createElement("a");
        to_details.className = "to-details";
        to_details.href = "detail.html";
        to_details.dataset.index = index;
        to_details.addEventListener("click", onClick);
        dom_phones_container.appendChild(to_details);

        let phone_link = document.createElement("a");
        phone_link.id = "link-pic";
        to_details.appendChild(phone_link);

        let phone_image = document.createElement("img");
        phone_image.id = "photo";
        phone_image.src = phone.photoimage;
        phone_link.appendChild(phone_image);

        let phone_info = document.createElement("div");
        phone_info.className = "phone-info";
        to_details.appendChild(phone_info);

        let phone_brand = document.createElement("h2");
        phone_brand.id = "brand";
        phone_brand.textContent = phone.brandname ;
        phone_info.appendChild(phone_brand);

        let phone_model = document.createElement("h4");
        phone_model.id = "model";
        phone_model.textContent = phone.model;
        phone_info.appendChild(phone_model);

        let phone_price = document.createElement("h3");
        phone_price.id = "price";
        phone_price.textContent = "$" + phone.price;
        phone_info.appendChild(phone_price);

        let phone_rate = document.createElement("div");
        phone_rate.className = "rate";
        phone_info.appendChild(phone_rate);

        let star_image = document.createElement("img");
        star_image.id = "star";
        star_image.src = "../Image/rateStar.png";
        phone_rate.appendChild(star_image);

        let total_rate = document.createElement("p");
        total_rate.id = "total-rate";
        total_rate.textContent = "456,906";
        phone_rate.appendChild(total_rate);
    }
}


function onClick(event) {

    let index = event.target.parentElement.parentElement.dataset.index;
    phonetodetails.push(listphone[index]);
    localStorage.setItem("phonetodetails", JSON.stringify(phonetodetails));

}

function searchPhone() {

    let allphones = document.querySelectorAll(".to-details");
    for (let i = 0; i < allphones.length; i++) {

        let phone = allphones[i];
        let inputText = dom_searchinput.value.toLocaleLowerCase();
        let name = phone.lastChild.firstChild.textContent.toLocaleLowerCase();

        if (name.includes(inputText)) {
            phone.style.display = "block";
            // console.log(name);
            // console.log(inputText);
        }
        else {
            phone.style.display = "none";
        }
    }
}
function sortbyPhone() {

    let allphones = document.querySelectorAll(".to-details");
    for (let i = 0; i < allphones.length; i++) {

        let phone = allphones[i];
        let inputText = dom_sortby.value.toLocaleLowerCase();
        let name = phone.lastChild.firstChild.textContent.toLocaleLowerCase();

        if (name.includes(inputText)) {
            phone.style.display = "block";
            // console.log(name);
            // console.log(inputText);
        }
        else {
            phone.style.display = "none";
        }
    }
}

createPhoneList();
