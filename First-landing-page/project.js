let products = []
const totalProducts = document.getElementById('totalProducts')
const totalItems = document.getElementById('totalItems')
const cartWrapper = document.getElementById('cartWrapper')
const buttonStarted = document.getElementById('getStarted')
const buttonFinished = document.getElementById('getFinished')


const setCount = () => {
    let totalCount = 0

    for(let item in products) {
        totalCount += products[item].count
    }

    totalItems.innerText = totalCount.toString()
    
    const getStarted = () => {

        if(setCount) {
            
            buttonStarted.style.display ="none"

            buttonFinished.style.display = "inline"

        }
    }

    getStarted()
    return
    
}

const totalPrice = () => {
     totalCart = 0

     for(let item in products){
         totalCart += products[item].price * products[item].count
     }

     totalProducts.innerText = `$ ${totalCart.toString()}`
     return totalCart
     
     
}

const productsList = () => {
    const productsItems = products.map(product => {
        return `
        
        <div id="cartWrapper">
        <div class="wrapperStyle">
        <h2>${product.product}</h2>
        <div class="wrapperImage">
        <img src="${product.image}" alt="">
        <h2> ${product.count} </h2>
        </div>
        <h2>$ ${product.price}</h2>
        </div>
        </div>
        `
    })
    cartWrapper.innerHTML = productsItems
}

const addProduct = (product, price, count, image) => {

    for(let item in products){
        if(products[item].product === product) {
            products[item].count ++
            
            
            setCount()
            totalPrice()
            return
            
        }

    }
    
    products.push({product: product,price: price, count: count, image: image  })

    setCount()
    totalPrice()
    productsList()  
}




