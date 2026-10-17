function errHandler(str, id, mess, isNumber=true) {
    if (isNaN(str) && isNumber || !str) {
        document.getElementById(id).innerHTML = mess
        return true
    } else if (/\d/.test(str) && !isNumber) {
        document.getElementById(id).innerHTML = mess
        return true
    }
}

function bulb() {
    const status = document.getElementById("light").src
    if (status.includes("bulboff.gif")) {
        document.getElementById("light").src = "./images/bulbon.gif"
        document.getElementById("btn").innerHTML = "Tắt đèn"
        document.getElementById("btn").style.backgroundColor = "yellow"
    } else {
        document.getElementById("light").src = "./images/bulboff.gif"
        document.getElementById("btn").innerHTML = "Bật đèn"
        document.getElementById("btn").style.backgroundColor = "grey"
    }
}

function numCheck(id) {
    const num = document.getElementById(id).value
    document.getElementById("result").innerHTML = "Kết quả:"
    
    if (num % 2 === 0) {
        document.getElementById("result").innerHTML += `<b>${num}</b> là số chẵn.`
    } else {
        document.getElementById("result").innerHTML += `<b>${num}</b> là số lẻ.`
    }
    document.getElementById(id).value = "1"
}
function pointRate(id) {
    const num = document.getElementById(id).value.trim()
    var result = "Kết quả: "

    if (90 <= num && num <= 100) {
        result += "A (90 - 100)"
    } else if (80 <= num && num < 90) {
        result += "B (80 - 89)" 
    } else if (70 <= num && num < 80) {
        result += "C (70 - 79)"
    } else if (60 <= num && num < 70) {
        result += "D (60 - 69)"
    } else if (0 <= num && num < 60) {
        result += "F (<60)"
    } else {
        result = "Ngoài giới hạn từ 0 - 100"
    }
    document.getElementById("point").innerHTML = result
    document.getElementById(id).value = "0"
}

function age(id) {
    let birth = document.getElementById(id).value.trim()
    let curYear = new Date().getFullYear()
    document.getElementById("yourAge").innerHTML = `Tuổi của bạn là: ${curYear - birth} tuổi.`

    errHandler(birth, "yourAge", "Vui lòng nhập tuổi là số hợp lệ!")
    document.getElementById(id).value = ""
}

function love(m, f) {
    const mName = document.getElementById(m).value.trim()
    const fmName = document.getElementById(f).value.trim()

    const rate = Math.floor(Math.random()*100) + 1
    if (rate > 50) {
        var result = `${mName} ♥ ${fmName} với ${rate} điểm. Chúc mừng 2 bạn rất hợp.`
    } else {
        var result = `${mName} ♥ ${fmName} với ${rate} điểm. Chia buồn cùng 2 bạn.`
    }
   
    document.getElementById("loveResult").innerHTML = result
    errHandler(mName,"loveResult", "Vui lòng nhập đúng và đủ thông tin 2 người!", false)
    errHandler(fmName,"loveResult", "Vui lòng nhập đúng và đủ thông tin 2 người!", false)
    document.getElementById(m).value = ""
    document.getElementById(f).value = ""
}

function randGame() {
    const human = document.getElementById("inp").value
    const machine = Math.floor(Math.random()*10) + 1
    document.getElementById("machine").innerHTML = machine

    if (human == machine) {
        document.getElementById("gameResult").innerHTML = `Bạn đã thắng!`
    } else {
        document.getElementById("gameResult").innerHTML = `Chúc may mắn lần sau!`
    }
}

function choice(option) {
    const lst = ["Búa", "Bao", "Kéo"]
    const usr = option.slice(-1)
    const bot = Math.floor(Math.random()*3)
    document.getElementById("choice").innerHTML = lst[usr]
    document.getElementById("machine2").innerHTML = lst[bot]
    var result

    if (usr < bot) {
        result = 'Bạn đã thua.'
        if (bot == 2 && usr == 0) {
            result = 'Bạn đã thắng.'
        }
    } else if (usr > bot) {
        result = 'Bạn đã thắng.'
        if (usr == 2 && bot == 0) {
            result = 'Bạn đã thua.'
        }
    } else {
        result = 'Bạn đã hòa.'
    }

    document.getElementById("game2Result").innerHTML = result
}

function dice(id, lst, load) {
    document.getElementById("loading-"+id).style.display = "none"
    
    if (id == "carrer" && errHandler(document.getElementById("usrName").value, id, "Tên mình cũng nhập sai sao mà đoán",false)) {
        return false
    } else {
        var time = 300
        var step = 15
        document.getElementById("loading-"+id).style.display = "block"
        document.getElementById("loading-"+id).innerHTML = `Đang ${load} ...`
        while (step > 0) {
            setTimeout(() => {
                document.getElementById(id).innerHTML = lst[Math.floor(Math.random() * lst.length)]
            }, time)
            if (step == 3) {
                time += 350
            } else {
                time += 100
            }
            step -= 1
        }
        setTimeout(() => {
            document.getElementById("loading-"+id).innerHTML = id == 'redem'? 
            `Chúc mừng bạn đã nhận được ${document.getElementById(id).textContent}`:
            id == 'carrer'? `${document.getElementById('usrName').value} sẽ làm nghề 
            ${document.getElementById(id).textContent}`: `Hoàn thành!`
        }, time)
    }
}

function calc(id) {
    const numA = document.getElementById("numA").value
    const numB = document.getElementById("numB").value
    const sep = id.slice(-1)
    if (numB == 0 && sep === '/') {
        document.getElementById("resultCalc").innerHTML = "Không thể chia cho 0!"
    } else {
        document.getElementById("resultCalc").innerHTML =
        new Function(`return '${numA} ${sep} ${numB} = '.concat(${numA}${sep}${numB})`)()
    }
}

function checkPwd(id) {
    const _length = document.getElementById(id).value.length
    document.getElementById("warning").style.display = _length == 0? "none":"block"
    if (_length < 8) {
        document.getElementById("warning").innerText = "Mật khẩu quá ngắn!"
        document.getElementById("warning").style.color = "red"
    } else {
        document.getElementById("warning").innerText = "Mật khẩu hợp lệ."
        document.getElementById("warning").style.color = "green"
    }
}