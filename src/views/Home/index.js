import React, { useEffect, useState, useCallback,useLayoutEffect } from "react";
import logoImg from "./../../assets/logo-public.png";
import "./style.scss";
import MenuItem from "./../../components/MenuItem";
import Lunbo from './../../components/Lunbo';
import News from './../../components/News';
import Activity from './../../components/Activity';
import HeroList from './../../components/HeroList'
import {useHistory, Link} from 'react-router-dom';
import store from './redux';
import { Provider } from './context';

export default function Home() {
  var [menuList, setMenuItem] = useState([]);
  var [menuToggle, setMenuToggle] = useState(false);
  var h = useHistory();
  useEffect(() => {
    var t = setTimeout(() => {
      setMenuItem([
        { zh: "游戏资料", en: "GameInfo" },
        { zh: "商城/合作", en: "STORE" },
        { zh: "社区互动", en: "community" },
        { zh: "赛事官网", en: "ESPORTS" },
        { zh: "自助系统", en: "SYSTEM" },
      ]);
    }, 1000);
    console.log('useEffect');
    return ()=>clearTimeout(t)
  }, []);
  
  var [count, setCount] = useState(10)
  var [test,setTest] = useState([1,2])
  var handleResize = useCallback(()=>{
      console.log(count)
  }, [count])
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize',handleResize)
  },[handleResize])
  function setMenuToggle2 (val){
    //   console.log(arguments)
    setMenuToggle(val)
  }
  function handleClassList(...args){
      return args.join(' ')
  }
  useEffect(()=>{
    console.log(test);
  }, [test])
  useLayoutEffect(
		() => {
			console.log('useLayoutEffect');
			return () => {
				console.log('useLayoutEffect componentWillUnmount');
			};
		},
		[  ]
	);
  var [show_status,set_show_status] = useState(store.getState().show_status);

  store.subscribe(()=>{
    set_show_status(store.getState().show_status)
  })
  return (
    <Provider value={{appName:'julone'}}>
    <div className="home-container">
      <div className="home-wrapper">
        {
          !show_status? null :
            <div onClick={()=>store.dispatch({type:'closeDialog'})} className="layer">
              <div className="video-wrapper" onClick={e => e.stopPropagation()}>
                {/* <video  width="700px" muted autoPlay loop >
                  <source src="//ossweb-img.qq.com/images/lol/v3/btn-download.mp4" type="video/mp4" />
                </video> */}
            
              </div>
            </div>
        }
        <section className="header">
          <img
            className="topact-small-img"
            alt="logo"
            src="//img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_6768c2a7dc474b2ba0bcb9ba14ea3eb1/0"
          />
          <div className="shadow-layer">
          
          </div>
          <section className="menu">
            <div className="left">
              <div className="no-flex logo">
                <img src={logoImg}  onClick={() => store.dispatch({type: 'openDialog'})}  alt="logo" />
              </div>
              <div className="links">
                {menuList.map((el, i) => (
                  <MenuItem setMenuToggle2={ setMenuToggle2 } key={i} data={el}></MenuItem>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="icon">搜</div>
              <div className="icon">机</div>
              <div className="user-info">
                <div className="usericon">fk</div>
                亲爱的召唤师，欢迎登录！
              </div>
            </div>
          </section>
        <Link className="detail-btn" to={{pathname:'/about',search: 'saf=234'}} name="sadf" >查看详情
        </Link>
           
          <div className="game-info"></div>
          <div onMouseLeave={()=>setMenuToggle2(false)} onMouseEnter={()=>setMenuToggle2(true)} 
          className={ menuToggle ? handleClassList('sub-menu', 'active') : ['sub-menu'] }>
              <ul>
                  <li>1324</li>
                  <li>412</li>
                  <li>14</li>
              </ul>
          </div>
          
        </section>
      
        <section className="main-news">
            <Lunbo></Lunbo>
            <News></News>
        </section>
        <section className="activity-download">
            <Activity></Activity>
            <div className="download-wrapper">
                <ul>
                  <li className="downVideo">
                    <video className="side-down-video" autoPlay loop muted width="366" height="168">
                      <source src="//ossweb-img.qq.com/images/lol/v3/btn-download.mp4" type="video/mp4" />
                    </video>
                  </li>
                  <li className="p1">新手必备</li>
                  <li className="p2">领取中心</li>
                  <li className="p3">在线客服</li>
                  <li className="p4">秩序殿堂</li>
                  <li className="p5">游戏资料</li>
                  <li className="p6">峡谷之巅</li>
                  <li className="p7">云顶之弈</li>
                  <li className="p8">攻略中心</li>
                  <li className="p9">LOL宇宙</li>
                  <li className="p10">微信绑定</li>
                </ul>
            </div>
        </section>
        <section className="heroList">
            <HeroList></HeroList>
        </section>

      </div>
    </div>
    </Provider>
  );
}
