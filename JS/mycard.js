let list_phones =JSON.parse(localStorage.getItem("savecards"));

let dom_phones_container = document.querySelector(".main-content");

function createPhoneList() {

    dom_phones_display = document.querySelector(".display-phonelist");

    dom_phones_container.appendChild(dom_phones_display);

    for (let index = 0; index < list_phones.length; index++) {
        let phone = list_phones[index];

        let to_details = document.createElement("a");
        to_details.className = "to-details";
        to_details.href = "detail.html";
        to_details.dataset.index = index;
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

        let quantity = document.createElement("p");
        quantity.id = "quantity";
        quantity.textContent = "Quantity: " + phone.quantity;
        phone_info.appendChild(quantity);
        
    }
}
createPhoneList();