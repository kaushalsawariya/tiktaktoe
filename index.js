const winningProb=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let btn=document.querySelectorAll (".box");

let flag=true;
function chexkWinner(){
    for (let i = 0; i < winningProb.length; i++) {
        let arr=winningProb[i];
        let a=btn[arr[0]].innerText;
        let b=btn[arr[1]].innerText;
        let c=btn[arr[2]].innerText;
        if(a!=="" && b!=="" && c!==""){
            if(a===b && b===c){
                return true;
            }
        }
        
    }
    return false;
}
function winnerFound(){
    btn.forEach((box) => {
       box.disabled =true;
    });
}
for (let i = 0; i < 9; i++) {
    btn[i].addEventListener("click",()=>{
        // console.log(btn[i]);
        if(flag===true){
            btn[i].innerText="X";
            flag=false;
        }
        else{
            btn[i].innerText="O";
            flag=true;
        }
        btn[i].disabled = true;
        if(chexkWinner()===true){
            let ans=flag?"O":"X";
            alert("Winner is "+ans );
            winnerFound();
        }

    });
    
}
let resetbtn=document.querySelector("#resetbtn");
resetbtn.addEventListener("click",()=>{
    btn.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
});

