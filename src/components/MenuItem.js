import React,{useState,useEffect} from 'react';
export default function(props){
    // console.log(props);
    var [count, addCount] = useState(0);
    // console.log(addCount);
    useEffect(()=>{
        console.log();
    }, [count
    ])
    function doClick(v){
        props.setMenuToggle2(v);
        v && addCount(count + 1);
    }
    return (
        <div className="link-item" onMouseLeave={()=>doClick(false)}
         onMouseEnter={ ()=> doClick(true) }>
            <div className="link-item-chinese">
                {props.data.zh}
        </div>
            <div className="link-item-english">
                {props.data.en.toUpperCase()} 
                {count}
        </div>
        </div>
    )
}