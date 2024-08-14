let FC=document.querySelector(".firstclass");
let PTS=document.querySelector(".points_table");
let MP=document.querySelector(".mypoint");
let YP=document.querySelector(".yourpoint");
let B1=document.querySelector(".box1");
let B2=document.querySelector(".box2");
let B3=document.querySelector(".box3");
let MSG=document.querySelector(".msg")
let container=document.querySelector(".msgContainer");
let user_choice;
let comp_choice;
let user_score=0;
let comp_score=0;
const user_winner=()=>{
    container.classList.remove("hide");
    MP.innerText=user_score;
    MSG.innerText="Congratulation,the winner is USER";
    PTS.classList.remove("hide");

};
const comp_winner=()=>{
    container.classList.remove("hide");
    YP.innerText=comp_score;
    MSG.innerText="Congratulation,the winner is COMPUTER";
    PTS.classList.remove("hide");
};
const COMP_CHOICE=(B1,B2,B3)=>{
    const choices=["ROCK","PAPER","SCISSOR"];
    const randomIndex=Math.floor(Math.random() * choices.length);
    comp_choice=choices[randomIndex];
    console.log('computer choice=',comp_choice);
};
const play_game=(user_choice,comp_choice)=>{
    if(user_choice=="ROCK" && comp_choice=="PAPER"){
        comp_score++;
        comp_winner();
    }
    else if(user_choice=="ROCK" && comp_choice=="SCISSOR"){
        user_score++;
        user_winner();
    }
    else if(user_choice=="PAPER" && comp_choice=="ROCK"){
        user_score++;
        user_winner();
    }
    else if(user_choice=="PAPER" && comp_choice=="SCISSOR"){
        comp_score++;
        comp_winner();
    }
    else if(user_choice=="SCISSOR" && comp_choice=="ROCK"){
        comp_score++;
        comp_winner();
    }
    else if(user_choice=="SCISSOR" && comp_choice=="PAPER"){
        user_score++;
        user_winner();
    }
    else{
        container.classList.remove("hide");
        MSG.innerText="It's a TIE";
    }
}
B1.addEventListener("click",()=>{
    console.log("user choice=ROCK");
    user_choice="ROCK";
    COMP_CHOICE();
    play_game(user_choice,comp_choice);
});
B2.addEventListener("click",()=>{
    console.log("user choice=PAPER");
    user_choice="PAPER";
    COMP_CHOICE();
    play_game(user_choice,comp_choice)
});
B3.addEventListener("click",()=>{
    console.log("user choice=SCISSOR");
    user_choice="SCISSOR";
    COMP_CHOICE();
    play_game(user_choice,comp_choice);
});
