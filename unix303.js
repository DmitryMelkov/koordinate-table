window.addEventListener("DOMContentLoaded", function () {



  // let x1 = parseInt(prompt('vvedite x1'));
  // let y1 = parseInt(prompt('vvedite y1'));
  // let z1 = parseInt(prompt('vvedite z1'));
  // let n1 = {x1, y1, z1};

  // let n1 = { x1: 135.29, y1: 31.99, z1: 99 };
  // console.log(n1);

  // let n2 = {};
  // n2.x2 = n1.x1;
  // n2.y2 = n1.y1;
  // n2.z2 = n1.z1 + z;
  // console.log(n2);

  // let n3 = {};
  // n3.x3 = n2.x2 - a1;
  // n3.y3 = n2.y2;
  // n3.z3 = n2.z2;
  // console.log(n3);

  // let n4 = {};
  // n4.x4 = n3.x3;
  // n4.y4 = n3.y3 + b1;
  // n4.z4 = n3.z3;
  // console.log(n4);

  // let n5 = {};
  // n5.x5 = n2.x2;
  // n5.y5 = n4.y4;
  // n5.z5 = n4.z4;
  // console.log(n5);

  // let n6 = {};
  // n6.x6 = n2.x2;
  // n6.y6 = n2.y2;
  // n6.z6 = n4.z4;
  // console.log(n6);

  // let n7 = {};
  // n7.z7 = n1.z1;
  // console.log(n7);

  // let num = 1.23456;

  // console.log( Math.floor(num * 100) / 100 );

  let xInput = document.querySelector("#x-input");
  let yInput = document.querySelector("#y-input");
  let zInput = document.querySelector("#z-input");
  let buttonRun = document.querySelector("#ok-block");

  buttonRun.addEventListener("click", function () {
    let a = document.querySelector("#a-input").value;
    let b = document.querySelector("#b-input").value;

    let c = 1.3;
    let z = 58.38;
    let a1 = a - c * 2;
    let b1 = b - c * 2;
    console.log(a1 + " Длина а1");
    console.log(b1 + " Длина b1");


    x1Value = xInput.value;
    y1Value = yInput.value;
    z1Value = zInput.value;

    //n1
    let n1 = { x1: x1Value, y1: y1Value, z1: z1Value };

    document.querySelector("#n1-x-input").innerHTML = x1Value;
    document.querySelector("#n1-y-input").innerHTML = y1Value;
    document.querySelector("#n1-z-input").innerHTML = z1Value;

    //n2
    let n2 = {};

    n2.x2 = Number(n1.x1);
    n2.y2 = Number(n1.y1);
    n2.z2 = Number(n1.z1) + Number(z);

    x2Value = n2.x2;
    y2Value = n2.y2;
    z2Value = n2.z2;

    document.querySelector("#n2-x-input").innerHTML = x2Value;
    document.querySelector("#n2-y-input").innerHTML = y2Value;
    document.querySelector("#n2-z-input").innerHTML = z2Value;

    //n3
    let n3 = {};

    n3.x3 = Math.floor((Number(n2.x2) - Number(a1)) * 100) / 100;
    n3.y3 = Number(n2.y2);
    n3.z3 = Number(n2.z2);

    x3Value = n3.x3;
    y3Value = n3.y3;
    z3Value = n3.z3;

    document.querySelector("#n3-x-input").innerHTML = x3Value;
    document.querySelector("#n3-y-input").innerHTML = y3Value;
    document.querySelector("#n3-z-input").innerHTML = z3Value;

    //n4
    let n4 = {};

    n4.x4 = Number(n3.x3);
    n4.y4 = Math.floor((Number(n3.y3) + Number(b1)) * 100) / 100;
    n4.z4 = Number(n3.z3);

    x4Value = n4.x4;
    y4Value = n4.y4;
    z4Value = n4.z4;

    document.querySelector("#n4-x-input").innerHTML = x4Value;
    document.querySelector("#n4-y-input").innerHTML = y4Value;
    document.querySelector("#n4-z-input").innerHTML = z4Value;

    //n5
    let n5 = {};

    n5.x5 = Number(n2.x2);
    n5.y5 = Number(n4.y4);
    n5.z5 = Number(n4.z4);

    x5Value = n5.x5;
    y5Value = n5.y5;
    z5Value = n5.z5;

    document.querySelector("#n5-x-input").innerHTML = x5Value;
    document.querySelector("#n5-y-input").innerHTML = y5Value;
    document.querySelector("#n5-z-input").innerHTML = z5Value;

    //n6
    let n6 = {};

    n6.x6 = Number(n2.x2);
    n6.y6 = Number(n2.y2);
    n6.z6 = Number(n4.z4);

    x6Value = n6.x6;
    y6Value = n6.y6;
    z6Value = n6.z6;

    document.querySelector("#n6-x-input").innerHTML = x6Value;
    document.querySelector("#n6-y-input").innerHTML = y6Value;
    document.querySelector("#n6-z-input").innerHTML = z6Value;

    //n7

    let n7 = {};

    n7.z7 = Number(n1.z1);

    z7Value = n7.z7;

    document.querySelector("#n7-z-input").innerHTML = z7Value;
  });
});
