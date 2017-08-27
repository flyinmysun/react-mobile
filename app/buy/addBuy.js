import React from "react"
import { NavBar, Icon ,List, Button,DatePicker,InputItem,Toast } from 'antd-mobile';
import service from "../Service/Service"
import {browserHistory} from "react-router"
import "../buy/buy.css"
import moment from "moment"
//console.log(moment)





export default class BuyDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:"",
            money:"",
            unitPrice:"",
            buyCost:""
        }
    }

    add=()=>{
        let curLocation = browserHistory.getCurrentLocation();
        let fundId = curLocation.query.id;
        //console.log(fundId)
        //let date = this.state.date;
        //console.log(date)
        let param ={
            "id":null,
            "fundId":fundId,
            "money":this.state.money,
            "unitPrice":this.state.unitPrice,
            "buyTime":moment(this.state.date).valueOf(),  //将正常日期格式转换成毫秒
            "buyCost":this.state.buyCost
        };
        service.addOrUpdateBuy(param,this.successFn)
    }

    successFn = (res) => {
        //console.log(res);
        console.log("新增成功");
        Toast.info('新增成功', 1);
        browserHistory.push("/buy-detail")


    }
    render(){
        return(
            <div>
                <NavBar leftContent="back"
                        mode="dark"
                        onLeftClick={() =>{
                            browserHistory.push("/buy-detail");
                        }}
                        rightContent={[
                            <Icon key="1" type="ellipsis" />,
                        ]}
                >新增基金</NavBar>
                <DatePicker className="forss" title="请选择买入时间" mode="datetime" value={this.state.date} onChange={(value)=>{
                    console.log(value)
                    this.setState({...this.state,date:value})
                }}><List.Item arrow="horizontal">买入时间</List.Item>
                </DatePicker>
                <List>
                    <InputItem placeholder="0.00" extra="¥" onChange={(value)=>{
                        this.setState({...this.state,unitPrice: value})
                    }}>单价</InputItem>
                    <InputItem placeholder="0.00" extra="¥" onChange={(value)=>{
                        this.setState({...this.state,money: value})
                    }}>金额</InputItem>
                    <InputItem placeholder="0.00" extra="¥" onChange={(value)=>{
                        this.setState({...this.state,buyCost: value})
                    }}>买入费用</InputItem>
                </List>
                <div style={{margin:"0.6rem"}}>
                    <Button className="btn" type="primary" size="small" onClick={()=>{
                        this.add()
                    }}>确定新增</Button>
                </div>












            </div>
        )
    }
}