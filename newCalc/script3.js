document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("clear").addEventListener("click",clear);
document.getElementById("ndot").addEventListener("click",ndot);
document.getElementById("add").addEventListener("click",add);
document.getElementById("sub").addEventListener("click",sub);
document.getElementById("div").addEventListener("click",div);
document.getElementById("mul").addEventListener("click",mul);
document.getElementById("equal").addEventListener("click",equal);
document.getElementById("raise").addEventListener("click",raise);
document.getElementById("ans").addEventListener("click",ans);
document.getElementById("openpar").addEventListener("click",openpar);
document.getElementById("closepar").addEventListener("click",closepar);

function n1(){
  allnums("1");
}
function n2(){
  allnums("2");
}
function n3(){
  allnums("3");
}
function n4(){
  allnums("4");
}
function n5(){
  allnums("5");
}
function n6(){
  allnums("6");
}
function n7(){
  allnums("7");
}
function n8(){
  allnums("8");
}
function n9(){
  allnums("9");
}
function n0(){
  allnums("0");
}

function allnums(num){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick==="n0"){
      if (value==="0"){
        value = num;
      }else{
        value = value + num;
      }
    }else if(lastclick==="clear"){
      value = num;
    }else if(lastclick!=="ans" && lastclick!=="closepar"){
      value = value + num;
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","nums");
    }
  }
}

function ndot(){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    let otherChars = ["/", "×", "+", "-", ")", "("];
    if (lastclick==="nums"){
      let isNumDefined = false;
      let theNum = "";
      for (j=value.length-1;isNumDefined===false;--j){
        if (otherChars.indexOf(value[j])!==-1 || j===0){
          isNumDefined = true;
          theNum = value.substring(j);
        }
      }
      if (theNum.indexOf(".")===-1){
        value = value + ".";
      }
    }else if(value==="0"){
      value = "0.";
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","ndot");
    }
  }
}

function mul(){
  operator("×");
}
function div(){
  operator("/");
}
function operator(opChar){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick==="nums" || lastclick==="ans" || lastclick==="closepar"){
      value = value + opChar;
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","muldiv");
    }
  }
}

function add(){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick!=="ndot" && lastclick!=="muldiv" && lastclick!=="sub" && lastclick!=="add" && lastclick!=="openpar" && lastclick!=="raise"){
      value = value + "+";
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","add");
    }
  }
}

function sub(){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick!=="ndot" && lastclick!=="sub"){
      if (lastclick==="clear"){
        value = "-";
      }else{
        value = value + "-";
      }
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","sub");
    }
  }
}

function clear(){
  document.getElementById("result").innerHTML = "0";
  document.getElementById("memory").setAttribute("lastclick","clear");
}

function closepar(){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick==="nums" || lastclick==="ans" || lastclick==="closepar"){
      if (value.split("(").length>value.split(")").length){
            value = value + ")";
      }
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","closepar");
    }
  }
}

function openpar(){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick==="muldiv" || lastclick==="add" || lastclick==="sub" || lastclick==="openpar" || lastclick==="raise"){
      value = value + "(";
    }else if(lastclick==="clear"){
      value = "(";
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","openpar");
    }
  }
}

function raise(){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick==="nums" || lastclick==="ans" || lastclick==="clear" || lastclick==="closepar"){
      value = value + "^";
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","raise");
    }
  }
}

function ans(){
  let lastclick = document.getElementById("memory").getAttribute("lastclick");
  let value = document.getElementById("result").innerHTML;
  if (value.length<22){
    let preValue = value;
    if (lastclick==="muldiv" || lastclick==="add" || lastclick==="sub" || lastclick==="openpar" || lastclick==="raise"){
      value = value + "Ans";
    }else if(lastclick==="clear"){
      value = "Ans";
    }
    document.getElementById("result").innerHTML = value;
    if (preValue!==value){
      document.getElementById("memory").setAttribute("lastclick","ans");
    }
  }
}

function equal(){
  let value = document.getElementById("result").innerHTML;
  let answer = document.getElementById("answer").innerHTML;
  value = value.replace("Ans",answer);
  value = Calq(value);
  if (value!=="Syntax Error!"){
    if (isNaN(value) || isFinite(value)===false){
      value = "Math Error!";
    }
  }
  document.getElementById("result").innerHTML = 0;
  document.getElementById("answer").innerHTML = value;
  document.getElementById("memory").setAttribute("lastclick","clear");
}


//Crazy functions begin here
function Calq(strg2){
  while (isParenthesis(strg2)){
    strg2 = CalqParenthesis(strg2);
  }
  while (isRaise(strg2)){
    if (strg2.indexOf("^^")!==-1){
      strg2 = "Syntax Error!";
    }else{
      strg2 = CalqRaise(strg2);
    }
  }
  while (isMultDiv(strg2)){
    if (strg2.indexOf("×/")!==-1 || strg2.indexOf("/×")!==-1 || strg2.indexOf("//")!==-1 || strg2.indexOf("××")!==-1){
      strg2 = "Syntax Error!";
    }else{
      strg2 = CalqMultDiv(strg2);
    }
  }
  if (strg2!=="Syntax Error!"){
    strg2 = eval(strg2);
  }
  return strg2;
}

function isParenthesis(strg2){
  if (strg2.indexOf("(")===-1 && strg2.indexOf(")")===-1){
    return false;
  }else{
    return true;
  }
}

function isMultDiv(strg2){
  if (strg2.indexOf("×")===-1 && strg2.indexOf("/")===-1){
    return false;
  }else{
    return true;
  }
}

function isRaise(strg2){
  if (strg2.indexOf("^")===-1){
    return false;
  }else{
    return true;
  }
}

function isSpecialCase(strg2, leftPar, rightPar){
  strg2.substring(leftPar+1,rightPar);
  if (strg2.substring(leftPar+1,leftPar+2)==="-"){
    if (strg2.substring(rightPar+1,rightPar+2)==="^"){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

function CalqParenthesis(strg2){
  let leftPar = strg2.indexOf("(");
  let rightPar = -2;
  let rightParIsFound = false;
  let ctLeftPar = 0;
  if (leftPar!==-1){
    for (i = leftPar+1; rightParIsFound === false; i++){
      let char = strg2.substring(i,i+1);
      if (i==strg2.length){
        strg2 = "Syntax Error!";
        rightParIsFound = true;
      }else if(char==="("){
        ctLeftPar++;
      }else if(char===")"){
        --ctLeftPar;
        if (ctLeftPar===-1){
          rightPar = i;
          rightParIsFound = true;
        }else if (ctLeftPar<-1){
          string = "Syntax Error!";
          rightParIsFound = true;
        }
      }
    }
  }else{
      strg2 = "Syntax Error!";
  }
  if (strg2 !== "Syntax Error!"){
    let inString = strg2.substring(leftPar+1,rightPar);
    if (isSpecialCase(strg2, leftPar, rightPar)){
      strg2 = specialCaseSolver(strg2, leftPar, rightPar);
    }else{
      let q = Calq(inString);
      strg2 = strg2.substring(0,leftPar)+q+strg2.substring(rightPar+1);
    }
  }
  return strg2;
}

function CalqRaise(strg2){
  ops = ["×", "/", "+", "-", "^"]
  raisePos = strg2.indexOf("^");
  if (raisePos===0 || raisePos===strg2.length-1){
    strg2 = "Syntax Error!";
  }else if (ops.indexOf(strg2.substring(raisePos-1,raisePos))!==-1){
    strg2 = "Syntax Error!";
  }else{
    leftNum="";
    leftIndex = -2;
    rightNum = "";
    rightIndex = -2;
    isLeftFound = false;
    isRightFound = false;
    for (i=raisePos-1; isLeftFound === false; --i){
      char = strg2.substring(i,i+1);
      if (ops.indexOf(char)!==-1){
        isLeftFound = true;
        leftIndex = i;
        leftNum = strg2.substring(i+1,raisePos);
      }else if(i===0){
        isLeftFound = true;
        leftIndex = -1;
        leftNum = strg2.substring(i,raisePos);
      }
    }
    for (i=raisePos+1; isRightFound === false; i++){
      char = strg2.substring(i,i+1);
      if (ops.indexOf(char)!==-1){
        if (raisePos+1===i && char==="-"){
        }else if(raisePos+1===i){
          strg2 = "Syntax Error";
          isRightFound = true;
        }else{
          isRightFound = true;
          rightIndex = i;
          rightNum = strg2.substring(raisePos+1,i);
        }
      }else if (i===strg2.length-1){
        isRightFound = true;
        rightIndex = i+1;
        rightNum = strg2.substring(raisePos+1);
      }
    }
    if (strg2!=="Syntax Error!"){
      numToAdd = Math.pow(leftNum,rightNum);
      strg2 = strg2.substring(0,leftIndex+1) + numToAdd + strg2.substring(rightIndex);
    }
  }
  return strg2;
}

function CalqMultDiv(strg2){
  ops = ["×", "/", "+", "-"];
  multPos = strg2.indexOf("×");
  divPos = strg2.indexOf("/");
  opPos=-2;
  if (multPos===-1){
    opPos = divPos;
  }else if(divPos===-1){
    opPos = multPos;
  }else{
    opPos = Math.min(multPos, divPos);
  }
  if (opPos===0 || opPos===strg2.length-1){
    strg2 = "Syntax Error!";
  }else{
    leftNum="";
    leftIndex = -2;
    rightNum = "";
    rightIndex = -2;
    isLeftFound = false;
    isRightFound = false;
    for (i=opPos-1; isLeftFound === false; --i){
      char = strg2.substring(i,i+1);
      if (ops.indexOf(char)!==-1){
        if (i===0){
          leftNum = strg2.substring(i,opPos);
          leftIndex = i-1;
        }else{
          leftNum = strg2.substring(i+1,opPos);
          leftIndex = i;
        }
        isLeftFound = true;
      }else if(i===0){
        isLeftFound = true;
        leftIndex = -1;
        leftNum = strg2.substring(i,opPos);
      }
    }
    for (i=opPos+1; isRightFound === false; i++){
      char = strg2.substring(i,i+1);
      if (ops.indexOf(char)!==-1){
        if (opPos+1===i && char==="-"){
        }else if(opPos+1===i){
          strg2 = "Syntax Error";
          isRightFound = true;
        }else{
          isRightFound = true;
          rightIndex = i;
          rightNum = strg2.substring(opPos+1,i);
        }
      }else if (i===strg2.length-1){
        isRightFound = true;
        rightIndex = i+1;
        rightNum = strg2.substring(opPos+1);
      }
    }
    if (strg2 !== "Syntax Error"){
      numToAdd = 0;
      if (strg2.substring(opPos,opPos+1)==="×"){
        numToAdd = leftNum*rightNum;
      } else{
        numToAdd = leftNum/rightNum;
      }
      strg2 = strg2.substring(0,leftIndex+1) + numToAdd.toString() + strg2.substring(rightIndex);
    }
  }
  return strg2;
}

function specialCaseSolver(strg2, leftPar, rightPar){
  let bass = strg2.substring(leftPar+1,rightPar);3
  let exp = "";
  charAftRaise = strg2.substring(rightPar+2,rightPar+3);
  ops = ["×", "/", "+"];
  ops2 = ["×", "/", "+", "-", "(", ")", "^"];
  ops3 = ["×", "/", "+", "-", "^"];
  if (ops.indexOf(charAftRaise)!==-1){
    strg2 = "Syntax Error!";
  }else if(rightPar+2===strg2.length){
    strg2 = "Syntax Error!";
  }else if(rightPar+2===strg2.length && ops2.indexOf(charAftRaise!==-1)){
    strg2 = "Syntax Error!";
  }else{
    isRightFound = false;
    for (j=rightPar+2;isRightFound===false;j++){
      if (ops3.indexOf(strg2.substring(j,j+1))!==-1){
        isRightFound = true;
        exp = strg2.substring(rightPar+2,j);
        strg2 = strg2.substring(0,leftPar) + Math.pow(Calq(bass),Calq(exp)) + strg2.substring(j);
      }else if(j===strg2.length-1){
        isRightFound = true;
        exp = strg2.substring(rightPar+2);
        strg2 = strg2.substring(0,leftPar) + Math.pow(Calq(bass),Calq(exp));
      }
    }
  }
  return strg2;
}
