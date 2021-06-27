var starElems = document.querySelectorAll('.product__inner .star__item')
var starParent = document.querySelector('.product__inner .product__rating__stars')




for(let i = 0; i < starElems.length; i++) {
    starElems[i].addEventListener('click', (e) => {
        starCount(i)
    })
}



function starCount(starLength) {
    for(let i = 0; i <= starLength; i++) {
        starElems[i].classList.add('active')


        if(i == starLength) {

            const starNumData = i
            starParent.dataset.starTotal = starNumData + 1

            for(let j = ++i; j < starElems.length; j++) {
                starElems[j].classList.remove('active')
            }
        }
    }
}








function setOrangeColor(elem, nums) {
    var el = document.querySelector(elem)

    for(let i = 0; i < nums; i++) {
        el.querySelectorAll('.star__item')[i].classList.add('active')
    }
}

setOrangeColor('.related .product__rating__stars1', 4)
setOrangeColor('.related .product__rating__stars2', 3)
setOrangeColor('.related .product__rating__stars3', 5)
setOrangeColor('.related .product__rating__stars4', 4)
setOrangeColor('.related .product__rating__stars5', 4)