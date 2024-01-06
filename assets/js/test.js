// document.querySelector('#searchbar').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         let cool=document.getElementById("searchbar").value
//         let b=fetch(`https://api.postalpincode.in/pincode/${cool}`)
//         b.then((response)=>{
//             return response.json()
//         }).then(response=>{
//             document.getElementById("content1").innerHTML=JSON.stringify(response[0].Message)
//             document.getElementById("content2").innerHTML=JSON.stringify(response[0].Status)
//             // document.getElementById("content3").innerHTML=JSON.stringify(response[0].PostOffice);
//             let l=response[0].PostOffice.length
//             let c3= document.getElementById("content3")
//             let numb = c3.childElementCount;
//             if(l>numb){
//                 let dif=l-numb
//                 for(let i=0;i<dif;i++){
//                     let para=document.createElement("div")
//                     c3.appendChild(para)
//                 }
//             }
//             else if(l<numb){
//                 let dif=numb-l
//                 for(let i=0;i<dif;i++){
//                     c3.removeChild(c3.lastChild)
//                 }
//             }
//             for(let i=0;i<l;i++){
//                 c3.children[i].innerHTML=JSON.stringify(response[0].PostOffice[i])
//             }

//         })      
//     }
// });

let cool=160055
let b=fetch(`https://api.postalpincode.in/pincode/${cool}`)
b.then((response)=>{
    return response.json()
}).then(response=>{
    console.log(JSON.stringify(response))
})

