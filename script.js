function convert (){
  let kms=document.getElementById("data").value;
  const factory=0.621371;
  let miles= kms*factory;
  document.getElementById("result").innerText=miles+ ' Miles';
}

