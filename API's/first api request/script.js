let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((response)=>{
//     return response.json();
//   })
//   .then((data)=>{
//     console.log(data.fact);
//   })
//   .catch((err) => {
//     console.log("error-", err);
//   });

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(res);
        console.log(data.fact);
    }
    catch (e){
        console.log("error", e);
    }
}

getFacts();
