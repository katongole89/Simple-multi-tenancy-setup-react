import React, {useEffect} from 'react'

const App = () =>{

    useEffect(()=>{
        // const parsedData = window.location.protocol + '//' + window.location.host 
        const parsedData = window.location.host.trim()
        const siteUrl = parsedData.split('.')[0]
        console.log(siteUrl)
    }, [])

    return(
        <>
            <span>New app is working</span>
            {/* <span>{domain}</span> */}
        </>
        
    )
}

export default App