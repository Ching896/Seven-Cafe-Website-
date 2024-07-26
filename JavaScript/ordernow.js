import {foodItem} from './food.js'


// to display each food 
function displayItems(){
    var chops = document.getElementById('chops');
    var spaghetti =  document.getElementById('spaghetti');
    var dessert =  document.getElementById('dessert');
    var beverage =  document.getElementById('beverage');
 

    const chopsData= foodItem.filter(item=>item.category=='chops');
  
    const spaghettiData= foodItem.filter(item=>item.category=='spaghetti');
  
    const dessertData= foodItem.filter(item=>item.category=='dessert');
 
    const beverageData= foodItem.filter(item=>item.category=='beverage');
   
    
    chopsData.map(item=>{
        var itemCard= getItemCard(item);
        chops.appendChild(itemCard);
    })

    spaghettiData.map(item=>{
        var itemCard= getItemCard(item);
        spaghetti.appendChild(itemCard);

    })

    dessertData.map(item=>{
        var itemCard= getItemCard(item);
        dessert.appendChild(itemCard);

    })

    beverageData.map(item=>{
        var itemCard= getItemCard(item);
        beverage.appendChild(itemCard);
    })
}
displayItems();



// display for quick access function
const categoryListData = []
const lastItemInEachCategoryObject = {};
for (const item of foodItem) {
    lastItemInEachCategoryObject[item.category] = item;
}

for (const category in lastItemInEachCategoryObject) {
    categoryListData.push(lastItemInEachCategoryObject[category]);
}

function categoryLists(){
    var categoryList= document.getElementById('category-list');

    categoryListData.map(item=>{
    
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.img;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
categoryLists();

document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

// add to cart function
var cartData= [];
function addToCart(){
    
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);


    var index= cartData?.indexOf(itemObj);
   
    if(index=== -1){
  
        cartData= [...cartData,itemObj];
      
    }
    else if(index > -1){
        alert("You already add to cart before!!");
    }

    document.querySelectorAll('#cart-plus span')[0].innerText = ` ${cartData.length ?? 0} Items`;
    document.getElementById('m-cart-plus').innerText = ' ' + cartData.length ?? 0 ;
    totalAmount();
    cartItems();
}

// for display food image and add quantity after click the cart
function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

//increase quantity function
function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
  
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

var currPrice= 0;

//decrease quantity function
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
       
        cartData.splice(ind,1);
        
        document.querySelectorAll('#cart-plus span')[0].innerText= ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("You havent add anything to cart!!");

        }
    }
    totalAmount()
    cartItems()
}

//display total 
function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price : RM ' + sum;
    document.getElementById('m-total-amount').innerText= 'Total Price : RM ' + sum;
    document.querySelectorAll('.cart-btn a').forEach(element=>element.setAttribute('href', `payment2.html?amount=${sum}`));
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

var flag= false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
       
    }
    else{
        alert("You havent add anyting to cart!!");
    }
}



window.onresize= window.onload= function(){
    var size= window.screen.width;

    if(size<800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
    if(size>800){
        var cloneFoodItems= document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}

function getItemCard(item) {
    var itemCard= document.createElement('div');
    itemCard.setAttribute('id','item-card')

    var cardTop= document.createElement('div');
    cardTop.setAttribute('id','card-top');

    var star= document.createElement('img');
    star.src = '/originalphoto/star.png';
    star.id = 'rating';
    
    var rating = document.createElement('span');
    rating.innerText = ' ' + item.rating;

    var heart= document.createElement('img');
    heart.src = '/originalphoto/plus.png';
    heart.className = 'add-to-cart';
    heart.id = item.id;

    cardTop.appendChild(star);
    cardTop.appendChild(rating);
    cardTop.appendChild(heart);


    var img= document.createElement('img');
    img.src=item.img;

    var itemName= document.createElement('p');
    itemName.setAttribute('id','item-name');
    itemName.innerText= item.name;

    var itemPrice= document.createElement('p');
    itemPrice.setAttribute('id','item-price');
    itemPrice.innerText= 'Price : RM ' + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    return itemCard;
}
