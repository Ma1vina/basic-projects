import { useState } from "react"

export function useFetching(callback){
    const [isLoading, setisLoading] = useState(false);
    const [error, setError]= useState("");

const fetching =async () => {
    try{
setisLoading(true)
await callback()
    }catch (event){
setError(event.message);
    }finally{
setisLoading(false)
    }
}

    return [fetching,isLoading,error];
}