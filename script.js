document.querySelector(".theme").addEventListener("click",mixed);
let keys=document.querySelectorAll(".bgclr");
let digits=document.querySelectorAll(".num");
let results=document.querySelector(".results");
let history=document.querySelector(".history");
let count=false;
function randomColor(){
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    let val="rgb("+x+","+y+","+z+")";
    return val;
}

function mixed(e){
    count=false;
    document.querySelector("body").style.filter="none";
    let random_color=randomColor();
    keys.forEach(i=>{
        i.style.backgroundColor= random_color;
        // i.addEventListener("mouseover",z=>{

        // })
    });
    digits.forEach(run);
    function run(i){
        i.style.color=random_color;
        i.addEventListener("mouseover",z=>{
            i.style.backgroundColor=random_color;
            i.style.color="white";
            i.style.transition="ease-in 0.2s"
        })
        i.addEventListener("mouseout",z=>{
            i.style.backgroundColor="white";
            i.style.color=random_color;
        })
    }
    results.style.borderColor= random_color;
    results.style.color= random_color;
    if(window.innerWidth > 550){
        document.querySelector("body").style.backgroundImage="linear-gradient(90deg,"+random_color+",white,white,white,white,"+random_color+")";
    } 
}

digits.forEach(e=>e.addEventListener("click",putValue));
function putValue(key){
    if(results.innerText==="0"){
        results.innerText="";
    }
    results.innerText+=key.target.innerText;
}
document.querySelector(".allclear").addEventListener("click",e=>{//AC
    results.innerText=0;
});
document.querySelector(".add").addEventListener("click",e=>{//+
    let bag=modify(results.innerText);
    results.innerText=myeval(bag)+"+";
});
 document.querySelector(".subtract").addEventListener("click",e=>{//-
    let bag=modify(results.innerText);
    results.innerText=myeval(bag)+"–";
});
document.querySelector(".multiply").addEventListener("click",e=>{//x
    let bag=modify(results.innerText);
    results.innerText=myeval(bag)+"x";
});
document.querySelector(".divide").addEventListener("click",e=>{///
    let bag=modify(results.innerText);
    results.innerText=myeval(bag)+"÷";
});
document.querySelector(".negative").addEventListener("click",e=>{///-
    let bag=results.innerText;
    if(results.innerText[0]=="-"){
        results.innerText=bag.substring(1,bag.length);
    }else{
        results.innerText="-"+bag;
    }
});
document.querySelector(".root").addEventListener("click",e=>{///
    results.innerText=(+results.innerText)**0.5
});
document.querySelector(".decimal").addEventListener("click",e=>{//.
    let bag=results.innerText;
    if(!bag.includes(".")||bag.includes("+")||bag.includes("-")||bag.includes("*")||bag.includes("/")){
        results.innerText=bag+".";
    }
});
document.querySelector(".clear").addEventListener("click",e=>{//.
    let n=results.innerText.length;
    if(n==1){
        results.innerText=0;
    }else{
        results.innerText=results.innerText.substring(0, n-1);
    }
});
document.querySelector(".percent").addEventListener("click",e=>{//%
    
    let bag=results.innerText;
    if(bag.includes("+")){
        let arr=bag.split("+");
        let val=((+arr[0])*(+arr[1]))/100;
        results.innerText=(+arr[0])+val;
    }else if(bag.includes("–")){
        let arr=bag.split("–");
        let val=((+arr[0])*(+arr[1]))/100;
        results.innerText=(+arr[0])-val;
    }else if(bag.includes("x")){
        let arr=bag.split("x");
        results.innerText=(+arr[0]*(+arr[1]))/100;
    }else if(bag.includes("÷")){
        let arr=bag.split("÷");
        results.innerText=(+arr[0]/(+arr[1]))/100;
    }
    else{
        results.innerText+="%";
    }

});
document.querySelector(".equal").addEventListener("click",e=>{//=
    if(results.innerText.includes("%")){
        results.innerText=special_per(results.innerText);
    }
    results.innerText=myeval(results.innerText)
});

document.querySelector(".fil").addEventListener("click",e=>{
    count=true;
    if(count){
        if(results.innerText=="0"){
            results.innerText="HELLO !";
        }
        if(results.innerText=="1"){
            results.innerText="Sandeep";
        }
        if(results.innerText=="2"){
            results.innerText="💋💋";
        }
        if(results.innerText=="3"){
           location.href="https://calculator.com";
        }
        if(results.innerText=="4"){
            location.href="https://google.com";
        }
        if(results.innerText=="5"){
            location.href="https://calcyalpha.netlify.app";
        }
        if(results.innerText=="6"){
            location.href="https://sparkamerica.netlify.app"
        }
        if(results.innerText=="7"){
            results.innerText="I💘U";
        }
        if(results.innerText=="8"){
            results.innerText="Need 🔑"
        }
        if(results.innerText=="9"){
            results.innerText="Bye Bye !"
        }
    }
});
function modify(x){
    let n=x.length-1;
    if(x[n]=="+"||x[n]=="-"||x[n]=="*"||x[n]=="/"||x[n]=="%"){
        x=x.substring(0, n);
    }
    return x;
}

function special_per(x){
    let ans=0;
    let arr=x.split("%");
    let val=+arr[0]/100;
    ans=+arr[1]*val
    return ans;
 }
 function myeval(str){
    history.innerText=results.innerText;
    if(str.includes("+")){
        str=str.split("+").map(Number)
            return str[0]+str[1];
    }else
    if(str.includes("–")){
        str=str.split("–").map(Number)
            return str[0]-str[1];
    }else
    if(str.includes("x")){
        str=str.split("x").map(Number)
            return str[0]*str[1];
    }else
    if(str.includes("÷")){
        str=str.split("÷").map(Number)
            return str[0]/str[1];
    }else
    return str;
 }
