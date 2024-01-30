var x=0;

var tm;

function AFK() {
    
    if(x==0){
        tm=setTimeout(()=>{
            alert("AWAY FROM KEYWORD  -- 😈")
            window.close();
        },3000);
        x=1;
        console.log("x==0")

    }
    else{
        x--;
        clearTimeout(tm);
        AFK();
        console.log("x==1");
    }
    
}