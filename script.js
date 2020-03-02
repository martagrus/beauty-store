let nav, navLeft, main, welcomeBTN, header, contactBtn, contact, faqBtn, faq, wishBtn, wishList, cartBtn, cart, productsBTN, products, quote,
hair, body, face, makeup, accessories, sets, category, foundation, eyeshadow, eyeliner, mascara, blush, lipstick, prod;
let list = ['Foundation', 'Eyeshadow', 'Eyeliner', 'Mascara', 'Blush', 'Lipstick']; 
let prodId = 1;

main = () => {
    prepareElements();
    perpareEvents();
}

prepareElements = () => {
    nav = document.getElementById("nav");
    navLeft = document.getElementById("nav-left");
    main = document.getElementById("main-pic");
    welcomeBTN = document.getElementById("welcome-btn");
    header = document.getElementById("header");
    contactBtn = document.getElementById("contact-btn");
    contact = document.getElementById("contact");
    faqBtn = document.getElementById("faq-btn");
    faq = document.getElementById("faq");
    wishBtn = document.getElementById("nav-wish");
    wishList = document.getElementById("wish-list");
    cartBtn = document.getElementById("nav-cart");
    cart = document.getElementById("cart");
    productsBTN = document.getElementById("nav-product");
    products = document.getElementById("products");
    footer = document.getElementById("footer");
    quote = document.getElementById("quote");
    hair = document.getElementById("hair");
    body = document.getElementById("body");
    face = document.getElementById("face");
    makeup = document.getElementById("makeup");
    accessories = document.getElementById("accessories");
    sets = document.getElementById("sets");
    category = document.getElementById("selected-category");
}

perpareEvents = () => {
    main.addEventListener("mousemove", showHideNav);
    main.addEventListener("mousemove", showHideFooter);
    welcomeBTN.addEventListener("click", startShopping);
    contactBtn.addEventListener("click", openContact);
    faqBtn.addEventListener("click", openFaq);
    wishBtn.addEventListener("click", openWishList);
    cartBtn.addEventListener("click", openCart);
    productsBTN.addEventListener("click", openProducts);
    hair.addEventListener("click", openHair);
    body.addEventListener("click", openBody);
    face.addEventListener("click", openFace);
    makeup.addEventListener("click", openMakeup);
    accessories.addEventListener("click", openAcc);
    sets.addEventListener("click", openSets);   
}

showHideNav = () => {
    nav.classList.add("show-nav");
    if (nav.classList.value === "show-nav"){
        window.setTimeout(() => {
            nav.classList.remove("show-nav");
        }, 4000);}
}

showHideFooter = () => {
    footer.classList.add("show-footer");
    if (footer.classList.value === "show-footer"){
        window.setTimeout(() => {
            footer.classList.remove("show-footer");
        }, 4000);}
}

showNavFooter = () => {
    if (header.style.display = "block") {
        nav.style.top = "0";
        //navLeft.style.display = "block";
        footer.style.bottom = "0"
    }
}

closeAll = () => {
    header.style.display = "block";
    main.style.display = "none";
    cart.style.display = "none";
    contact.style.display = "none";
    faq.style.display = "none";
    products.style.display = "none";
    wishList.style.display = "none";
    category.style.display= "none";
}

startShopping = () => {
    showNavFooter();
    closeAll();   
    products.style.display = "flex";
}

openCart = () => {
    showNavFooter();
    closeAll();
    cart.style.display = "flex";
}

openContact = () => {
    showNavFooter();
    closeAll();
    contact.style.display = "flex";
}

openFaq = () => {
    showNavFooter();
    closeAll();
    faq.style.display = "flex";
}

openProducts = () => {
    showNavFooter();
    closeAll();
    products.style.display = "flex";
}

openWishList = () => {
    showNavFooter();
    closeAll();
    wishList.style.display = "flex";
}

openCategory = () => {
    closeAll();
    category.style.display= "flex"
}

createBox = (name, price) => {
    let bigBox = document.getElementById('prodBox')

    let box = document.createElement('div')
    box.classList.add('box', 'product-box')
    box.id = prodId
    
    let nameBox = document.createElement('div')
    nameBox.innerHTML = name
    nameBox.id = 'name' + prodId

    let priceBox = document.createElement('div')
    priceBox.innerHTML = price + 'zł'
    priceBox.id = 'price' + prodId

    let iconBox = document.createElement('div')
    iconBox.classList.add('icons')

    let buyBtn = document.createElement('i')
    buyBtn.classList.add('fas', 'fa-plus')
    buyBtn.id = "buy" + prodId
    buyBtn.title = "ADD TO CART"

    let favBTN = document.createElement('i')
    favBTN.classList.add('fas', 'fa-star')
    favBTN.id = "fav" + prodId
    favBTN.title = "ADD TO FAVOURITES"
    
    iconBox.appendChild(favBTN)
    iconBox.appendChild(buyBtn)
    box.appendChild(nameBox)
    box.appendChild(priceBox)
    box.appendChild(iconBox)
    bigBox.appendChild(box)
    addFavourite();
    addToCart();
    prodId ++
}

openHair = async () => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"If I want to knock a story off the front page, I just change my hairstyle." Hillary Clinton';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Hair.forEach(x => createBox(x.name, x.price))
}

openBody = async () => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"Enjoy your body, use it every way you can. Don\'t be afraid of it, or what other people think of it, it\'s the greatest instrument you will ever own." Kurt Vonnegut';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Body.forEach(x => createBox(x.name, x.price))
}

openFace = async () => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"A woman is most beautiful when she smiles. Other than that, the most valuable tip I\'ve learned is always use a skin moisturiser!" Beyoncé';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Face.forEach(x => createBox(x.name, x.price))
}

openMakeup = () => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"The most beautiful makeup of a woman is passion. But cosmetics are easier to buy." Yves Saint Laurent';
    list.forEach(x => {
        let box = document.createElement('div')
        let bigBox = document.getElementById('prodBox')
        box.innerHTML = x
        box.classList.add('box', 'product-box')
        box.id = x.toLowerCase()
        bigBox.appendChild(box)  
    })
    addNewListeners();
}

addNewListeners = () => {
    foundation = document.getElementById("foundation");
    eyeshadow = document.getElementById("eyeshadow");
    eyeliner = document.getElementById("eyeliner");
    mascara = document.getElementById("mascara");
    blush = document.getElementById("blush");
    lipstick = document.getElementById("lipstick");
    foundation.addEventListener("click", openFoundation);
    eyeshadow.addEventListener("click", openEyeshadow);
    eyeliner.addEventListener("click", openEyeliner);
    mascara.addEventListener("click", openMascara);
    blush.addEventListener("click", openBlush);
    lipstick.addEventListener("click", openLipstick);
}

openFoundation = async() => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"Foundation should unify tone, but it shouldn’t take away the individuality of the skin." Francois Nars';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Foundation.forEach(x => createBox(x.name, x.price))
}

openEyeshadow = async() => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"Your eye makeup says so much about you and your style." Laura Mercier';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Eyeshadow.forEach(x => createBox(x.name, x.price))
}

openEyeliner = async() => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"Black eyeliner. It’s standard. It’s all you need. It just makes the world a better place." Marilyn Manson';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Eyeliner.forEach(x => createBox(x.name, x.price))
}

openMascara = async() => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"I do put on a little makeup every day because it helps me feel put together. Mascara is essential." Emma Stone';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Mascara.forEach(x => createBox(x.name, x.price))
}

openBlush = async() => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"The best thing is to look natural, but it takes makeup to look natural." Calvin Klein';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Blush.forEach(x => createBox(x.name, x.price))
}

openLipstick = async() => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"Beauty to me is about being comfortable in your own skin. That, or a kick-ass red lipstick." Gwyneth Paltrow';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Lipstick.forEach(x => createBox(x.name, x.price))
}

openAcc = async () => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"I don\'t like standard beauty. There is no beauty without strangeness." Karl Lagerfeld';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Accessories.forEach(x => createBox(x.name, x.price))
}

openSets = () => {
    clearProdList();
    openCategory();
    quote.innerHTML = '"I believe in manicures, I believe in overdressing. I believe in primping at leisure and wearing lipstick." Audrey Hepburn';  
}

clearProdList = () => {
    let list = document.getElementsByClassName('product-box');
    for (let i = list.length - 1; i >= 0; --i) {
        list[i].remove();
    }
}

addFavourite = () => {
    let star = document.getElementById('fav'+prodId)
    let prod = document.getElementById(prodId)
    let price = document.getElementById('price'+prodId)
    let navStar = document.getElementById('nav-star')
    let favNo = document.getElementById('star-no')
    
    star.addEventListener("click", function(){
        console.log(prod)
        let no = Number(favNo.innerHTML)
        sessionStorage.setItem(prodId, (prod.firstChild.innerHTML + price.innerHTML))
        if (star.style.color === 'red') {
            star.style.color = 'black'
            no -=1
            favNo.innerHTML = no
            if (favNo.innerHTML < 1){
                navStar.style.color = 'black'
                favNo.innerHTML = ''
            }
        } else {
        star.style.color = 'red'
        navStar.style.color = 'red'
        no +=1
        favNo.innerHTML = no
        }
    })  
}

addToCart = () => {
    let plus = document.getElementById('buy'+prodId)
    let navCart = document.getElementById('nav-cart-icon')
    let cartNo = document.getElementById('cart-no')

    plus.addEventListener("click", function(){
        plus.style.color = 'goldenrod'
        navCart.style.color = 'goldenrod'
        let no = Number(cartNo.innerHTML)
        no +=1
        cartNo.innerHTML = no
    })
}

document.addEventListener('DOMContentLoaded', main);