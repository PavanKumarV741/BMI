var weight=document.getElementById("weight")
var height=document.getElementById("height")
var gendererr=document.getElementById("gendererr")
// var male=document.getElementById("male")
// var female=document.getElementById("female")
// var others=document.getElementById("others")
// var resetbtn=document.querySelector("#reset")
// var calculatebtn=document.queryselctor(".calculate")

// calculatebtn.addEventListener("click",(e)=>{
//     e.preventDefault()

//     const results=document.getElementById("results")
//     var weight=document.getElementById("weight").value
//     var height=document.getElementById("height").value
//     if(weight=="" || 
//         height=="" || 
//         weight<=0 || 
//         height<=0 ||  
//         isNaN(height) || 
//         isNaN(weight)
//     ){
//     document.getElementById("results").innerText="error"
//     }
//     else{
//     let BMI=weight/(height*height)
//     BMI=BMI.toFixed(2)
//     results.innerText=BMI
//     }
// })

function calculate(){
    // const weight=Number(document.getElementById("weight").value)
    // const height=Number(document.getElementById("height").value)
    // or
    // const weight=(document.getElementById("weight").value)
    // const height=(document.getElementById("height").value)
    // const results=document.querySelector("#results")
    const results=document.getElementById("results")

    function validateradio(){
        var answer=false
        var male=document.getElementById("male")
        var female=document.getElementById("female")
        var others=document.getElementById("others")
        if(male.checked){
            answer=true
        }
        else if(female.checked){
            answer=true
        }
        else if(others.checked){
            answer=true
        }
        return answer
    }

    if(weight.value=="" || 
        height.value=="" || 
        weight.value<=0 || 
        height.value<=0 ||  
        isNaN(height.value) || 
        isNaN(weight.value) 
    ){
    document.getElementById("results").innerText="*please enter a valid values"
    }
    else if(!validateradio()){
        // validateradio()==false
        document.getElementById("results").innerHTML="*please enter valid gender"
    }
    else{
    let BMI=weight.value/(height.value*height.value)
    BMI=BMI.toFixed(2)
    results.innerText=BMI
    }
}

// resetbtn.addEventListener("click",()=>{
//     window.location.reload()
// })

function reset(){
    window.location.reload()
}