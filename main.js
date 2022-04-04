let productImg = document.querySelectorAll(".product-item img")
let productPrice = document.querySelectorAll(".product-item-text span")
// console.log(productPrice)
let productName = document.querySelectorAll(".product-item-text h1")
let bodytable = document.querySelector("tbody")

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

function show1() {
    let price = productPrice[0].innerHTML
    let img = productImg[0].src
    let name = productName[0].innerHTML
    let tableBody = document.querySelector("tbody")
    let tableTr = document.createElement("tr")
    let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del1()">Xóa</button></td>'
    tableTr.innerHTML = trContain
    tableBody.append(tableTr)
console.log(price)
}
function show2() {
    let price = productPrice[1].innerHTML
    let img = productImg[1].src
    let name = productName[1].innerHTML
    let tableBody = document.querySelector("tbody")
    let tableTr = document.createElement("tr")
    let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del2()">Xóa</button></td>'
    tableTr.innerHTML = trContain
    tableBody.append(tableTr)

}
function show3() {
    let price = productPrice[2].innerHTML
    let img = productImg[2].src
    let name = productName[2].innerHTML
    let tableBody = document.querySelector("tbody")
    let tableTr = document.createElement("tr")
    let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del3()">Xóa</button></td>'
    tableTr.innerHTML = trContain
    tableBody.append(tableTr)

}
function show4() {
    let price = productPrice[3].innerHTML
    let img = productImg[3].src
    let name = productName[3].innerHTML
    let tableBody = document.querySelector("tbody")
    let tableTr = document.createElement("tr")
    let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del4()">Xóa</button></td>'
    tableTr.innerHTML = trContain
    tableBody.append(tableTr)

}
function show5() {
    let price = productPrice[4].innerHTML
    let img = productImg[4].src
    let name = productName[4].innerHTML
    let tableBody = document.querySelector("tbody")
    let tableTr = document.createElement("tr")
    let trContain = '<td style="display: flex; align-items: center;"><img style="width: 80px;" src="'+img+'" alt=""><span >'+name+'</span></td><td><p><span>'+price+'</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button onclick="del5()">Xóa</button></td>'
    tableTr.innerHTML = trContain
    tableBody.append(tableTr)

}
function toltalPrice() {

}

// function del1() {
    
// }