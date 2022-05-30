window.addEventListener("DOMContentLoaded", function () {
  let a2 = 9;
  let a3 = 73;
  let a4 = 17;
  let a5 = 6;
  let a6 = 6;
  let a7 = 17;
  let a8 = 73;
  let a9 = 9;

  let b1 = 13.5;
  let b2 = 15;
  let b3 = 15.5;
  let b4 = 13;
  let b5 = 31;
  let b6 = 31;
  let b7 = 13;
  let b8 = 15.5;
  let b9 = 15;
  let b10 = 13.5;

  let n1 = { x1: 45.04, y1: 53.91, z1: 176.55 };
  console.log(n1);

  let n2 = {};
  n2.x2 = n1.x1;
  n2.y2 = n1.y1 + b1;
  n2.z2 = n1.z1;
  console.log(n2);

  let n3 = {};
  n3.x3 = n2.x2 + a2;
  n3.y3 = n2.y2 + b2;
  n3.z3 = n2.z2;
  console.log(n3);

  let n4 = {};
  n4.x4 = n3.x3 + a3;
  n4.y4 = n3.y3 + b3;
  n4.z4 = n3.z3;
  console.log(n4);

  let n5 = {};
  n5.x5 = n4.x4 + a4;
  n5.y5 = n4.y4 - b4;
  n5.z5 = n4.z4;
  console.log(n5);

  let n6 = {};
  n6.x6 = n5.x5 + a5;
  n6.y6 = n5.y5 - b5;
  n6.z6 = n5.z5;
  console.log(n6);

  let n7 = {};
  n7.x7 = n6.x6 - a6;
  n7.y7 = n6.y6 - b6;
  n7.z7 = n6.z6;
  console.log(n7);

  let n8 = {};
  n8.x8 = n7.x7 - a7;
  n8.y8 = n7.y7 - b7;
  n8.z8 = n7.z7;
  console.log(n8);

  let n9 = {};
  n9.x9 = n8.x8 - a8;
  n9.y9 = n8.y8 + b8;
  n9.z9 = n8.z8;
  console.log(n9);

  let n10 = {};
  n10.x10 = n9.x9 - a9;
  n10.y10 = n9.y9 + b9;
  n10.z10 = n9.z9;
  console.log(n10);

  let n11 = {};
  n11.x11 = n10.x10;
  n11.y11 = n10.y10 + b10;
  n11.z11 = n10.z10;
  console.log(n11);

  let n12 = {};
  n12.x12 = n11.x11;
  n12.y12 = n11.y11;
  n12.z12 = n11.z11 - 59.55;
  console.log(n12);

  let xInput = document.querySelector("#x-input");
  let yInput = document.querySelector("#y-input");
  let zInput = document.querySelector("#z-input");
  let buttonRun = document.querySelector("#ok-block");

  buttonRun.addEventListener("click", function () {
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
    n2.y2 = Math.floor((Number(n1.y1) + Number(b1)) * 100) / 100;
    n2.z2 = Number(n1.z1);

    x2Value = n2.x2;
    y2Value = n2.y2;
    z2Value = n2.z2;

    document.querySelector("#n2-x-input").innerHTML = x2Value;
    document.querySelector("#n2-y-input").innerHTML = y2Value;
    document.querySelector("#n2-z-input").innerHTML = z2Value;

    //n3
    let n3 = {};

    n3.x3 = Math.floor((Number(n2.x2) + Number(a2)) * 100) / 100;
    n3.y3 = Math.floor((Number(n2.y2) + Number(b2)) * 100) / 100;
    n3.z3 = Number(n2.z2);

    x3Value = n3.x3;
    y3Value = n3.y3;
    z3Value = n3.z3;

    document.querySelector("#n3-x-input").innerHTML = x3Value;
    document.querySelector("#n3-y-input").innerHTML = y3Value;
    document.querySelector("#n3-z-input").innerHTML = z3Value;

    //n4
    let n4 = {};

    n4.x4 = Math.floor((Number(n3.x3) + Number(a3)) * 100) / 100;
    n4.y4 = Math.floor((Number(n3.y3) + Number(b3)) * 100) / 100;
    n4.z4 = Number(n3.z3);

    x4Value = n4.x4;
    y4Value = n4.y4;
    z4Value = n4.z4;

    document.querySelector("#n4-x-input").innerHTML = x4Value;
    document.querySelector("#n4-y-input").innerHTML = y4Value;
    document.querySelector("#n4-z-input").innerHTML = z4Value;

    //n5
    let n5 = {};

    n5.x5 = Math.floor((Number(n4.x4) + Number(a4)) * 100) / 100;
    n5.y5 = Math.floor((Number(n4.y4) - Number(b4)) * 100) / 100;
    n5.z5 = Number(n4.z4);

    x5Value = n5.x5;
    y5Value = n5.y5;
    z5Value = n5.z5;

    document.querySelector("#n5-x-input").innerHTML = x5Value;
    document.querySelector("#n5-y-input").innerHTML = y5Value;
    document.querySelector("#n5-z-input").innerHTML = z5Value;

    //n6
    let n6 = {};

    n6.x6 = Math.floor((Number(n5.x5) + Number(a5)) * 100) / 100;
    n6.y6 = Math.floor((Number(n5.y5) - Number(b5)) * 100) / 100;
    n6.z6 = Number(n5.z5);

    x6Value = n6.x6;
    y6Value = n6.y6;
    z6Value = n6.z6;

    document.querySelector("#n6-x-input").innerHTML = x6Value;
    document.querySelector("#n6-y-input").innerHTML = y6Value;
    document.querySelector("#n6-z-input").innerHTML = z6Value;

    //n7
    let n7 = {};

    n7.x7 = Math.floor((Number(n6.x6) - Number(a6)) * 100) / 100;
    n7.y7 = Math.floor((Number(n6.y6) - Number(b6)) * 100) / 100;
    n7.z7 = Number(n6.z6);

    x7Value = n7.x7;
    y7Value = n7.y7;
    z7Value = n7.z7;

    document.querySelector("#n7-x-input").innerHTML = x7Value;
    document.querySelector("#n7-y-input").innerHTML = y7Value;
    document.querySelector("#n7-z-input").innerHTML = z7Value;

    //n8
    let n8 = {};

    n8.x8 = Math.floor((Number(n7.x7) - Number(a7)) * 100) / 100;
    n8.y8 = Math.floor((Number(n7.y7) - Number(b7)) * 100) / 100;
    n8.z8 = Number(n7.z7);

    x8Value = n8.x8;
    y8Value = n8.y8;
    z8Value = n8.z8;

    document.querySelector("#n8-x-input").innerHTML = x8Value;
    document.querySelector("#n8-y-input").innerHTML = y8Value;
    document.querySelector("#n8-z-input").innerHTML = z8Value;

    //n9
    let n9 = {};

    n9.x9 = Math.floor((Number(n8.x8) - Number(a8)) * 100) / 100;
    n9.y9 = Math.floor((Number(n8.y8) + Number(b8)) * 100) / 100;
    n9.z9 = Number(n8.z8);

    x9Value = n9.x9;
    y9Value = n9.y9;
    z9Value = n9.z9;

    document.querySelector("#n9-x-input").innerHTML = x9Value;
    document.querySelector("#n9-y-input").innerHTML = y9Value;
    document.querySelector("#n9-z-input").innerHTML = z9Value;

    //n10
    let n10 = {};

    n10.x10 = Math.floor((Number(n9.x9) - Number(a9)) * 100) / 100;
    n10.y10 = Math.floor((Number(n9.y9) + Number(b9)) * 100) / 100;
    n10.z10 = Number(n9.z9);

    x10Value = n10.x10;
    y10Value = n10.y10;
    z10Value = n10.z10;

    document.querySelector("#n10-x-input").innerHTML = x10Value;
    document.querySelector("#n10-y-input").innerHTML = y10Value;
    document.querySelector("#n10-z-input").innerHTML = z10Value;

    //n11
    let n11 = {};

    n11.x11 = Number(n10.x10);
    n11.y11 = Math.floor((Number(n10.y10) + Number(b10)) * 100) / 100;
    n11.z11 = Number(n10.z10);

    x11Value = n11.x11;
    y11Value = n11.y11;
    z11Value = n11.z11;

    document.querySelector("#n11-x-input").innerHTML = x11Value;
    document.querySelector("#n11-y-input").innerHTML = y11Value;
    document.querySelector("#n11-z-input").innerHTML = z11Value;

    //n12
    let n12 = {};

    n12.x12 = Number(n11.x11);
    n12.y12 = Number(n11.y11);
    n12.z12 = Math.floor((Number(n11.z11) - 59.55) * 100) / 100;

    x12Value = n12.x12;
    y12Value = n12.y12;
    z12Value = n12.z12;

    document.querySelector("#n12-x-input").innerHTML = x12Value;
    document.querySelector("#n12-y-input").innerHTML = y12Value;
    document.querySelector("#n12-z-input").innerHTML = z12Value;
  });
});
