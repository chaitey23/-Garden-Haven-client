import { useEffect } from "react"

const usePageTitle = (title) =>{
    useEffect(()=>{
document.title = title ? `${title} | Garden Haven` : "Garden Haven"
    },[title])
}

export default usePageTitle;