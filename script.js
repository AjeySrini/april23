var div =document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="150px";

var inputdate=document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","dob");
inputdate.style.width="300px";
inputdate.style.height="25px";

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.style.margin="10px";
button.innerHTML="Display Data";

button.addEventListener("click",displaydata);
div.append(inputdate,button);
document.body.append(div);

function displaydata(e){
    var input =document.getElementById("dob").value;
console.log(input);
    var birthdate=new Date(input);
    console.log(birthdate);
    var currentdate= new Date();
    console.log(currentdate);
    var millisec=parseInt(currentdate.getTime())-parseInt(birthdate.getTime());
    console.log(millisec);
    var second=Math.floor(millisec/1000);
    console.log(second);
    var minutes=Math.floor(second/60);
    console.log(minutes);
    var hrs=Math.floor(minutes/60);
    console.log(hrs);
    var days=Math.floor(hrs/24);
    console.log(days);
    e.preventDefault();
    var yeardiff=currentdate.getFullYear()-birthdate.getFullYear();
    var monthsdiff=yeardiff*12+(currentdate.getMonth()-birthdate.getMonth());
    console.log("month",monthsdiff);
    console.log(yeardiff);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML= "Selected date is   :  "+birthdate;
    document.body.append(disp);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML= "MilliSecond  :"+millisec;
    document.body.append(disp);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML="Second  :" +second;
    document.body.append(disp);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML="Minutes  :" +minutes;
    document.body.append(disp);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML="Hours  :" +hrs;
    document.body.append(disp);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML="Days   :" +days;
    document.body.append(disp);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML="Months   :" +monthsdiff;
    document.body.append(disp);

    var disp =document.createElement("div");
    disp.setAttribute("type","text");
    disp.style.textAlign="center";
disp.style.marginTop="10px";
    disp.innerHTML="Years     :" +yeardiff;
    document.body.append(disp);
    


}
