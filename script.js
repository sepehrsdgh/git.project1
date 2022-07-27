//varibales//




let emptyArray=[]
let intialCharacter=["1","2","3","4","5","6","7","8","9"]

for(let i=1;i<=5;i++){
    emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
}

let captchaCode=emptyArray.join("")


document.querySelector("#captchacode").innerHTML=captchaCode;

document.querySelector("#inputvalidationcode").addEventListener("keyup",function(e){
    if(e.keyCode===13){
       if( document.querySelector("#inputvalidationcode").value===captchaCode){
        //document.location.reload()//
        document.querySelector(".alert").classList.remove("active")
       }
       else{
        document.querySelector(".alert").classList.add("active")
        document.querySelector(".alert").innerHTML="کد امنیتی اشتباه است.لطفا مجدد وارد نمایید. "
        let emptyArray=[]
        for(let i=1;i<=5;i++){
            emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
            let captchaCode=emptyArray.join("")
            
document.querySelector("#captchacode").innerHTML=captchaCode;
        }
       }    
    }
})

document.querySelector("#refreshBtn").addEventListener("click",function(){
    let emptyArray=[]
    for(let i=1;i<=5;i++){
        emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
        let captchaCode=emptyArray.join("")
        
document.querySelector("#captchacode").innerHTML=captchaCode;
}
})


document.querySelector(".bottom-box .right").addEventListener("click",function(){
    if( document.querySelector("#inputvalidationcode").value===captchaCode){
        document.location.reload()
        document.querySelector(".alert").classList.remove("active")

       }
       else{
        document.querySelector(".alert").classList.add("active")
        document.querySelector(".alert").innerHTML="کد امنیتی اشتباه است.لطفا مجدد وارد نمایید. "
        let emptyArray=[]
        for(let i=1;i<=5;i++){
            emptyArray.push(intialCharacter[Math.floor(Math.random()*(intialCharacter.length))])
            let captchaCode=emptyArray.join("")
            
document.querySelector("#captchacode").innerHTML=captchaCode;
        }
       }    

})





