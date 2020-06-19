import React, {useState,useEffect} from 'react';
import $ from 'jquery'
export default function(){
    var [active, setActive] = useState(0)
    useEffect(()=>{
        $('#title-nav li').on('mouseenter', function(){
            console.log($(this).index())
            $(this).addClass('selected').siblings('li').removeClass('selected');
            setActive($(this).index())
        })
        console.log(1);
    }, [active])

    var newList = {
        0:{
            main: {
                title: '无限火力今日开启 燃情热夏无限畅选！'
            },
            sub: [
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'公告', title: '10.10版本更新公告：无限火力限时回归', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
            ]
        },
        1:{
            main: {
                title: '10.10云顶之弈更新：银河军械库星系加入云顶'
            },
            sub: [
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'公告', title: '10.10版本更新公告：无限火力限时回归', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},]
        },
        2:{
            main: {
                title: '2020英雄联盟季中杯赛程赛制公布'
            },
            sub: [
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'公告', title: '10.10版本更新公告：无限火力限时回归', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
            ]
        },
        3:{
            main: {
                title: '螳螂终于C位出道！虚空斗刺法攻略【一图流】'
            },
            sub: [
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'公告', title: '10.10版本更新公告：无限火力限时回归', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
            ]
        },
        4:{
            main: {
                title: '直面云顶设计师：第一赛季英雄将回归 季中更新将'
            },
            sub: [
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'公告', title: '10.10版本更新公告：无限火力限时回归', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
                {type:'视频', title: '伊泽瑞尔扰乱时空！时轴执法队出动！——未来战士卢锡安篇', time: '05-13'},
                {type:'公告', title: '10.10云顶之弈更新：银河军械库星系加入云顶', time: '05-13'},
            ]
        },
    }

    return (
        <div className="news-container">
                <ul id="title-nav">
                    <li className="selected">综合</li>
                    <li>公告</li>
                    <li>赛事</li>
                    <li>攻略</li>
                    <li>社区</li>
                </ul>
                <ul className="content">
                    <li className="first">
                        {newList[active].main.title}
                    </li>
                    {
                        newList[active].sub.map((el,i) =>{
                            if(i >= 6)return;
                            return (
                            <li className="news-item" key={i}>
                                <span className='type'>
                                    {el.type}
                                </span>
                                <a href="">
                                    {active}-{el.title}
                                </a>
                                <span className="time">
                                    {el.time}
                                </span>
                                </li>
                            )
                        } )
                    }
                </ul>
                <div className="btn-loadMore">
                    阅读更多 <span>最新资讯-></span>
                </div>
        </div>
    )
}