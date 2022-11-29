//dome element
const dom_products_view = document.querySelector(".products-view");

const dom_questions_dialog = document.querySelector("#editProducts-dialog");

const dom_adjustProduct_dialog = document.querySelector("#adjust-products-dialog");

//data
let products = [
    {
        brandname: "Apple",
        model: "Iphone 14 pro",
        price: "650.00",
        description: "Storage 128G",
    },
    {
        brandname: "Nokia",
        model: "Iphone 14 pro",
        price: "650.00",
        description: "Storage 128G"
    },
    {
        brandname: "Sumsung",
        model: "Iphone 14 pro",
        price: "650.00",
        description: "Storage 128G"
    },
    {
        brandname: "Huawei",
        model: "Iphone 14 pro",
        price: "650.00",
        description: "Storage 128G"
    },
    {
        brandname: "Sumsung",
        model: "Iphone 14 pro",
        price: "650.00",
        description: "Storage 128G"
    },
    {
        brandname: "Huawei",
        model: "Iphone 14 pro",
        price: "650.00",
        description: "Storage 128G"
    }
]

let indexItem = products.length;

//function show and hide element
function hide(element) {
    element.style.display = "none";
}
  
function show(element) {
    element.style.display = "block";
}

//add to localStorage
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
    // Remove the card container and create a new one
    document.querySelector(".product-display").remove();
  
    dom_products_display = document.createElement("div");
    dom_products_display.className = "product-display";
  
    dom_products_view.appendChild(dom_products_display);
  
    // 2 - For all products,  create a new div and append it the container
    for (let index = 0; index < products.length; index++) {
        let product = products[index];
        var num = index + 1;
    
        let main_content = document.createElement("div");
        main_content.className = "main-content";
        main_content.dataset.index = index;
        dom_products_display.appendChild(main_content);
    
        let product_info = document.createElement("div");
        product_info.className = "product-info";
        main_content.appendChild(product_info);
    
        let number = document.createElement("h2");
        number.id = "number";
        number.textContent = num;
        product_info.appendChild(number);
    
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

        let description = document.createElement("p");
        description.id = "description";
        description.textContent = "Description: " + product.description;
        infor.appendChild(description);

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
        deleteAction.addEventListener("click", removePhone);
        delete_update.appendChild(deleteAction);

        main_content.appendChild(product_info);
        main_content.appendChild(delete_update);

    }
}
function editPhone(event) {
    // Get the index using the dataset

    let index = event.target.parentElement.parentElement.dataset.index;
    let product = products[index];

    indexItem = index;
    // update the dialog with phone informatin

    document.querySelector("#brand").value = product.brandname;
    document.querySelector("#model").value = product.model;
    document.querySelector("#cost").value = product.price;
    document.querySelector("#description").value = product.description;

    // Show the dialog

    show(dom_adjustProduct_dialog);
    document.querySelector("#addnewPhone").textContent = "Update";
    
    products.splice(index, 1);
 
}

function removePhone(event) {
    //  Get index
  
    let index = event.target.parentElement.parentElement.dataset.index;

    // Remove question

    products.splice(index, 1);

    // Save to local storage
    savePhone();

    // Update the view
    renderPhone();
}

function onAddnewPhone() {
    show(dom_adjustProduct_dialog);
    document.querySelector("#addnewPhone").textContent = "Add new";
    document.querySelector("#brand").value = "";
    document.querySelector("#model").value = "";
    document.querySelector("#cost").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#photo").value = "";

    indexItem = products.length;
}

function onCancel() {
    hide(dom_adjustProduct_dialog);
    products = JSON.parse(localStorage.getItem("products"));
    renderPhone();
}

function onCreatPhone() {

    hide(dom_adjustProduct_dialog);

    let get_brand = document.querySelector("#brand").value;
    let get_model = document.querySelector("#model").value;
    let get_cost = document.querySelector("#cost").value;
    let get_description = document.querySelector("#description").value;
    let get_photo = document.querySelector("#photo").value;
    let check_userinput = get_brand && get_model && get_cost && get_description && get_photo;

    if (!(check_userinput)) {
        window.alert("You must complete all inputs!");
    }else{
        let add_products = {};
        add_products.brandname = document.querySelector("#brand").value;
        add_products.model = document.querySelector("#model").value;
        add_products.price = document.querySelector("#cost").value;
        add_products.description = document.querySelector("#description").value;

        products.splice(indexItem, 0, add_products);
    }

    // products.push(add_products);
    
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