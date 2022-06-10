function discountedPriceCalculate(price, discount){
    const percentagePriceDiscount = 100 - discount
    const discountPrice = (price * percentagePriceDiscount) / 100
    return discountPrice
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value

    const priceWithDiscount = discountedPriceCalculate(priceValue, discountValue)
    
    const resultPrice = document.getElementById("ResultPrice")
    resultPrice.innerText = "The discounted price is: $" + priceWithDiscount
}