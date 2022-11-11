function dis() {
  if (document.querySelector("#unit1").value == "Mass") {
    document.querySelector(".a1").style.display = "inline";
    document.querySelector(".a2").style.display = "inline";
    document.querySelector("#length1").style.display = "none";
    document.querySelector("#length2").style.display = "none";
  } else if (document.querySelector("#unit1").value == "Length") {
    document.querySelector("#length1").style.display = "inline";
    document.querySelector("#length2").style.display = "inline";
    document.querySelector(".a1").style.display = "none";
    document.querySelector(".a2").style.display = "none";
  }
}

function calculate() {
  u1 = document.querySelector("#unit1").value;
  a = document.querySelector(".a1").value;
  b = document.querySelector(".a2").value;
  c = document.querySelector("#length1").value;
  d = document.querySelector("#length2").value;
  if (u1 == "Mass") {
    switch (a) {
      case "Gram":
        if (b == "Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (b == "micro-gram") {
          document.getElementById("input2").value =
            1e6 * document.getElementById("input1").value;
        } else if (b == "Mili-gram") {
          document.getElementById("input2").value =
            1000 * document.getElementById("input1").value;
        } else if (b == "Kilo-Gram") {
          document.getElementById("input2").value =
            0.001 * document.getElementById("input1").value;
        } else if (b == "tonne") {
          document.getElementById("input2").value =
            1e-6 * document.getElementById("input1").value;
        } else if (b == "Pound") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 453.6;
        } else if (b == "Ounce") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 28.35;
        }
        break;

      case "micro-gram":
        if (b == "Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e6;
        } else if (b == "micro-gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (b == "Mili-gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1000;
        } else if (b == "Kilo-Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e9;
        } else if (b == "tonne") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e12;
        } else if (b == "Pound") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 4.536e8;
        } else if (b == "Ounce") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 2.835e7;
        }
        break;
      case "Mili-gram":
        if (b == "Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1000;
        } else if (b == "micro-gram") {
          document.getElementById("input2").value =
            1000 * document.getElementById("input1").value;
        } else if (b == "Mili-gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (b == "Kilo-Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e6;
        } else if (b == "tonne") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e9;
        } else if (b == "Pound") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 453600;
        } else if (b == "Ounce") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 28350;
        }
        break;
      case "Kilo-Gram":
        if (b == "Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 0.001;
        } else if (b == "micro-gram") {
          document.getElementById("input2").value =
            1e9 * document.getElementById("input1").value;
        } else if (b == "Mili-gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e-6;
        } else if (b == "Kilo-Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (b == "tonne") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1000;
        } else if (b == "Pound") {
          document.getElementById("input2").value =
            2.205 * document.getElementById("input1").value;
        } else if (b == "Ounce") {
          document.getElementById("input2").value =
            35.274 * document.getElementById("input1").value;
        }
        break;
      case "tonne":
        if (b == "Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e-6;
        } else if (b == "micro-gram") {
          document.getElementById("input2").value =
            1e12 * document.getElementById("input1").value;
        } else if (b == "Mili-gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e-9;
        } else if (b == "Kilo-Gram") {
          document.getElementById("input2").value =
            1000 * document.getElementById("input1").value;
        } else if (b == "tonne") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (b == "Pound") {
          document.getElementById("input2").value =
            2205 * document.getElementById("input1").value;
        } else if (b == "Ounce") {
          document.getElementById("input2").value =
            35270 * document.getElementById("input1").value;
        }
        break;
      case "Pound":
        if (b == "Gram") {
          document.getElementById("input2").value =
            453.6 * document.getElementById("input1").value;
        } else if (b == "micro-gram") {
          document.getElementById("input2").value =
            4.536e8 * document.getElementById("input1").value;
        } else if (b == "Mili-gram") {
          document.getElementById("input2").value =
            453600 * document.getElementById("input1").value;
        } else if (b == "Kilo-Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 2.205;
        } else if (b == "tonne") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 2205;
        } else if (b == "Pound") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (b == "Ounce") {
          document.getElementById("input2").value =
            16 * document.getElementById("input1").value;
        }
        break;
      case "Ounce":
        if (b == "Gram") {
          document.getElementById("input2").value =
            28.3495 * document.getElementById("input1").value;
        } else if (b == "micro-gram") {
          document.getElementById("input2").value =
            2.835e7 * document.getElementById("input1").value;
        } else if (b == "Mili-gram") {
          document.getElementById("input2").value =
            28350 * document.getElementById("input1").value;
        } else if (b == "Kilo-Gram") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 35.274;
        } else if (b == "tonne") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 35270;
        } else if (b == "Pound") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 16;
        } else if (b == "Ounce") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        }
        break;
    }
  } else if (u1 == "Length") {
    switch (c) {
      case "Kilo-meter":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            1000 * document.getElementById("input1").value;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            100000 * document.getElementById("input1").value;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            1e6 * document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            1e9 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            1e12 * document.getElementById("input1").value;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.609;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            3281 * document.getElementById("input1").value;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            39370 * document.getElementById("input1").value;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.852;
        }

        break;

      case "meter":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1000;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            100 * document.getElementById("input1").value;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            1000 * document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            1e6 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            1e9 * document.getElementById("input1").value;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1609;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            3.281 * document.getElementById("input1").value;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            39.37 * document.getElementById("input1").value;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1852;
        }
        break;
      case "Centi-meter":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 100000;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 100;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            10 * document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            10000 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            1e7 * document.getElementById("input1").value;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 160900;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 30.48;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 2.54;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 185200;
        }
        break;
      case "Mili-meter":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e6;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1000;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 10;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            1000 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            1e6 * document.getElementById("input1").value;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.609e6;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 304.8;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 25.4;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.852e6;
        }
        break;
      case "Micro-Meter":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e9;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e6;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 10000;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1000;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 1000;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.609e9;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 304800;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 25400;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.852e9;
        }
        break;
      case "Nano-meter":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e12;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e9;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e7;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1e6;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1000;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.609e12;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 3.048e8;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 2.54e7;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.852e12;
        }
        break;
      case "Mile":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 1.609;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            1609 * document.getElementById("input1").value;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            160900 * document.getElementById("input1").value;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            1.609e6 * document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            1.609e9 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            1.609e12 * document.getElementById("input1").value;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 28.35;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 5280;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 63360;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 1.151;
        }
        break;
      case "Foot":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 3281;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 3.281;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            30.48 * document.getElementById("input1").value;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            304.8 * document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            304800 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 3.048e8;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 5280;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 12;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 6076;
        }
        break;
      case "Inch":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 39370;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 39.37;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            2.54 * document.getElementById("input1").value;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            25.4 * document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            25400 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 2.54e7;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 63360;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 12;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value / 72910;
        }
        break;
      case "Nautical-mile":
        if (d == "Kilo-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 1.852;
        } else if (d == "meter") {
          document.getElementById("input2").value =
            1852 * document.getElementById("input1").value;
        } else if (d == "Centi-meter") {
          document.getElementById("input2").value =
            185200 * document.getElementById("input1").value;
        } else if (d == "Mili-meter") {
          document.getElementById("input2").value =
            1.852e6 * document.getElementById("input1").value;
        } else if (d == "Micro-Meter") {
          document.getElementById("input2").value =
            1.852e9 * document.getElementById("input1").value;
        } else if (d == "Nano-meter") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 1.852e12;
        } else if (d == "Mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 1.151;
        } else if (d == "Foot") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 6076;
        } else if (d == "Inch") {
          document.getElementById("input2").value =
            document.getElementById("input1").value * 72910;
        } else if (d == "Nautical-mile") {
          document.getElementById("input2").value =
            document.getElementById("input1").value;
        }
        break;
    }
  }
}
function calculate1() {
  u1 = document.querySelector("#unit1").value;
  a = document.querySelector(".a1").value;
  b = document.querySelector(".a2").value;
  c = document.getElementById("length1").value;
  d = document.getElementById("length2").value;
  if (u1 == "Mass") {
    switch (b) {
      case "Gram":
        if (a == "Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (a == "micro-gram") {
          document.getElementById("input1").value =
            1e6 * document.getElementById("input2").value;
        } else if (a == "Mili-gram") {
          document.getElementById("input1").value =
            1000 * document.getElementById("input2").value;
        } else if (a == "Kilo-Gram") {
          document.getElementById("input1").value =
            0.001 * document.getElementById("input2").value;
        } else if (a == "tonne") {
          document.getElementById("input1").value =
            1e-6 * document.getElementById("input2").value;
        } else if (a == "Pound") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 453.6;
        } else if (a == "Ounce") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 28.35;
        }
        break;

      case "micro-gram":
        if (a == "Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e6;
        } else if (a == "micro-gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (a == "Mili-gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1000;
        } else if (a == "Kilo-Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e9;
        } else if (a == "tonne") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e12;
        } else if (a == "Pound") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 4.536e8;
        } else if (a == "Ounce") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 2.835e7;
        }
        break;
      case "Mili-gram":
        if (a == "Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1000;
        } else if (a == "micro-gram") {
          document.getElementById("input1").value =
            1000 * document.getElementById("input2").value;
        } else if (a == "Mili-gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (a == "Kilo-Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e6;
        } else if (a == "tonne") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e9;
        } else if (a == "Pound") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 453600;
        } else if (a == "Ounce") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 28350;
        }
        break;
      case "Kilo-Gram":
        if (a == "Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 0.001;
        } else if (a == "micro-gram") {
          document.getElementById("input1").value =
            1e9 * document.getElementById("input2").value;
        } else if (a == "Mili-gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e-6;
        } else if (a == "Kilo-Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (a == "tonne") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1000;
        } else if (a == "Pound") {
          document.getElementById("input1").value =
            2.205 * document.getElementById("input2").value;
        } else if (a == "Ounce") {
          document.getElementById("input1").value =
            35.274 * document.getElementById("input2").value;
        }
        break;
      case "tonne":
        if (a == "Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e-6;
        } else if (a == "micro-gram") {
          document.getElementById("input1").value =
            1e12 * document.getElementById("input2").value;
        } else if (a == "Mili-gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e-9;
        } else if (a == "Kilo-Gram") {
          document.getElementById("input1").value =
            1000 * document.getElementById("input2").value;
        } else if (a == "tonne") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (a == "Pound") {
          document.getElementById("input1").value =
            2205 * document.getElementById("input2").value;
        } else if (a == "Ounce") {
          document.getElementById("input1").value =
            35270 * document.getElementById("input2").value;
        }
        break;
      case "Pound":
        if (a == "Gram") {
          document.getElementById("input1").value =
            453.6 * document.getElementById("input2").value;
        } else if (a == "micro-gram") {
          document.getElementById("input2").value =
            4.536e8 * document.getElementById("input1").value;
        } else if (a == "Mili-gram") {
          document.getElementById("input1").value =
            453600 * document.getElementById("input2").value;
        } else if (a == "Kilo-Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 2.205;
        } else if (a == "tonne") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 2205;
        } else if (a == "Pound") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (a == "Ounce") {
          document.getElementById("input1").value =
            16 * document.getElementById("input2").value;
        }
        break;
      case "Ounce":
        if (a == "Gram") {
          document.getElementById("input1").value =
            28.3495 * document.getElementById("input2").value;
        } else if (a == "micro-gram") {
          document.getElementById("input1").value =
            2.835e7 * document.getElementById("input2").value;
        } else if (a == "Mili-gram") {
          document.getElementById("input1").value =
            28350 * document.getElementById("input2").value;
        } else if (a == "Kilo-Gram") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 35.274;
        } else if (a == "tonne") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 35270;
        } else if (a == "Pound") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 16;
        } else if (a == "Ounce") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        }
        break;
    }
  } else if (u1 == "Length") {
    switch (d) {
      case "Kilo-meter":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            1000 * document.getElementById("input2").value;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            100000 * document.getElementById("input2").value;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            1e6 * document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            1e9 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            1e12 * document.getElementById("input2").value;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.609;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            3281 * document.getElementById("input2").value;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            39370 * document.getElementById("input2").value;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.852;
        }

        break;

      case "meter":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1000;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            100 * document.getElementById("input2").value;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            1000 * document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            1e6 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            1e9 * document.getElementById("input2").value;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1609;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            3.281 * document.getElementById("input2").value;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            39.37 * document.getElementById("input2").value;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1852;
        }
        break;
      case "Centi-meter":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 100000;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 100;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            10 * document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            10000 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            1e7 * document.getElementById("input2").value;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 160900;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 30.48;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 2.54;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 185200;
        }
        break;
      case "Mili-meter":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e6;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1000;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 10;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            1000 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            1e6 * document.getElementById("input2").value;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.609e6;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 304.8;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 25.4;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.852e6;
        }
        break;
      case "Micro-Meter":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e9;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e6;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 10000;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1000;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 1000;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.609e9;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 304800;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 25400;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.852e9;
        }
        break;
      case "Nano-meter":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e12;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e9;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e7;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1e6;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1000;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.609e12;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 3.048e8;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 2.54e7;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.852e12;
        }
        break;
      case "Mile":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 1.609;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            1609 * document.getElementById("input2").value;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            160900 * document.getElementById("input2").value;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            1.609e6 * document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            1.609e9 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            1.609e12 * document.getElementById("input2").value;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 28.35;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 5280;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 63360;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 1.151;
        }
        break;
      case "Foot":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 3281;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 3.281;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            30.48 * document.getElementById("input2").value;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            304.8 * document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            304800 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 3.048e8;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 5280;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 12;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 6076;
        }
        break;
      case "Inch":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 39370;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 39.37;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            2.54 * document.getElementById("input2").value;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            25.4 * document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            25400 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 2.54e7;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 63360;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 12;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value / 72910;
        }
        break;
      case "Nautical-mile":
        if (c == "Kilo-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 1.852;
        } else if (c == "meter") {
          document.getElementById("input1").value =
            1852 * document.getElementById("input2").value;
        } else if (c == "Centi-meter") {
          document.getElementById("input1").value =
            185200 * document.getElementById("input2").value;
        } else if (c == "Mili-meter") {
          document.getElementById("input1").value =
            1.852e6 * document.getElementById("input2").value;
        } else if (c == "Micro-Meter") {
          document.getElementById("input1").value =
            1.852e9 * document.getElementById("input2").value;
        } else if (c == "Nano-meter") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 1.852e12;
        } else if (c == "Mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 1.151;
        } else if (c == "Foot") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 6076;
        } else if (c == "Inch") {
          document.getElementById("input1").value =
            document.getElementById("input2").value * 72910;
        } else if (c == "Nautical-mile") {
          document.getElementById("input1").value =
            document.getElementById("input2").value;
        }
        break;
    }
  }
}
