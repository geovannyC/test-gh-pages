export const sendData=async(data)=>{
    const dirSolve = `https://formsubmit.co/ajax/ff84baca6839c96003c5583f3cde1704`
      const response = await fetch(dirSolve, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }   
    });
    
    if (response.status===(200)){
      const json = await response.json()
      return json
    }else { 
      
      return false
      }
    }