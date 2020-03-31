function p01Func() {
    var num = parseInt(prompt("Enter number"));
    var prime = true;
    var d = 2;
    while (prime == true && d <= num / 2) {
        if (num % d == 0) {
            prime = false;
        }
        d = d + 1;
    }
    if (prime == true) {
        alert("Number is prime ")
    } else {
        alert("Number is not prime")
    }


}
function p02Func() {
    var num = 0;
    var sum1 = 0;
    var sum2 = 0;
    for (i = 1; i <= 4; i++) {
        num = prompt("Input number")
        sum1 = sum1 + num

    }
    for (i = 1; i <= 4; i++) {
        num = prompt("Input number")
        sum2 = sum2 + num
    }
    if (sum1 == sum2) {
        alert("Yes")
    } else {
        alert("No")
    }
}
function p03Func() {
    var num = 0;
    var p = 0;
    var n = 0;
    do {
        num = parseInt(prompt("Input number"));
        if (num > 0) {
            p = p + 1
        } if (num < 0) {
            n = n + 1
        }

    } while (num != 0 && p <= 2);

}
function p04Func() {
    var num = 0;
    var cnt1 = 0;
    var cnt2 = 0;
    for (i = 1; i <= 4; i++) {
        num = prompt("Input number")
        if (num < 0) {
            cnt1++
        }
    }
    for (i = 1; i <= 4; i++) {
        num = prompt("Input number")
        if (num > 0) {
            cnt2++
        }
    }
    if (cnt1 == cnt2) {
        alert("Yes")
    } else {
        alert("No")
    }
}
function p05Func() {
    var num = parseInt(prompt("Enter number"));
    var i;
    for (i = 2; i <= num; i++) {
        if (prime(i) == true) {
            alert(i)
        }
    }
}
function p06Func() {
    var num = parseInt(prompt("Enter a positive number"));
    var i;
    for (i = 2; i <= num; i++) {
        if (prime(i) == true && digit7(i) == true) {
            alert(i)
        }
    }
}
function prime(num) {
    var prime = true;
    var d = 2;
    while (prime == true && d <= num / 2) {
        if (num % d == 0) {
            prime = false;
        }
        d = d + 1;
    }
    return prime;
}
function digit7(num) {
    var flag = false;
    while (num > 0 && flag == false) {
        if (num % 10 == 7) {
            flag = true;
        }
        num = Math.floor(num / 10);
    }
    return flag;

}