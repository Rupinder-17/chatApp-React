// import React from 'react'
// const url = "https://api.freeapi.app/api/v1";
export const useApiS = async (url, method = "GET", headers= {}, body = null) => {
  try {
    const options = {
        method,
        headers:{
            'Content-Type': 'application/json',
        ...headers,
    },
    body:  JSON.stringify(body) 
    };
    const resposne = await fetch(url, options)
    const result = await resposne.json()
    if(!resposne.ok){
        throw new Error(result.message)
    }
    return result
  }catch(e){
    console.log(e);
    
    
  }
    
}
