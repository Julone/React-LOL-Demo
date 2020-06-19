import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import {useLocation} from 'react-router-dom'

export default (props) => {
  var [active, setActive] = useState(0);

  useEffect(() => {
    $(".activity .right ul li").on("mouseenter", function () {
      $(this).addClass("actived").siblings("li").removeClass("actived");
      setActive($(this).index());
    });
  }, []);

  var h = useLocation();
  var doWhat = ()=>{
    console.log(ulRef);
      
      var c = [...ulRef.current.children].sort((a,b) => Math.random() > 0.5?  1: -1 );
      console.log(c);
      ulRef.current.innerHTML = "";
      ulRef.current.append(...c)
      // console.log( c.map(el => el.outterHTML).join(''));
      // ulRef.current.innerHTML = c.map(el => el.innerHTML).join('')
      console.log(h)
  }
  var ulRef = useRef();
  return (
    <div className="activity">
      <div className="title">
        <div className="left" onClick={()=>doWhat()}>热门活动</div>
        <div className="right">
          <ul>
            <li>正在进行</li>
            <li>商城特惠</li>
            <li>长期活动</li>
          </ul>
          <div className="more">更多 -></div>
        </div>
      </div>
      <div className="content">
        <ul id="J_actListContainer" ref={ulRef}>
          <li className="act-item">
            <img
              src="//ossweb-img.qq.com/images/clientpop/act/lol_1590129939_uploadnewsImg.jpg"
              alt="未来之礼"
              width="193"
              height="207"
            />
            <p>未来之礼</p>

            <a className="overtime">7天后结束</a>

            <div className="innerhover-border">
              <i className="hover-border-1"></i>
              <div className="innerhover-border-inner">
                <h4 className="p1">未来之礼</h4>
                <p className="p2">1800时空币兑换未来战士 卢锡安 至臻</p>

                <p className="p2">2020-05-15 - 2020-05-29</p>
              </div>
            </div>
        
          </li>

          <li className="act-item">
            <img
              src="//ossweb-img.qq.com/images/clientpop/act/lol_1589878807_uploadnewsImg.jpg"
              alt="未来战士（2020）事件"
              width="193"
              height="207"
            />
            <p>未来战士（2020）事件</p>

            <a className="overtime">26天后结束</a>

            <div className="innerhover-border">
              <i className="hover-border-1"></i>
              <div className="innerhover-border-inner">
                <h4 className="p1">未来战士（2020）事件</h4>
                <p className="p2">
                  享受快速技能冷却，无限法力值，超群攻击速度，随机英雄选择以及符文大陆中最声名显赫海牛的回归吧!
                </p>

                <p className="p2">2020-05-15 - 2020-06-17</p>
              </div>
            </div>
          
          </li>

          <li className="act-item">
            <img
              src="//ossweb-img.qq.com/images/clientpop/act/lol_1589525344_uploadnewsImg.jpg"
              alt="未来战士（2020）事件"
              width="193"
              height="207"
            />
            <p>未来战士（2020）事件</p>

            <a className="overtime">26天后结束</a>

            <div className="innerhover-border">
              <i className="hover-border-1"></i>
              <div className="innerhover-border-inner">
                <h4 className="p1">未来战士（2020）事件</h4>
                <p className="p2">2000未来币(2020)兑换未来战士 卢锡安 至臻</p>

                <p className="p2">2020-05-15 - 2020-06-17</p>
              </div>
            </div>
           
          </li>

          <li className="act-item">
            <img
              src="//ossweb-img.qq.com/images/clientpop/act/lol_1588236224_uploadnewsImg.jpg"
              alt="解锁冠军荣耀宝箱 领永久皮肤奖励"
              width="193"
              height="207"
            />
            <p>解锁冠军荣耀宝箱 领永久皮肤奖励</p>

            <a className="overtime">21天后结束</a>

            <div className="innerhover-border">
              <i className="hover-border-1"></i>
              <div className="innerhover-border-inner">
                <h4 className="p1">解锁冠军荣耀宝箱 领永久皮肤奖励</h4>
                <p className="p2">
                  集火成凰，凤鸣四方。升级冠军荣耀宝箱，必得永久皮肤奖励。
                </p>

                <p className="p2">2020-04-30 - 2020-06-12</p>
              </div>
            </div>
         
          </li>
        </ul>
      </div>
    </div>
  );
};
