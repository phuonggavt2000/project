let arrName = Array()
let arrName1 = Array()
function getElement() {
    let bnt = document.querySelectorAll(".product-items button")
    bnt.forEach(function (button) {
        button.addEventListener("click", function () {
            this.target // lay chinh no khi bam vao
            let product = this.parentElement // lay cha cua button
            let productImg = product.querySelector("img").src
            let productPrice = product.querySelector("span").innerHTML
            let productName = product.querySelector("h1").innerHTML
            let carTable = document.querySelector("tbody")
            addItem(productImg, productPrice, productName, carTable)
            // console.log(product.parentElement)
        })
    })
}

getElement()

function addItem(productImg, productPrice, productName, carTable) {
    let addtr = document.createElement("tr")
    let trTable = carTable.querySelectorAll("tr")
    for (i = 0; i < trTable.length; i++) {
        let same = trTable[i].querySelector(".same")
        if (same.innerHTML === productName) {
            let getInput = same.parentElement.parentElement.querySelector("input")
            let getValue = getInput.value
            let totalValue = 0
            let x = parseInt(getValue)
            totalValue = x + 1
            // getValue.innerHTML = totalValue
            getInput.parentElement.innerHTML = '<input style="width: 50px;" type="number" value="' + totalValue + '" min="0">'
            console.log(getInput.parentElement)
            totalItem(carTable)
            return
        }

    }
    let trcontent = ' <td  style="display: flex; align-items: center;"><img style="width: 80px;" src="' + productImg + '"alt=""><span class="same">' + productName + '</span></td><td><p><span id="pr">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 50px;" type="number" value="1" min="0"></td><td><button>Xóa</button class="button"></td><td id="toltal"></td>'
    addtr.innerHTML = trcontent // thêm sản phẩm vào thẻ tr
    carTable.append(addtr)
    // arrName.push(trTable)
    // console.log(arrName)
    let buttonCss = carTable.querySelector("tr:last-child button ")
    buttonCss.className = "button" // them class de CSS
    // goi den tong
    deleteproduct()
    totalItem(carTable)
}

function totalItem(carTable) {
    let cartItem = document.querySelectorAll(".table-body tr")
    let total = 0
    for (let i = 0; i < cartItem.length; i++) {
        let price = cartItem[i].querySelector("#pr").innerHTML
        let valueInput = cartItem[i].querySelector("input").value
        //   console.log(valueInput)
        total += price * valueInput
    }
    total // tong
    let addTotal = document.querySelector("table  tr td")
    let span = document.createElement("span")
    addTotal.innerHTML = ""
    span.innerHTML = "Tổng:   " + total + ".000" + "đ"
    addTotal.append(span)
    let spanClass = addTotal.querySelector("span")
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
            totalItem()
        }
        )
    }
}
// thêm sản phẩm mới
function addNewitem() {
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


