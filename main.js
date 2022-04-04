let bnt = document.querySelectorAll("button")
bnt.forEach(function(button){
    button.addEventListener("click",function() {
        event.target // them su kien
        var product = this.parentElement // lay cha cua button
        var productImg = product.querySelector("img").src
        var productPrice = product.querySelector("span").innerHTML
        var productName = product.querySelector("h1").innerHTML
        addcart(productImg,productPrice,productName)
    })
})
function addcart(productImg,productPrice,productName) {
    var addtr = document.createElement("tr")
    var trcontent = ' <td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+productImg+'"alt=""><span>'+productName+'</span></td><td><p><span id="pr">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del1()">Xóa</button></td><td id="toltal"></td>'
    addtr.innerHTML = trcontent
    var carTable = document.querySelector("tbody")
    var nameCart = carTable.querySelector("span")
    // console.log(nameCart)
    // neu PriductName giong nhau thi input cua value do tang 1 
// if (productName === nameCart) {
//     addInput(productName,carTable) // sua ly value
// } else {
    
// }
carTable.append(addtr)
    
    carttotal() // goi den tong

}
function carttotal() {
    var cartItem = document.querySelectorAll(".table-body tr")
    var total = 0
    for(var i = 0; i < cartItem.length; i++) {
        let price = cartItem[i].querySelector("#pr").innerHTML
        let valueInput = cartItem[i].querySelector("input").value
    //   console.log(valueInput)
total += price*valueInput
    }
    total // tong
    var toltalTable = document.querySelector("#toltal")
    var tableTd = document.createElement("td")
    toltalTable.innerHTML = ""
    tableTd.innerHTML = total + ".000"
    toltalTable.append(tableTd)
    // console.log(tableTd)
    
}
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
//         var btnItem = event.target
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