var bag = document.querySelector('.user__basket')
var bag_item = document.querySelector('.basket__num.open')

bag.addEventListener('click', (e) => {
    if(bag_item.classList.contains('active')) {
        bag_item.classList.remove('active')
    }   else {
        bag_item.classList.add('active')
    }
})






var department = document.querySelector('.header__catalog__button')
var catalog__option = document.querySelector('.header__catalog__option')

department.addEventListener('click', (e) => {
    if(department.classList.contains('active')) {
        department.classList.remove('active')
    }   else {
        department.classList.add('active')
    }

    if(catalog__option.classList.contains('hidden')) {
        catalog__option.classList.remove('hidden')
    }   else {
        catalog__option.classList.add('hidden')
    }
})














var select = document.querySelector('.form__select__wrapper')

select.addEventListener('click', (e) => {
    if(select.classList.contains('active')) {
        select.classList.remove('active')
    }   else {
        select.classList.add('active')
    }
})
