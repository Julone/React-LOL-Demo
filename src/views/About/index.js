import React, {useState, useEffect, useRef} from 'react';
export default function(props) {
    console.log(props);
    var [input, setInput] = useState('');
    var [list, setList] = useState([]);
    var [readOnly,setReadOnly] = useState(true);
    var [count, setCount] = useState(false)
    var ref = useRef();
    function handleKeyUp(e){
        e.persist();
        if(e.keyCode == 13) {
            setInput(e.target.value);
            var oldList = [...list];
            oldList.push([Date.now(), e.target.value]);
            setList(oldList)
            e.target.blur();
       
        }
    }
    useEffect(()=>{
            if(!list.length) return;
            var reg = new RegExp(`^${list[list.length - 1][1]}`);
            ref.current.value = ref.current.value.replace(reg,'')
            ref.current.focus();

            // e.target.focus();
  
    }, [list])
    function handleFocus(e){
        e.persist();
        // e.target.readOnly = true;
        setReadOnly(true)
        setTimeout(() => {
            // e.target.readOnly = false
            setReadOnly(false)
        }, 10);

    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" ref={ref} readOnly={readOnly} defaultValue={input} 
            onKeyUp={handleKeyUp } 
            onFocus={handleFocus}
            // onFocus={e=>document.activeElement.blur()} 
            
            />
            {
                list.map(el => {
                return (<li>{el[0]} -  {el[1]}</li>)
                } )
            }
        </div>
    )
}