let list_phones =JSON.parse(localStorage.getItem("phonetodetails"));

let dom_allphones_list = document.querySelector(".list-phone-detail")

let dom_buy_dialog = document.querySelector(".whenbuy-dialog")

let savecards = [];

function hide() {
    dom_buy_dialog.style.display = "none";

}
function show() {
    dom_buy_dialog.style.display = "block";
}

let first_name = document.querySelector("#first-name")
let last_name = document.querySelector("#last-name");
let email = document.querySelector("#email");
let phone_num = document.querySelector("#phone-num");
let address = document.querySelector("#address");
let card = document.querySelector("#card");
let nameoncard = document.querySelector("#nameoncard");
let numbercard = document.querySelector("#numbercard");
let securitycode = document.querySelector("#securitycode");


function onCancel() {

    dom_buy_dialog.style.display = "none";

    let check_value = [first_name, last_name, email, phone_num, address, card, nameoncard, numbercard, securitycode];
    for (let input of check_value) {
        input.value = "";
        input.style.border = "2px solid gray";
    }
}
function buyyourPhone() {
    let checked_input = first_name.value && last_name.value && email.value && phone_num.value && address.value && card.value && nameoncard.value && numbercard.value && securitycode.value;
    let check_value = [first_name, last_name, email, phone_num, address, card, nameoncard, numbercard, securitycode];

    if (!(checked_input)) {
        for (let input of check_value) {
            if (!(input.value)){
                input.style.border = "2px solid red";
            }
            else {
                input.style.border = "2px solid green";
            }
        }
    }
    else {
        first_name = document.querySelector("#first-name").value;
        last_name = document.querySelector("#last-name").value;
        email = document.querySelector("#email").value;
        phone_num = document.querySelector("#phone-num").value;
        address = document.querySelector("#address").value;
        card = document.querySelector("#card").value;
        nameoncard = document.querySelector("#nameoncard").value;
        numbercard = document.querySelector("#numbercard").value;
        securitycode = document.querySelector("#securitycode").value;

        onCancel();
    }    
}
function createDetails(){

    dom_detail_info = document.querySelector(".each-phones");

    dom_allphones_list.appendChild(dom_detail_info);

    for (let index = 0; index < list_phones.length; index++) {
        let phone = list_phones[index];

        let phone_detail = document.createElement("div");
        phone_detail.className = "phone-detail";
        card.dataset.index = index;
        dom_detail_info.appendChild(phone_detail);

        let phone_pic = document.createElement("div");
        phone_pic.className = "phone-pic";
        phone_detail.appendChild(phone_pic);

        let phone_image = document.createElement("img");
        phone_image.id = "pic";
        phone_image.src = phone.photoimage;
        phone_pic.appendChild(phone_image);

        let title = document.createElement("h1");
        title.className = "phone-name";
        title.textContent = phone.model;
        phone_pic.appendChild(title);

        let phone_information = document.createElement("div");
        phone_information.className = "phone-information";
        phone_detail.appendChild(phone_information);

        let info = document.createElement("div");
        info.className = "info";
        phone_information.appendChild(info);

        let name = document.createElement("h1");
        name.textContent = phone.model;
        info.appendChild(name);

        let brand_name = document.createElement("p");
        brand_name.textContent ="Brand Name: "+ phone.brandname;
        info.appendChild(brand_name);

        let brand_model = document.createElement("p");
        brand_model.textContent ="Model Name: "+ phone.model;
        info.appendChild(brand_model);

        let price = document.createElement("p");
        price.textContent = "Price: $"+ phone.price;
        info.appendChild(price);

        let storage = document.createElement("p");
        storage.textContent = "Memory Storage Capacity: "+ phone.storage + "G";
        info.appendChild(storage);

        let cellcular = document.createElement("p");
        cellcular.textContent = "Cellular Technology: 4G, 5G ,LTE";
        info.appendChild(cellcular);

        let ram = document.createElement("p");
        ram.textContent = "Ram Memory Installed Size: 16G";
        info.appendChild(ram);

        let warranty = document.createElement("p");
        warranty.textContent = "Warranty period: 1 Year";
        info.appendChild(warranty);

        let buy_add = document.createElement("div");
        buy_add.className = "buy-add";
        phone_information.appendChild(buy_add);

        let star_rate = document.createElement("div");
        star_rate.className = "star-rate";
        buy_add.appendChild(star_rate);

        for (let i=0; i<5; i++){
            let star = document.createElement("i");
            star.className = "fa fa-star";
            star_rate.appendChild(star);
        }

        let rating = document.createElement("p");
        rating.id = "rating";
        rating.textContent = "456,906";
        star_rate.appendChild(rating);

        let user_click = document.createElement("div");
        user_click.className = "user-click";
        buy_add.appendChild(user_click);

        let btn_buy = document.createElement("button");
        btn_buy.id = "buy-phone";
        btn_buy.textContent = "BUY NOW";
        btn_buy.addEventListener("click", show)
        user_click.appendChild(btn_buy);

        let btn_add = document.createElement("button");
        btn_add.id = "addto-card";
        user_click.appendChild(btn_add);

        let link_card = document.createElement("a");
        link_card.href = "mycard.html";
        link_card.textContent = "ADD TO CARD++";
        link_card.addEventListener("click", onAddCard);
        link_card.dataset.index = index;
        btn_add.appendChild(link_card)
    }
}
function savePhone() {
    localStorage.setItem("savecards", JSON.stringify(savecards));
}
  
function loadPhone() {
    let productStorage = JSON.parse(localStorage.getItem("savecards"));
    if (productStorage !== null) {
      savecards = productStorage;
    }
}

function onAddCard(event){
    savecards = JSON.parse(localStorage.getItem("savecards"));

    let index = event.target.dataset.index;
    savecards.push(list_phones[index]);
    localStorage.setItem("savecards", JSON.stringify(savecards));
    
}
savePhone();
loadPhone();
createDetails();

let btn_cancel = document.querySelector("#cancelbuy");
btn_cancel.addEventListener("click", onCancel);

let btn_buyit = document.querySelector("#buynewPhone");
btn_buyit.addEventListener("click", buyyourPhone);
