import React, {useState,useEffect, useReducer} from 'react';
import $ from 'jquery'
export default function(){
    // var [heroList, setHeroList] = useState([]);
    // useEffect(() => {
    //     $.ajax({
    //         url: 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?v=47',
    //         dataType: 'json',
    //         success(d){
    //           console.log(d)
    //             setHeroList(d.hero);
    //             console.log(heroList); // 异步问题
    //         }
    //     })
    //     return ()=>{
    
    //     }
    //   }, [])
      
    //   useEffect(()=>{
    //       console.log(heroList);
    //   }, [heroList])
    function reducer(state,action){
        console.log(state,action);

        switch(action.type) {
            case 'setHero': return {
                ...state, heroList: action.heroList
            }
            case 'removeHero': {
                var h = [...state.heroList];
                h.splice(action.index,1);
                return {
                    ...state, heroList: h
                }
            }
            case 'addHero': {
                var arr = [...state.heroList];
                arr.push({alias:2342});
            
                return  {
                    ...state,
                    heroList: arr
                }
            }
        }

    }
    var [state,dispatch] = useReducer(reducer, {heroList: []})
    useEffect(() => {
        $.ajax({
            url: 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?v=47',
            dataType: 'json',
            success(d){
                dispatch({type: 'setHero',heroList:d.hero});  
            }
        })
    }, [])
      var [word,setWord] = useState('')
      return (
          <div >
              <div style={{position: 'sticky',top:0}}>
                  <input type="text" onChange={e => setWord(e.target.value)} defaultValue={word} />
                  {
                      word
                  }
              <button  onClick={() => dispatch({type: 'addHero'})}>addOne</button>
              </div>
              <ul>
              {
                state.heroList.map((el,i) => {
                    var src = '//game.gtimg.cn/images/lol/act/img/champion/'+ el.alias+'.png'
                    return (
                        <li onClick={(e)=>dispatch({type: 'removeHero', index: i})} key={i}>
                            <img src={src} width={40} />
                        </li>
                    )
                })
              }
              </ul>
          </div>
      )
}