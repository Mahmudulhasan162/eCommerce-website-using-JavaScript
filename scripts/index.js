let totalPrice=0;

function priceCalculator(target){
    const listedItems= document.getElementById('listedItems')
    const itemNames=target.childNodes[5].childNodes[1].innerText;
    const li= document.createElement('li');
    li.innerText=itemNames;
    listedItems.appendChild(li);
    const price=target.childNodes[5].childNodes[3].innerText.split(" ")[0];
    totalPrice=parseFloat(totalPrice)+parseFloat(price);

    document.getElementById('total-price').innerText=totalPrice.toFixed(2);

    const applyButton=document.getElementById('apply-btn');
    if(totalPrice>=200){
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('disabled-btn');
        applyButton.classList.add('bg-pinkColor');
    }else{
        applyButton.setAttribute('disabled','true');
        applyButton.classList.remove('bg-pinkColor');
        applyButton.classList.add('disabled-btn')
    }
    const purchaseButton=document.getElementById('purchase-btn');
        
        if(totalPrice<0){
            purchaseButton.setAttribute('disabled','true');
            purchaseButton.classList.remove('bg-pinkColor');
            purchaseButton.classList.add('disabled-btn')
            
        }else{
            purchaseButton.removeAttribute('disabled');
            purchaseButton.classList.remove('disabled-btn');
            purchaseButton.classList.add('bg-pinkColor');
        }
    
}

function discountCalculator(target){
    const justPriceString= document.getElementById('total-price').innerText;
    const justPrice=parseFloat(justPriceString);
    const discountPrice= document.getElementById('discount-price')
    const couponCodeField=document.getElementById('coupon-code').value;
    const applyButton=document.getElementById('apply-btn');
    const total=document.getElementById('total-amount');
    
    if(couponCodeField=="SELL200" && justPrice>=200){
        const discount=justPrice*0.2;
        discountPrice.innerText=discount.toFixed(2);
        
        total.innerText=justPrice-parseFloat(discount);        
    }
    else{
        discountPrice.innerText="0.00";
        
    }
    
    
}

function setCouponCode(target){
    const couponField=document.getElementById('coupon-code');
    couponField.value=target.innerText;
}
function backHome(target){
    window.location.reload();
}