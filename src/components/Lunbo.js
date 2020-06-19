import React, { useEffect, useState, useContext } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import HomeContext from './../views/Home/context'
export default function () {
  var [activeIndex, setActiveIndex] = useState(0);
  // var instance =null;
  var s = useContext(HomeContext)
  // console.log(s);
  var [swiperInstance, setSwiperInstance] = useState(null);
  useEffect(() => {
    var instance = new Swiper(".swiper-container", {
      on: {
        slideChangeTransitionEnd: function () {
          setActiveIndex(this.activeIndex);
        },
        init() {
          console.log("init");
        },
      },
    });
    setSwiperInstance(instance);
    return () => {
      
    };
  }, []);

  var imgList = [ { url: "https://ossweb-img.qq.com/upload/adw/image/20200515/35d60d125b91d2ff677507ea0e153d79.jpeg", title: "未来之礼", }, { url: "https://ossweb-img.qq.com/upload/adw/image/20200515/de9278ec62e3f669a136a0bcf0a65757.jpeg", title: "未来战士通行证", }, { url: "https://ossweb-img.qq.com/upload/adw/image/20200515/074214d2b347c40b01418bf7789d6ab8.jpeg", title:'未来战士2020', }, { url: "https://ossweb-img.qq.com/upload/adw/image/20200515/47112acf9b58a276be576a78c5dd7a08.jpeg", title: "无限火力", }, { url: "https://ossweb-img.qq.com/upload/adw/image/20200516/59f4680091556d081dd85360000c0df8.jpeg", title: "宇宙故事：未来战士", }, ];
  function turnTo(index) {
    if(swiperInstance)
    swiperInstance.slideTo(index);
    setActiveIndex(index);
  }
  return (
    <div>
      <div
        className="swiper-container"
     
      >
        <div className="swiper-wrapper">
          {imgList.map((el) => {
            return (
              <div className="swiper-slide" key={el.url}>
                <img src={el.url} alt={el} />
              </div>
            );
          })}
        </div>
        <div className="bottom-btns">
          {imgList.map((el, i) => {
            var cls = i === activeIndex ? "btn-item selected" : "btn-item";
            return (
              <div key={i}  className={cls} onMouseEnter={() => turnTo(i)}>
                {el.title} {s.appName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
