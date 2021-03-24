import React,{useState,useEffect} from 'react';
function Loading(){
    const [data, setData] = useState(false);

    useEffect(() => {
        document.addEventListener("loading",(e)=>{
            setData(e.showLoading)
        })
    }, []);

    return(
        <div className={ data?'overlay show':'overlay' }>
            <div className="loading-context">
                loading
            </div>
        </div>
        )
}
export default Loading


