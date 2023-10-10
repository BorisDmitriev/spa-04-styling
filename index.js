const body = document.querySelector('body')
body.style.fontFamily = 'Areal,sans-serif'
body.style.fontSize = '20px'

const h1 = document.querySelector('h1')
h1.style.textAlign = 'center'

const categories = document.getElementsByClassName('category')
Array.from(categories).forEach( category => {
    category.style.fontFamily = 'Tahoma'
    category.style.size = '20px'
    category.style.color = 'red'
})

const colorGenerator = () => `rgba(
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.random() + .5}
                             )`

const unLists = document.getElementsByClassName('food-category')
Array.from(unLists).forEach( unList => unList.style.backgroundColor = colorGenerator() )

//align in a row
Array.from(unLists).forEach( unList => unList.style.float = 'left' )

const main = document.querySelector('main')
main.style.overflow = 'auto'

const warn = document.getElementById('warning')
warn.style.fontFamily = 'Helvetica,sans-serif'
warn.style.fontSize = '30px'

const allerInfoItems = document.querySelectorAll('.allergy-info')
Array.from(allerInfoItems).forEach( (item,i) => { if (i%2 !== 0) return item.style.backgroundColor=colorGenerator() } )


const allergyWarning = document.getElementsByClassName('allergy-warning')
allergyWarning.item(0).style.width = 'fit-content'
allergyWarning.item(0).style.margin = '0 auto'