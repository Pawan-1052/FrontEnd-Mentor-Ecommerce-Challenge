let thumbNails=document.querySelectorAll(".thumbnailItems");
let menuIcon=document.querySelector("#menuIcon");
let xsNavbar=document.querySelector(".xs-navItemList");
let xsNav=document.querySelector("#xs-navItems");

let previewImages=document.querySelectorAll(".previewImages");
let lightBox=document.querySelector(".lightBox");
let img=document.querySelector("#image1");
let closeBtn=document.querySelector("#lightBoxCloseBtn");
let cartEvent=document.querySelector("#cartIcon");
let cartBox=document.querySelector("#cartItemShowbox");

let xsCloseBtn=document.querySelector("#xs-closebtn");
let mobileNavBack=document.querySelector(".mobileNav");

let thumbNailPic=document.querySelectorAll(".thumbnailContainer");

let imgBox=document.querySelector("#images1");
 
let addToCartBtn=document.querySelector("#cartBtn");
let plusBtn=document.querySelector("#plusBtn");
let minusBtn=document.querySelector("#minusBtn");
let itemCount=document.querySelector('#itemCount');
let totalItems=document.querySelector("#totalItems");
let totalCost=document.querySelector("#totalCost");
let screenHeight=screen.height;
let screenWidth=screen.width;

console.log(screenHeight);

var noOfItems=0;
xsNav.style.height=screenHeight*1.2+"px";


var x=1;

function nextScroll(){
    if (x<4){
        x+=1;
        imgBox.setAttribute("src","/images/image-product-"+x+".jpg");
    }
}

function prevScroll(){
    if (x>1){
        x-=1;
        imgBox.setAttribute("src","/images/image-product-"+x+".jpg");
    }
}

 


// for(j=0;j<=3;j++){
//     thumbNailPic[j].addEventListener("click",function(){
//         thumbNailPic[j].classList.add("thumbNailBorder");
//     })
//     j+=1;
// }



closeBtn.addEventListener("click",function(){
    lightBox.style.display="none";
})
console.log(img);


menuIcon.addEventListener("click",function(){
    if(xsNavbar.style.left="-300px"){
        setTimeout(function(){
            xsNavbar.style.left="0px";
        },0.2)
        xsNavbar.style.display="block";
    }
    else{
        
        setTimeout(function(){
            xsNavbar.style.left="-300px";
        },0.2)
        xsNavbar.style.display="none";
    }
})




xsCloseBtn.addEventListener("click",function(){
    if(xsNavbar.style.left="0px"){
        setTimeout(function(){
            xsNavbar.style.left="-300px";

        },0.2)
        xsNavbar.style.display="block";
    }
})

for(i=0;i<=previewImages.length;i++){
previewImages[i].addEventListener("click",function(){
    if(lightBox.style.display="none"){
        setTimeout(function(){
            lightBox.style.display="block"; 
        },50)
    }
})
}


for(p=0;p<=previewImages.length;i++){

    prevScroll.addEventListener("click",function(){
        
    })
}

function cartClickEvent(){
    if(cartBox.style.display=="none"){
        cartBox.style.display="block";
    }
    else
    {
        cartBox.style.display="none"
    }
}

function addToCart(){
    totalItems.innerHTML=" "+noOfItems;
    totalCost.innerHTML=" "+"$"+noOfItems*125;
}

function itemIncrementer(){
    noOfItems+=1;
    itemCount.innerHTML=noOfItems;
}

function itemDecrementer(){
    if (noOfItems>0){
        noOfItems-=1;
        itemCount.innerHTML=noOfItems;
    }  
}










