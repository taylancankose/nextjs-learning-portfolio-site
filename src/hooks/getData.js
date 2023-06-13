import React from "react";

async function getData(url){

const useFetch = async() => {
    const res = await fetch(url, {
        // next: { revalidate: 10 } // her 10 sn de tekrar çekecek cache lifetime bu
        cache: "no-store" // data sürekli değişiyorsa bu
    });
    // Bir şey yapmazsak cache'ler bunu

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary 
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

const data = await getData()

return {data}
}

export default getData;
