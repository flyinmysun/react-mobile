import React from "react"
import { NavBar, Icon ,List, Button,DatePicker,InputItem,Toast } from 'antd-mobile';
import service from "../Service/Service"
import {browserHistory} from "react-router"
import "../buy/buy.css"
import moment from "moment"
//console.log(moment)





export default class BuyDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: {},

        }
    }
    componentDidMount(){
        let itemInfo =JSON.parse(window.localStorage.getItem("itemInfo"));  //获取web存储中的数据记录
        //console.log(itemInfo);
        this.setState({...this.state,itemInfo:itemInfo})
    }

    modify=()=>{

        //let date = this.state.date;
        //console.log(date)
        let param ={
            "id":this.state.itemInfo.id,
            "fundId":this.state.itemInfo.fundId,
            "money":this.state.itemInfo.money,
            "unitPrice":this.state.itemInfo.buyUnitPrice,
            "buyTime":moment(this.state.itemInfo.buyTime).valueOf(),  //将正常日期格式转换成毫秒
            "buyCost":this.state.itemInfo.buyCost
        };
        service.addOrUpdateBuy(param,this.successFn)
    }

    successFn = (res) => {
        //console.log(res);
        //console.log("修改成功");
        Toast.info('修改成功', 1);
        let id = this.state.itemInfo.id
        browserHistory.push(`/hold-buy-detail?id=${id}`);


    }
    render(){
        return(
            <div>
                <NavBar leftContent="back"
                        mode="dark"
                        onLeftClick={() =>{
                            let id = this.state.itemInfo.id
                            browserHistory.push(`/hold-buy-detail?id=${id}`);  //返回页面，需要根据id获取数据
                        }}
                        rightContent={[
                            <Icon key="1" type="ellipsis" />,
                        ]}
                >修改基金买入</NavBar>
                <DatePicker className="forss" title="请选择买入时间" mode="datetime" value={moment(this.state.itemInfo.buyTime)} onChange={(value)=>{
                    console.log(value);
                    let time = moment(value).valueOf()
                    let NewItem = {...this.state.itemInfo,buyTime:time}
                    this.setState({...this.state,itemInfo:NewItem})
                }}><List.Item arrow="horizontal">买入时间</List.Item>
                </DatePicker>
                <List>
                    <InputItem placeholder="0.00" extra="¥"  value={this.state.itemInfo.buyUnitPrice} onChange={(value)=>{
                        //this.setState({...this.state,unitPrice: value})
                        let NewItem = {...this.state.itemInfo,buyUnitPrice:value}
                        this.setState({...this.state,itemInfo:NewItem})
                    }}>单价</InputItem>
                    <InputItem placeholder="0.00" extra="¥" value={this.state.itemInfo.money} onChange={(value)=>{
                        let NewItem = {...this.state.itemInfo,money:value}
                        this.setState({...this.state,itemInfo:NewItem})
                    }}>金额</InputItem>
                    <InputItem placeholder="0.00" extra="¥" value={this.state.itemInfo.buyCost} onChange={(value)=>{
                        let NewItem = {...this.state.itemInfo,buyCost:value}
                        this.setState({...this.state,itemInfo:NewItem})
                    }}>买入费用</InputItem>
                </List>
                <div style={{margin:"0.6rem"}}>
                    <Button className="btn" type="primary" size="small" onClick={()=>{
                        this.modify()
                    }}>确定修改</Button>
                </div>












            </div>
        )
    }
}