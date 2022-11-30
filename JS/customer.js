let list_phones =JSON.parse(localStorage.getItem("products"));

let dom_phones_container = document.querySelector(".main-right");

let dom_searchinput = document.querySelector("#search");
dom_searchinput.addEventListener("keyup", searchPhone);

function createPhoneList() {

    document.querySelector(".display-phonelist").remove();

    dom_phones_display = document.createElement("div");
    dom_phones_display.className = "display-phonelist";

    dom_phones_container.appendChild(dom_phones_display);

    for (let index = 0; index < list_phones.length; index++) {
        let phone = list_phones[index];

        let each_phone = document.createElement("div");
        each_phone.className = "each-phone";
        dom_phones_display.appendChild(each_phone);

        let phone_image = document.createElement("img");
        phone_image.id = "photo";
        phone_image.src = phone.photoimage;
        each_phone.appendChild(phone_image);

        let phone_info = document.createElement("div");
        phone_info.className = "phone-info";
        each_phone.appendChild(phone_info);

        let phone_brand = document.createElement("h3");
        phone_brand.id = "brand";
        phone_brand.textContent = phone.brandname + ":  " + phone.storage + "G";
        phone_info.appendChild(phone_brand);

        let phone_model = document.createElement("h3");
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

        let button_buy = document.createElement("button");
        button_buy.id = "buynow";
        button_buy.textContent = "BUY NOW";
        phone_info.appendChild(button_buy);
        
    }

}
function searchPhone() {
    let allphones = document.querySelectorAll(".each-phone");
    for (let i = 0; i < allphones.length; i++) {
        let phone = allphones[i];
        let inputText = dom_searchinput.value.toLocaleLowerCase();
        let name = phone.lastChild.firstChild.textContent.toLocaleLowerCase();

        if (name.includes(inputText)) {
            phone.style.display = "block";
            console.log(name);
            console.log(inputText);
        }
        else {
            phone.style.display = "none";
        }
    }
}

createPhoneList();