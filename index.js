let users=0;
let comps=0;

const choice=document.querySelectorAll(".how");
const msg=document.querySelector("#msnger");
let uscore=document.querySelector("#userscore");
let cscore=document.querySelector("#compscore");

const getcompch = () =>{
    const options=["rock","paper","scissors"];
    let v=Math.floor(Math.random()*3);
    return options[v];
}
const Draw=()=>{
    console.log("Draw");
    msg.innerText="Draw!";
    msg.style.backgroundColor="#0f1111"
}
const checkwinner=(res)=>{
    if(res){
        console.log("You win!");
        msg.innerText="Congrats, You Win!";
        msg.style.backgroundColor="green";
        users++;
        uscore.innerText=users;

    }else{
        console.log("You lose!");
        msg.innerText="You Lose!, better luck next time!";
        msg.style.backgroundColor="red";
        comps++;
        cscore.innerText=comps;
    }
}


const playgame = (userch) =>{
    const compch=getcompch();
    console.log("user choice=",userch);
    console.log("comp choice=",compch);

    if(compch===userch){
        Draw();
    }
    else{
        let userwin=true;
        if(userch==="rock"){
            userwin = compch==="paper"?false:true;
        }else if(userch==="paper"){
            userwin= compch==="scissors"?false:true;
        }else{
            userwin= compch==="rock"?false:true;
        }
        checkwinner(userwin);
    }
}

choice.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    });
});