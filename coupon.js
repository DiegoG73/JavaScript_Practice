function discountedPriceCalculate(price, discount){
    const percentagePriceDiscount = 100 - discount
    const discountPrice = (price * percentagePriceDiscount) / 100
    return discountPrice
}

var coupons = ["OFF", "GGBRE", "HOLYMOLLY"]

function onClickButtonCoupon(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value

    const inputCoupon = document.getElementById("CouponDiscount")
    const couponValue = inputCoupon.value

    let discount

    switch(couponValue){
        case coupons[0]:
            discount = 25
        break

        case coupons[1]:
            discount = 50
        break

        case coupons[2]:
            discount = 80
        break
    }

    const discountedPrice = discountedPriceCalculate(priceValue, discount)

    const couponResult = document.getElementById("ResultPrice")
    couponResult.innerText = "The price validating your coupon is: $" + discountedPrice
}