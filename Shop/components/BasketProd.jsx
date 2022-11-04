export function BasketProd(props){
    
    function inc(){
        props.setCount(props.count+1)
        }
        function dec(){
           if(props.count>0){
                props.setCount(props.count-1)  
            }else{
                props.setCount(0)
            }
        }
    return(
       
        <div className="listBasketProd">
            <div className="baskImg"><img src={props.image} width="100" height="100" /></div>
            <div className="baskDesc"> {props.description}  </div>
            <div className="baskCount">
            <button onClick={dec}>-</button>
            {props.count}
            <button onClick={inc}>+</button>
            </div>
            <div className="baskPrice"> {props.price} </div>
            
        </div>
    )
}