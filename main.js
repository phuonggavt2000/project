function getElement() {
    let bnt = document.querySelectorAll(".product-items button")
    bnt.forEach(function (button) {
        button.addEventListener("click", function () {
            this.target // them su kien
            let product = this.parentElement // lay cha cua button
            let productImg = product.querySelector("img").src
            let productPrice = product.querySelector("span").innerHTML
            let productName = product.querySelector("h1").innerHTML
            addcart(productImg, productPrice, productName)
            console.log(product.parentElement)
        })
    })
}

getElement()

function addcart(productImg, productPrice, productName) {
    let addtr = document.createElement("tr")
    let trcontent = ' <td style="display: flex; align-items: center;"><img style="width: 80px;" src="' + productImg + '"alt=""><span class="same">' + productName + '</span></td><td><p><span id="pr">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button>Xóa</button class="button"></td><td id="toltal"></td>'
    addtr.innerHTML = trcontent // thêm sản phẩm vào thẻ tr
    let carTable = document.querySelector("tbody")
    carTable.append(addtr)
    let buttonCss = carTable.querySelector("tr:last-child button")
    buttonCss.className = "button"
    carttotal() // goi den tong
    deleteproduct()

}

function carttotal(carTable) {
    let cartItem = document.querySelectorAll(".table-body tr")
    let total = 0
    for (let i = 0; i < cartItem.length; i++) {
        let price = cartItem[i].querySelector("#pr").innerHTML
        let valueInput = cartItem[i].querySelector("input").value
        //   console.log(valueInput)
        total += price * valueInput
    }
    total // tong
    let addToltal = document.querySelector("table  tr td")
    let span = document.createElement("span")
    addToltal.innerHTML = ""
    span.innerHTML = "Tổng:   " + total + ".000" + "đ"
    addToltal.append(span)
    let spanClass = addToltal.querySelector("span")
    spanClass.className = "toltal"
    // console.log(spanClass)    
}

function deleteproduct() {
    let bntDel = document.querySelectorAll("tbody tr td button")
    for (i = 0; i < bntDel.length; i++) {
        bntDel[i].addEventListener("click", function () {
            this.target
            let parenDel = this.parentElement.parentElement
            parenDel.remove()
            carttotal()
        }
        )
    }
}

function add() {
    let addImg = document.querySelector(".contain-add #img").value
    let addPrice = document.querySelector(".contain-add #price").value
    let addName = document.querySelector(".contain-add #name").value
    let addDiv = document.createElement("div")
    let containProduct = document.querySelector(".product-items")
    if (addImg === "" || addPrice === "" || addName === "") {
        alert("bạn phải nhập đủ để có thể thêm sản phẩm mới")
    } else {
        let divContain =
            '<img src="' + addImg + '" alt="">' +
            '<p><span>' + addPrice + '</span><sup>đ</sup></p>' +
            '<h1>' + addName + '</h1>' +
            '<button>Thêm giỏ hàng</button>'
        addDiv.innerHTML = divContain
        addDiv.className = "product-item"
        containProduct.append(addDiv)
        getElement()
    }
}

