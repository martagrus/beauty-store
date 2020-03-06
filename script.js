let nav, navLeft, main, welcomeBTN, header, contactBtn, contact, faqBtn, faq, wishBtn, wishList, cartBtn, cart, productsBTN, products,
hair, body, face, makeup, accessories, sets, category, foundation, eyeshadow, eyeliner, mascara, blush, lipstick, prod, hairProds, bodyProds, 
faceProds, makeupProds, accProds, setsProds, foundationProds, eyeshadowProds, eyelinerProds, mascaraProds, blushProds, lipstickProds;
let list = ['Foundation', 'Eyeshadow', 'Eyeliner', 'Mascara', 'Blush', 'Lipstick']; 
let prodId = 1;

main = () => {
    prepareElements();
    perpareEvents();
    hideCategories();
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
    hair = document.getElementById("hair");
    body = document.getElementById("body");
    face = document.getElementById("face");
    makeup = document.getElementById("makeup");
    accessories = document.getElementById("accessories");
    sets = document.getElementById("sets");
    category = document.getElementById("selected-category");
    foundation = document.getElementById("foundation");
    eyeshadow = document.getElementById("eyeshadow");
    eyeliner = document.getElementById("eyeliner");
    mascara = document.getElementById("mascara");
    blush = document.getElementById("blush");
    lipstick = document.getElementById("lipstick");
    hairProds = document.getElementById("hair-prods")
    bodyProds = document.getElementById("body-prods");
    faceProds= document.getElementById("face-prods");
    makeupProds= document.getElementById("makeup-prods");
    accProds = document.getElementById("acc-prods");
    setsProds = document.getElementById("sets-prods");
    foundationProds = document.getElementById("foundation-prods");
    eyeshadowProds = document.getElementById("eyeshadow-prods");
    eyelinerProds = document.getElementById("eyeliner-prods");
    mascaraProds = document.getElementById("mascara-prods");
    blushProds = document.getElementById("blush-prods");
    lipstickProds = document.getElementById("lipstick-prods");
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
    foundation.addEventListener("click", openFoundation);
    eyeshadow.addEventListener("click", openEyeshadow);
    eyeliner.addEventListener("click", openEyeliner);
    mascara.addEventListener("click", openMascara);
    blush.addEventListener("click", openBlush);
    lipstick.addEventListener("click", openLipstick); 
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
    if (header.style.display = "flex") {
        nav.style.top = "0";
        //navLeft.style.display = "flex";
        footer.style.bottom = "0"
    }
}

hideCategories = () => {
    category.style.display= "none";
}

closeAll = () => {
    header.style.display = "flex";
    main.style.display = "none";
    cart.style.display = "none";
    contact.style.display = "none";
    faq.style.display = "none";
    products.style.display = "none";
    wishList.style.display = "none";
    category.style.display= "none";
    hair.style.display= "none";
    body.style.display= "none";
    face.style.display= "none";
    makeup.style.display= "none";
    accessories.style.display= "none";
    sets.style.display= "none";
    foundation.style.display= "none";
    eyeshadow.style.display= "none";
    eyeliner.style.display= "none";
    mascara.style.display= "none";
    blush.style.display= "none";
    lipstick.style.display= "none";
    hairProds.style.display= "none";
    bodyProds.style.display= "none";
    faceProds.style.display= "none";
    makeupProds.style.display= "none";
    accProds.style.display= "none";
    setsProds.style.display= "none";
    foundationProds.style.display= "none";
    eyeshadowProds.style.display= "none";
    eyelinerProds.style.display= "none";
    mascaraProds.style.display= "none";
    blushProds.style.display= "none";
    lipstickProds.style.display= "none";
}

startShopping = () => {
    openProducts();
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
    hair.style.display= "flex";
    body.style.display= "flex";
    face.style.display= "flex";
    makeup.style.display= "flex";
    accessories.style.display= "flex";
    sets.style.display= "flex";
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

createBox = (name, price, boxId) => {
    let bigBox = document.getElementById(boxId)

    let box = document.createElement('div')
    box.classList.add('box')
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

createPhrase = (quoteId, phraseText) => {
    let quoteContainer = document.getElementById(quoteId)
    quoteContainer.classList.add('quotes-container')

    let quoteBox = document.createElement('div')
    quoteBox.classList.add('quotes')

    let decor = document.createElement('div')
    decor.classList.add('quote-decor')

    let phrase = document.createElement('p')
    phrase.innerText = phraseText
    
    quoteBox.appendChild(phrase)
    quoteContainer.appendChild(quoteBox)
    quoteContainer.appendChild(decor)
}

getHair = async () => {
    quoteId ='hair-quotes';
    boxId = 'hair-box';
    phraseText = '"If I want to knock a story off the front page, I just change my hairstyle." Hillary Clinton';

    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Hair.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openHair = () => {
    openCategory();
    let box = document.getElementById('hair-box')
    if (box.innerHTML === '') getHair();
    hairProds.style.display = 'flex';
}

getFace = async () => {
    quoteId ='face-quotes';
    boxId = 'face-box';
    phraseText = '"A woman is most beautiful when she smiles. Other than that, the most valuable tip I\'ve learned is always use a skin moisturiser!" Beyoncé';
    
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Face.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openFace = () => {
    openCategory();
    let box = document.getElementById('face-box')
    if (box.innerHTML === '') getFace();
    faceProds.style.display = 'flex';
}

getBody = async () => {
    quoteId ='body-quotes';
    boxId = 'body-box';
    phraseText = '"Enjoy your body, use it every way you can. Don\'t be afraid of it, or what other people think of it, it\'s the greatest instrument you will ever own." Kurt Vonnegut';
    
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Body.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openBody = () => {
    openCategory();
    let box = document.getElementById('body-box')
    if (box.innerHTML === '') getBody();
    bodyProds.style.display = 'flex';
}

getAcc = async () => {
    quoteId ='acc-quotes';
    boxId = 'acc-box';
    phraseText = '"I don\'t like standard beauty. There is no beauty without strangeness." Karl Lagerfeld';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Accessories.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openAcc = () => {
    openCategory();
    let box = document.getElementById('acc-box')
    if (box.innerHTML === '') getAcc();
    accProds.style.display = 'flex';
}

getMakeup = () => {
    quoteId ='makeup-quotes';
    phraseText = '"The most beautiful makeup of a woman is passion. But cosmetics are easier to buy." Yves Saint Laurent';
    createPhrase(quoteId, phraseText);
}

openMakeup = () => {
    openCategory();
    let box = document.getElementById('makeup-quotes')
    if (box.innerHTML === '') getMakeup();
    makeupProds.style.display = 'flex';
    foundation.style.display= 'flex';
    eyeshadow.style.display= 'flex';
    eyeliner.style.display= 'flex';
    mascara.style.display= 'flex';
    blush.style.display= 'flex';
    lipstick.style.display= 'flex';
}

getFoundation = async() => {
    quoteId ='foundation-quotes';
    boxId = 'foundation-box';
    phraseText = '"Foundation should unify tone, but it shouldn’t take away the individuality of the skin." Francois Nars';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Foundation.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openFoundation = () => {
    openCategory();
    let box = document.getElementById('foundation-box')
    if (box.innerHTML === '') getFoundation();
    foundationProds.style.display = 'flex';
}

getEyeshadow = async() => {
    quoteId ='eyeshadow-quotes';
    boxId = 'eyeshadow-box';
    phraseText = '"Your eye makeup says so much about you and your style." Laura Mercier';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Eyeshadow.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openEyeshadow = () => {
    openCategory();
    let box = document.getElementById('eyeshadow-box')
    if (box.innerHTML === '') getEyeshadow();
    eyeshadowProds.style.display = 'flex';
}

getEyeliner = async() => {
    quoteId ='eyeliner-quotes';
    boxId = 'eyeliner-box';
    phraseText = '"Black eyeliner. It’s standard. It’s all you need. It just makes the world a better place." Marilyn Manson';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Eyeliner.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openEyeliner = () => {
    openCategory();
    let box = document.getElementById('eyeliner-box')
    if (box.innerHTML === '') getEyeliner();
    eyelinerProds.style.display = 'flex';
}

getMascara = async() => {
    quoteId ='mascara-quotes';
    boxId = 'mascara-box';
    phraseText = '"I do put on a little makeup every day because it helps me feel put together. Mascara is essential." Emma Stone';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Mascara.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openMascara = () => {
    openCategory();
    let box = document.getElementById('mascara-box')
    if (box.innerHTML === '') getMascara();
    mascaraProds.style.display = 'flex';
}

getBlush = async() => {
    quoteId ='blush-quotes';
    boxId = 'blush-box';
    phraseText = '"The best thing is to look natural, but it takes makeup to look natural." Calvin Klein';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Blush.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openBlush = () => {
    openCategory();
    let box = document.getElementById('blush-box')
    if (box.innerHTML === '') getBlush();
    blushProds.style.display = 'flex';
}

getLipstick = async() => {
    quoteId ='lipstick-quotes';
    boxId = 'lipstick-box';
    phraseText = '"Beauty to me is about being comfortable in your own skin. That, or a kick-ass red lipstick." Gwyneth Paltrow';
    let prod = await axios.get("https://beauty-shop-9b5ab.firebaseio.com/.json");
    prod.data.Lipstick.forEach(x => createBox(x.name, x.price, boxId));
    createPhrase(quoteId, phraseText);
}

openLipstick = () => {
    openCategory();
    let box = document.getElementById('lipstick-box')
    if (box.innerHTML === '') getLipstick();
    lipstickProds.style.display = 'flex';
}

getSets = () => {
    quoteId ='sets-quotes';
    boxId = 'sets-box';
    phraseText = '"I believe in manicures, I believe in overdressing. I believe in primping at leisure and wearing lipstick." Audrey Hepburn';
    createPhrase(quoteId, phraseText); 
}

openSets = () => {
    openCategory();
    let box = document.getElementById('sets-box')
    if (box.innerHTML === '') getSets();
    setsProds.style.display = 'flex';
}

addFavourite = () => {
    let star = document.getElementById('fav'+prodId)
    let prod = document.getElementById(prodId)
    let navStar = document.getElementById('nav-star')
    let favNo = document.getElementById('star-no')
    let favs = document.getElementById("fav-list")
    let favListItem = document.createElement("li")
    
    star.addEventListener("click", function(){
        let no = Number(favNo.innerHTML)
        if (star.style.color === 'red') {
            star.style.color = 'black'
            no -=1
            favNo.innerHTML = no
            favs.removeChild(favListItem)
            document.getElementById("wish-span").style.display = "inline"
            if (favNo.innerHTML < 1){
                navStar.style.color = 'black'
                favNo.innerHTML = ''
            }
        } else {
            star.style.color = 'red'
            navStar.style.color = 'red'
            no +=1
            favNo.innerHTML = no
            favListItem.innerText = prod.firstChild.innerHTML
            favs.appendChild(favListItem)
            document.getElementById("wish-span").style.display = "none"
        }
    })  
}

addToCart = () => {
    let plus = document.getElementById('buy'+prodId)
    let prod = document.getElementById(prodId)
    let priceOfItem = document.getElementById('price'+prodId).innerText
    let navCart = document.getElementById('nav-cart-icon')
    let cartNo = document.getElementById('cart-no')
    let buys = document.getElementById("cart-list")

    let boughtItem = document.createElement("li")
    let itemsNo = document.createElement('span')
    let itemsName = document.createElement('span')
    let priceToPay = document.createElement('span')
    priceToPay.classList.add('balance')
    let itemsBought = 0

    plus.addEventListener("click", function(){
        plus.style.color = 'goldenrod'
        navCart.style.color = 'goldenrod'
        itemsBought += 1
        let no = Number(cartNo.innerHTML)
        no +=1
        cartNo.innerHTML = no
        price = (priceOfItem.slice(0,-2)*itemsBought).toFixed(2)
        priceToPay.innerText =  price + "zł"
        itemsName.innerText = prod.firstChild.innerHTML
        itemsNo.innerText = itemsBought
        
        boughtItem.appendChild(itemsNo)
        boughtItem.appendChild(itemsName)
        boughtItem.appendChild(priceToPay)
        buys.appendChild(boughtItem)

        document.getElementById("cart-span").style.display = "none"
        balance();
    })
}

balance = () => {
    let balance = document.getElementById('balance')
    let prices = document.getElementsByClassName('balance')
    let lista = []
    
    for (let item of prices) {
        lista.push(Number(item.innerText.slice(0,-2)))
    }

    totalBalance = lista.reduce((a, b) => a+b)
    balance.innerText = "Total: " + totalBalance.toFixed(2) + "zł"
}

document.addEventListener('DOMContentLoaded', main);