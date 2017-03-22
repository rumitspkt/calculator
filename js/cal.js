var num1 = "";
var num2 = "";
var signCal = "";
var has1Dot_num1 = false;
var has1Dot_num2 = false;

function delete0() {
    if (document.getElementById("screen").innerHTML == "0")
        document.getElementById("screen").innerHTML = "";
}
document.getElementById("number0").addEventListener("click", function() {
    if (Number(num1) != 0 || Number(num2) != 0) {
        delete0();
        document.getElementById("screen").innerHTML += document.getElementById("number0").innerHTML;
    }
    if (signCal.length == 0)
        num1 += document.getElementById("number0").innerHTML;
    else
        num2 += document.getElementById("number0").innerHTML;

});
document.getElementById("number1").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number1").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number1").innerHTML;
    else
        num2 += document.getElementById("number1").innerHTML;
});
document.getElementById("number2").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number2").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number2").innerHTML;
    else
        num2 += document.getElementById("number2").innerHTML;
});
document.getElementById("number3").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number3").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number3").innerHTML;
    else
        num2 += document.getElementById("number3").innerHTML;
});
document.getElementById("number4").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number4").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number4").innerHTML;
    else
        num2 += document.getElementById("number4").innerHTML;
});
document.getElementById("number5").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number5").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number5").innerHTML;
    else
        num2 += document.getElementById("number5").innerHTML;
});
document.getElementById("number6").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number6").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number6").innerHTML;
    else
        num2 += document.getElementById("number6").innerHTML;
});
document.getElementById("number7").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number7").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number7").innerHTML;
    else
        num2 += document.getElementById("number7").innerHTML;
});
document.getElementById("number8").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number8").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number8").innerHTML;
    else
        num2 += document.getElementById("number8").innerHTML;
});
document.getElementById("number9").addEventListener("click", function() {
    delete0();
    document.getElementById("screen").innerHTML += document.getElementById("number9").innerHTML;
    if (signCal.length == 0)
        num1 += document.getElementById("number9").innerHTML;
    else
        num2 += document.getElementById("number9").innerHTML;
});

document.getElementById("dot").addEventListener("click", function() {
    if (signCal.length == 0) {
        if (has1Dot_num1 == false) {
            document.getElementById("screen").innerHTML += document.getElementById("dot").innerHTML;
            num1 += ".";
            has1Dot_num1 = true;
        }
    } else {
        if (has1Dot_num2 == false) {
            document.getElementById("screen").innerHTML += document.getElementById("dot").innerHTML;
            num2 += ".";
            has1Dot_num2 = true;
        }
    }
});
document.getElementById("divi").addEventListener("click", function() {

    document.getElementById("screen").innerHTML = "";
    signCal = document.getElementById("divi").innerHTML;
});
document.getElementById("multi").addEventListener("click", function() {
    document.getElementById("screen").innerHTML = "";
    signCal = document.getElementById("multi").innerHTML;
});
document.getElementById("subt").addEventListener("click", function() {
    document.getElementById("screen").innerHTML = "";
    signCal = document.getElementById("subt").innerHTML;
});
document.getElementById("sum").addEventListener("click", function() {
    document.getElementById("screen").innerHTML = "";
    signCal = document.getElementById("sum").innerHTML;
});


document.getElementById("equal").addEventListener("click", function() {
    num1 = num1.concat(" ");
    num2 = " ".concat(num2);
    num1 = eval(num1 + signCal + num2).toString();
    signCal = "";
    num2 = "";
    has1Dot_num1 = false;
    has1Dot_num2 = false;
    document.getElementById("screen").innerHTML = Number(num1);
});

document.getElementById("ac").addEventListener("click", function() {
    document.getElementById("screen").innerHTML = "";
    num1 = "";
    num2 = "";
    has1Dot_num1 = false;
    has1Dot_num2 = false;
    signCal = "";
});

document.getElementById("pos-nev").addEventListener("click", function() {
    if (signCal.length == 0) {
        if (Number(num1) > 0) {
            num1 = "-".concat(num1);
            document.getElementById("screen").innerHTML = num1;
        } else {
            num1 = num1.replace("-", "");
            document.getElementById("screen").innerHTML = num1;
        }
    } else {
        if (Number(num2) > 0) {
            num2 = "-".concat(num2);
            document.getElementById("screen").innerHTML = num2;
        } else {
            num2 = num2.replace("-", "");
            document.getElementById("screen").innerHTML = num2;
        }
    }
});

document.getElementById("square").addEventListener("click", function(){
    if (signCal.length == 0) {
      num1 = (Number(num1) * Number(num1)).toString();
      document.getElementById("screen").innerHTML = num1;
    } else {
      num2 = (Number(num2) * Number(num2)).toString();
      document.getElementById("screen").innerHTML = num2;
    }
});

document.getElementById("squaret").addEventListener("click", function(){
    if (signCal.length == 0) {
      num1 = Math.sqrt(Number(num1)).toString();
      document.getElementById("screen").innerHTML = num1;
    } else {
      num2 = Math.sqrt(Number(num2)).toString();
      document.getElementById("screen").innerHTML = num2;
    }
});

document.getElementById("factor").addEventListener("click", function(){
    var f = 1;
    var num;
    if (signCal.length == 0) {
      num = Number(num1);
      if (num < 1)
        return;
      for (var i = 1; i <= num; i++) {
        f = f * i;
      }
      num1 = f.toString();
      document.getElementById("screen").innerHTML = num1;
    } else {
      num = Number(num2);
      if (num < 1)
        return;
      for (var i = 1; i <= num; i++) {
        f = f * i;
      }
      num2 = f.toString();
      document.getElementById("screen").innerHTML = num2;
    }
});

document.getElementById("100per").addEventListener("click", function(){
    if (signCal.length == 0) {
      num1 = (Number(num1) / 100).toString();
      document.getElementById("screen").innerHTML = num1;
    } else {
      num2 = (Number(num2) / 100).toString();
      document.getElementById("screen").innerHTML = num2;
    }
});
