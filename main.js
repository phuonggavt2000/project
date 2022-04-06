let bnt = document.querySelectorAll("button")
let arrName = Array()
bnt.forEach(function(button){
    button.addEventListener("click",function() {
        event.target // them su kien
        let product = this.parentElement // lay cha cua button
        let productImg = product.querySelector("img").src
        let productPrice = product.querySelector("span").innerHTML
        let productName = product.querySelector("h1").innerHTML
        addcart(productImg,productPrice,productName)
        let bnt = document.querySelectorAll("button")
        // console.log(bnt)
    })
})
function addcart(productImg,productPrice,productName) {
    let addtr = document.createElement("tr")
    let trcontent = ' <td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+productImg+'"alt=""><span class="same">'+productName+'</span></td><td><p><span id="pr">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button>Xóa</button class="button"></td><td id="toltal"></td>'
    addtr.innerHTML = trcontent // thêm sản phẩm vào thẻ tr
    let carTable = document.querySelector("tbody")
    // for(i = 0; i < carTable.length; i++) {
    //     let nameSame = carTable.querySelectorAll(".same")

    // }
//    console.log(carTable)
 
      carTable.append(addtr)
    let buttonCss = carTable.querySelector("tr button:last-child")
    buttonCss.className = "button"
      console.log(carTable)
    // for (i = 0; i < )
    // let sameName = carTable.querySelector("span")
    // console.log(nameCart)
    // neu PriductName giong nhau thi input cua value do tang 1 
// if (productName === nameCart) {
//     addInput(productName,carTable) // sua ly value
// } else {
    
// }




// if (productName === )
    
    carttotal() // goi den tong
deleteproduct()
let sameName = carTable.querySelector("tr:last-child td span").innerHTML
arrName.push(sameName)


}
function carttotal(carTable) {
    
    let cartItem = document.querySelectorAll(".table-body tr")
    let total = 0
    for(let i = 0; i < cartItem.length; i++) {
        let price = cartItem[i].querySelector("#pr").innerHTML
        let valueInput = cartItem[i].querySelector("input").value
    //   console.log(valueInput)
total += price*valueInput
    }
    total // tong
    let addToltal = document.querySelector("table  tr td")
    let span = document.createElement("span")
    addToltal.innerHTML = ""
    span.innerHTML = "Tổng:   " + total + ".000" + "đ"
    addToltal.append(span)
    let spanClass = addToltal.querySelector("span")
    spanClass.className = "toltal"
    console.log(spanClass)
    
    
}

function deleteproduct() {
    let bntDel = document.querySelectorAll("tbody tr td button")
for (i = 0; i < bntDel.length; i++) {
    bntDel[i].addEventListener("click", function() {
        this.target
        let parenDel = this.parentElement.parentElement
        parenDel.remove()
        carttotal()
        // console.log(parenDel)
    })
// bntDel[i].addEventListener("click",function() {
//     this.target
//     let paren = this.parentElement
//     console.log(paren)
// })
}
}

// function add() {
//     let addImg = document.querySelector(".contain-add #img").value
//     let addPrice = document.querySelector(".contain-add #price").value
//     let addName = document.querySelector(".contain-add #name").value
//     let addDiv = document.createElement("div")
//     let containProduct = document.querySelector(".product-items")
//     let divContain = 
//     '<img src="'+addImg+'" alt="">'+
//     '<p><span>'+addPrice+'</span><sup>đ</sup></p>'+
//     '<h1>'+addName+'</h1>' +
//     '<button>Thêm giỏ hàng</button>'
//     addDiv.innerHTML = divContain
//     addDiv.className = "product-item"
//     containProduct.append(addDiv)
//     // console.log(containProduct)
// }
// su ly input
// function addInput(name,table) {
    
// if (name == "IphoneX" ) {
// console.log(table)
// }
// }
// let productImg = document.querySelectorAll(".product-item img")
// let productPrice = document.querySelectorAll(".product-item-text span")
// // console.log(productPrice)
// let productName = document.querySelectorAll(".product-item-text h1")
// let bodytable = document.querySelector("tbody")

// let bnt = document.querySelectorAll("button")
// for(i = 0; i < bnt.length; i++) {
//     bnt[i].addEventListener("click",function(evt) {
//         evt.target
       
//     })  
// }

// bnt.forEach(function(button) {
//     button.addEventListener("click",function(event) {
//         let btnItem = event.target
//         console.log(btnItem)
//     })
// })

// function show1() {
//     let price = productPrice[0].innerHTML
//     let img = productImg[0].src
//     let name = productName[0].innerHTML
//     let tableBody = document.querySelector("tbody")
//     let tableTr = document.createElement("tr")
//     let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del1()">Xóa</button></td>'
//     tableTr.innerHTML = trContain
//     tableBody.append(tableTr)
// console.log(price)
// }
// function show2() {
//     let price = productPrice[1].innerHTML
//     let img = productImg[1].src
//     let name = productName[1].innerHTML
//     let tableBody = document.querySelector("tbody")
//     let tableTr = document.createElement("tr")
//     let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del2()">Xóa</button></td>'
//     tableTr.innerHTML = trContain
//     tableBody.append(tableTr)

// }
// function show3() {
//     let price = productPrice[2].innerHTML
//     let img = productImg[2].src
//     let name = productName[2].innerHTML
//     let tableBody = document.querySelector("tbody")
//     let tableTr = document.createElement("tr")
//     let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del3()">Xóa</button></td>'
//     tableTr.innerHTML = trContain
//     tableBody.append(tableTr)

// }
// function show4() {
//     let price = productPrice[3].innerHTML
//     let img = productImg[3].src
//     let name = productName[3].innerHTML
//     let tableBody = document.querySelector("tbody")
//     let tableTr = document.createElement("tr")
//     let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del4()">Xóa</button></td>'
//     tableTr.innerHTML = trContain
//     tableBody.append(tableTr)

// }
// function show5() {
//     let price = productPrice[4].innerHTML
//     let img = productImg[4].src
//     let name = productName[4].innerHTML
//     let tableBody = document.querySelector("tbody")
//     let tableTr = document.createElement("tr")
//     let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del5()">Xóa</button></td>'
//     tableTr.innerHTML = trContain
//     tableBody.append(tableTr)

// }
// function toltalPrice() {

// }

// // function del1() {
    
// // }