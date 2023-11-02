let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }
    catch(err){
        console.log("error -", err);
    }
}

