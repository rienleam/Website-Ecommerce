const dom_products_view = document.querySelector(".products-view");

const dom_questions_dialog = document.querySelector("#editProducts-dialog");

const dom_adjustProduct_dialog = document.querySelector("#adjust-products-dialog");

const dom_delete_dialog = document.querySelector("#delete-dialog");

let products = [
    {
        brandname: "Apple",
        model: "Iphone 11",
        price: 600,
        storage: 64,
        photoimage: "Image/iphone11.jfif",
        quantity: 1
    },
    {
        brandname: "Apple",
        model: "Iphone 12",
        price: 670,
        storage: 128,
        photoimage: "Image/iphone12.jfif",
        quantity: 1
    },
    {
        brandname: "Apple",
        model: "Iphone 13",
        price: 750,
        storage: 512,
        photoimage: "Image/iphone13.jpg",
        quantity: 1
    },
    {
        brandname: "Apple",
        model: "Iphone 14 Pro Max",
        price: 950,
        storage: 512,
        photoimage: "Image/iphone14promax.jpg",
        quantity: 1
    },
    {
        brandname: "Huawei",
        model: "Huawei Nova 10 Pro",
        price: 650,
        storage: 256,
        photoimage: "Image/huaweinova10pro.jpg",
        quantity: 1
    },
    {
        brandname: "Huawei",
        model: "Huawei Nova 9",
        price: 550,
        storage: 128,
        photoimage: "Image/hueweinova9.jpg",
        quantity: 1
    },
    {
        brandname: "Nokia",
        model: "Nokia G50",
        price: 470,
        storage: 64,
        photoimage: "Image/nokiag50.jpg",
        quantity: 1
    },
    {
        brandname: "Oppo",
        model: "Oppo A21",
        price: 590,
        storage: 128,
        photoimage: "Image/oppoa12.jpg",
        quantity: 1
    },
    {
        brandname: "Oppo",
        model: "Oppo F21 Pro",
        price: 620,
        storage: 128,
        photoimage: "Image/oppof21pro.jpg",
        quantity: 1
    },
    {
        brandname: "Sumsung",
        model: "Sumsung A52 5G",
        price: 720,
        storage: 256,
        photoimage: "Image/sumsunga52.jpg",
        quantity: 1
    },
    {
        brandname: "Sumsung",
        model: "Sumsung M13 5G",
        price: 780,
        storage: 256,
        photoimage: "Image/sumsungm13.jpg",
        quantity: 1
    },
    {
        brandname: "Xiaomi",
        model: "Xiaomi 11T",
        price: 580,
        storage: 128,
        photoimage: "Image/xiaomi11t.jpg",
        quantity: 1
    },
    {
        brandname: "Xiaomi",
        model: "Xiaomi 12 Pro",
        price: 720,
        storage: 256,
        photoimage: "Image/xiaomi12pro.jpg",
        quantity: 1
    },
    {
        brandname: "Xiaomi",
        model: "Redmi Note 10 Pro",
        price: 890,
        storage: 512,
        photoimage: "Image/xiaomiredminote10pro.jpg",
        quantity: 1
    },
    {
        brandname: "Vivo",
        model: "Vivo X60 Pro",
        price: 780,
        storage: 256,
        photoimage: "Image/vivox60pro.jpg",
        quantity: 1
    },
    {
        brandname: "Vivo",
        model: "Vivo X60t",
        price: 710,
        storage: 256,
        photoimage: "Image/vivox60t.jpg",
        quantity: 1
    },
    {
        brandname: "Vivo",
        model: "Vivo 73t",
        price: 670,
        storage: 128,
        photoimage: "Image/vivoy73t.jpg",
        quantity: 1
    },
    {
        brandname: "Vivo",
        model: "Vivo Y74s",
        price: 700,
        storage: 128,
        photoimage: "Image/vivoy74s.jpg",
        quantity: 1
    }
]

let indexItem = products.length;

function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}

function savePhone() {
    localStorage.setItem("products", JSON.stringify(products));
}
  
function loadPhone() {
    let productStorage = JSON.parse(localStorage.getItem("products"));
    if (productStorage !== null) {
      products = productStorage;
    }
}

function renderPhone() {
    document.querySelector(".product-display").remove();
  
    dom_products_display = document.createElement("div");
    dom_products_display.className = "product-display";
  
    dom_products_view.appendChild(dom_products_display);

    for (let index = 0; index < products.length; index++) {
        let product = products[index];
    
        let main_content = document.createElement("div");
        main_content.className = "main-content";
        main_content.dataset.index = index;
        dom_products_display.appendChild(main_content);
    
        let product_info = document.createElement("div");
        product_info.className = "product-info";
        main_content.appendChild(product_info);
    
        let picture = document.createElement("img");
        picture.id = "picture";
        picture.src = product.photoimage;
        product_info.appendChild(picture);
    
        let infor = document.createElement("div");
        infor.className = "infor";
        product_info.appendChild(infor);

        let brand_name = document.createElement("h3");
        brand_name.id = "brandname";
        brand_name.textContent = "Brand: " + product.brandname;
        infor.appendChild(brand_name);

        let model_name = document.createElement("p");
        model_name.id = "model";
        model_name.textContent = "Model: "+ product.model;
        infor.appendChild(model_name);

        let price = document.createElement("p");
        price.id = "price";
        price.textContent = "Price: $" + product.price;
        infor.appendChild(price);

        let storage = document.createElement("p");
        storage.id = "storage";
        storage.textContent = "Storage: " + product.storage + "G";
        infor.appendChild(storage);

        let delete_update = document.createElement("div");
        delete_update.className = "adjust";

        let updateAction = document.createElement("button");
        updateAction.id = "update";
        updateAction.textContent = "Update";
        updateAction.addEventListener("click", editPhone);
        delete_update.appendChild(updateAction);
    
        let deleteAction = document.createElement("button");
        deleteAction.id = "delete";
        deleteAction.textContent = "Delete";
        deleteAction.addEventListener("click", askQuestion);
        delete_update.appendChild(deleteAction);

        main_content.appendChild(product_info);
        main_content.appendChild(delete_update);

    }
}
function editPhone(event) {

    let index = event.target.parentElement.parentElement.dataset.index;
    let product = products[index];

    indexItem = index;
    document.querySelector("#brand").value = product.brandname;
    document.querySelector("#model").value = product.model;
    document.querySelector("#price").value = product.price;
    document.querySelector("#storage").value = product.storage;
    document.querySelector("#photo").value = product.photoimage;

    show(dom_adjustProduct_dialog);
    document.querySelector("#addnewPhone").textContent = "Update";
    document.querySelector("#form-title").textContent = "Edit your phone";
    
    products.splice(index, 1);
}

function onNoDelete () {
    hide(dom_delete_dialog);
}
function askQuestion() {
    show(dom_delete_dialog);
}

function removePhone(event) {
    let index = event.target.parentElement.parentElement.dataset.index;

    products.splice(index, 1);

    hide(dom_delete_dialog);

    savePhone();

    renderPhone();
}

function onAddnewPhone() {
    show(dom_adjustProduct_dialog);
    document.querySelector("#addnewPhone").textContent = "Add new";
    document.querySelector("#brand").value = "";
    document.querySelector("#model").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#storage").value = "";
    document.querySelector("#photo").value = "";

    indexItem = products.length;
}

function onCancel() {
    hide(dom_adjustProduct_dialog);
    products = JSON.parse(localStorage.getItem("products"));

    let brand = document.querySelector("#brand");
    let model = document.querySelector("#model");
    let price = document.querySelector("#price");
    let storage = document.querySelector("#storage");
    let photo = document.querySelector("#photo");

    let check_inputbox = [brand, model, price, storage, photo];

    for (let input of check_inputbox) {
        input.value = "";
        input.style.border = "2px solid gray";
    }

    renderPhone();
}

function onCreatPhone() {

    let get_brand = document.querySelector("#brand");
    let get_model = document.querySelector("#model");
    let get_cost = document.querySelector("#price");
    let get_storage = document.querySelector("#storage");
    let get_photo = document.querySelector("#photo");

    let check_userinput = get_brand.value && get_model.value && get_cost.value && get_storage.value && get_photo.value;
    let input_field = [get_brand, get_model, get_cost, get_storage, get_photo];

    if (!(check_userinput)) {
        for (let input of input_field) {
            if (!(input.value)){
                input.style.border = "2px solid red";
            }
            else {
                input.style.border = "2px solid green";
            }
        }
    }
    else{
        let add_products = {};
        add_products.brandname = document.querySelector("#brand").value;
        add_products.model = document.querySelector("#model").value;
        add_products.price = document.querySelector("#price").value;
        add_products.storage = document.querySelector("#storage").value;
        add_products.photoimage = document.querySelector("#photo").value;

        products.splice(indexItem-indexItem, 0, add_products);
        hide(dom_adjustProduct_dialog);
    }
    savePhone();
    renderPhone();
}
savePhone();

loadPhone();
renderPhone();

let add_new = document.querySelector("#addnew");
add_new.addEventListener("click", onAddnewPhone);

let concel_click = dom_adjustProduct_dialog.querySelector("#cancel");
concel_click.addEventListener("click", onCancel);

let update_click = dom_adjustProduct_dialog.querySelector("#addnewPhone");
update_click.addEventListener("click", onCreatPhone);

let not_delete = dom_delete_dialog.querySelector("#not-delete");
not_delete.addEventListener("click", onNoDelete);

let yes_delete = dom_delete_dialog.querySelector("#yes-delete");
yes_delete.addEventListener("click", removePhone);