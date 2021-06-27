var tabLinks = document.querySelectorAll('.information__tabs .information__link')
var tabLinksActive = document.querySelectorAll('.information__link__active')
var tabsContent = document.querySelectorAll('.information__tab')


for(let i = 0; i < tabLinksActive.length; i++) {
    tabLinksActive[i].addEventListener('click', (e) => {
        e.preventDefault()
    })
}

for(let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', function(e) {
        e.preventDefault()

        for(let h = 0; h < tabsContent.length; h++) {
            if(tabLinks[i].getAttribute('href') == tabsContent[h].getAttribute('id')) {
                tabsContent[h].classList.add('active')
            } else {
                tabsContent[h].classList.remove('active')
            }
        }


        var currentActiveTab = document.querySelector('.information__link__active.active')
        for(let k = 0; k < tabLinks.length; k++) {
            if(tabLinks[k].textContent == currentActiveTab.textContent) {
                tabLinks[k].classList.remove('hidden')
            }
        }
        currentActiveTab.classList.remove('active')

        for(let j = 0; j < tabLinksActive.length; j++) {
            if(tabLinksActive[j].textContent == this.textContent) {
                this.classList.add('hidden')
                tabLinksActive[j].classList.add('active')
            }
        }
    })

}