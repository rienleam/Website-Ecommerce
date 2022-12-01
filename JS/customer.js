let list_phones =JSON.parse(localStorage.getItem("products"));

let dom_phones_container = document.querySelector(".main-right");

let dom_searchinput = document.querySelector("#search");
dom_searchinput.addEventListener("keyup", searchPhone);

let phonetodetails = [];

function createPhoneList() {

    document.querySelector(".display-phonelist").remove();

    dom_phones_display = document.createElement("div");
    dom_phones_display.className = "display-phonelist";

    dom_phones_container.appendChild(dom_phones_display);

    for (let index = 0; index < list_phones.length; index++) {
        let phone = list_phones[index];

        let to_details = document.createElement("a");
        to_details.className = "to-details";
        to_details.dataset.index = index;
        to_details.href = "detail.html";
        to_details.addEventListener("click", onClick);
        dom_phones_container.appendChild(to_details);
        
        let each_phone = document.createElement("div");
        each_phone.className = "each-phone";
        to_details.appendChild(each_phone);

        let phone_link = document.createElement("a");
        phone_link.id = "link-pic";
        each_phone.appendChild(phone_link);

        let phone_image = document.createElement("img");
        phone_image.id = "photo";
        phone_image.src = phone.photoimage;
        phone_link.appendChild(phone_image);

        let phone_info = document.createElement("div");
        phone_info.className = "phone-info";
        each_phone.appendChild(phone_info);

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

        let btn_link = document.createElement("a");
        btn_link.id = "link-btn";
        phone_info.appendChild(btn_link);

        let button_buy = document.createElement("button");
        button_buy.id = "buynow";
        button_buy.textContent = "DETAILS";
        btn_link.appendChild(button_buy);
        
    }

}
function saveToDetails(index) {

    phonetodetails.push(list_phones[index])
    localStorage.setItem("phonetodetails", JSON.stringify(phonetodetails));
    console.log(phonetodetails);

}

function onClick(event) {

    // let index = event.target.dataset.index;
    // console.log(event);

    let index = event.target.parentElement.parentElement.dataset.index
    console.log(index);
    saveToDetails(index);
    
}

function searchPhone() {
    let allphones = document.querySelectorAll(".each-phone");
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


createPhoneList();
