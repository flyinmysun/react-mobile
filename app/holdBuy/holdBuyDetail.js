import React from "react"
import {browserHistory} from "react-router"
import {Icon,NavBar,List,Button,Modal,WhiteSpace,WingBlank,Toast} from "antd-mobile"
import service from "../Service/Service"
import moment from "moment"
const Item = List.Item;
const Brief = Item.Brief;


export default class HoldBuyDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            buyInfo:{}
        }
    }
    componentDidMount(){
        let param={
            "key":"",
            "minBuyTime":null,
            "maxBuyTime":null,
            "available":null,
            "pageNo":1,
            "pageSize":20,
            "orders":{
                "buyTime":true,
                "money":true,
                "buyUnitPrice":true,
                "curDays":true,
                "curMoney":true,
                "profit":true,
                "profitPercent":true,
                "efficiency":true
            }
        }
        service.getBuyList(param,this.successFn)

    }
    successFn=(res)=>{
        let curLocation = browserHistory.getCurrentLocation();
        let fundId = curLocation.query.id;
        //console.log(res)
        let buyInfo={};
        for(let i=0;i<res.length;i++){
            let item = res[i];
            if(item.id == fundId){
                //console.log(item)
                buyInfo = item;
            }
        }
        this.setState({...this.state,buyInfo:buyInfo})
    }

    confirmDelete(id){
        Modal.alert("提示","确定要删除此条基金买入？", [
            { text: '取消', onPress: () =>{ } },
            { text: '确定', onPress: () => {
                this.delete(id);
            }},
        ]);
    }
    delete=(id)=>{
        let param ={id:id}
        service.deleteBuy(param,this.delSuccess)
    }

    delSuccess=(res)=>{
        console.log("删除成功");
        browserHistory.push("/hold-buy")
    }


    render(){
        const {buyInfo} = this.state;
        return(
            <div style={{paddingBottom:"2rem"}}>
                <NavBar mode="dark" onLeftClick={() =>{
                    browserHistory.push("/hold-buy");
                }} rightContent={[<Icon key="1" type="ellipsis" />,]}>买入列表详情</NavBar>
                <List className="my-list" renderHeader="买入该基金列表详情" style={{fontSize:".32rem",color:"red"}}>
                    <Item extra={buyInfo.money} >买入金额(元)</Item>
                    <Item extra={buyInfo.curMoney} >当前金额(元)</Item>
                    <Item extra={buyInfo.sellSurplus} >卖出金额(元)</Item>
                    <Item extra={this.state.buyInfo.profit} >总利润(元)</Item>
                    <Item extra={this.state.buyInfo.profitPercent } >总涨幅</Item>
                    <Item extra={this.state.buyInfo.dayProfit} >平均日利润(元)</Item>
                    <Item extra={this.state.buyInfo.dayProfitPercent } >平均日涨幅</Item>
                    <Item extra={moment(this.state.buyInfo.buyTime).format("YYYY-MM-DD HH-mm-ss")} >买入时间</Item>
                    <Item extra={this.state.buyInfo.buyUnitPrice } >买入单价(元)</Item>
                    <Item extra={this.state.buyInfo.share } >买入份额</Item>
                    <Item extra={this.state.buyInfo.buyCost } >买入费用(元)</Item>
                    <Item extra={moment(this.state.buyInfo.curUnitPriceDate).format("YYYY-MM-DD HH-mm-ss")} >计算日期</Item>
                    <Item extra={this.state.buyInfo.curDays } >持有天数</Item>
                    <Item extra={this.state.buyInfo.curUnitPrice } >当前单价(元)</Item>
                    <Item extra={this.state.buyInfo.curSellExchangeRate } >卖出费率(元)</Item>
                    <Item extra={this.state.buyInfo.curSellCost } >卖出费用(元)</Item>
                    <Item extra={this.state.buyInfo.curLoss } >资金损耗(元)</Item>
                    <Item extra={this.state.buyInfo.fundAvailable?"是":"否"} >基金是否有效(元)</Item>
                </List>
                <div style={{ marginBottom: '0.16rem',marginTop:"0.3rem"}} className="btnWrap">
                    <Button type="primary" inline size="small" style={{width:"30%",marginRight:"2.5%",marginLeft:"1.25%"}} onClick={()=>{
                        console.log(JSON.stringify(this.state.buyInfo));
                        let itemStr = JSON.stringify(this.state.buyInfo)  //将对象转成Json字符
                        //console.log(typeof itemStr)   字符
                        window.localStorage.setItem("itemInfo",itemStr)   //以键值对的形式进行存储
                        //let a =JSON.parse(window.localStorage.getItem("itemInfo"));
                        //console.log(a)
                        browserHistory.push("/hold-buy-modify")
                    }}>修改</Button>
                    <Button type="primary" inline size="small" style={{width:"30%",marginRight:"2.5%"}} onClick={()=>{
                        this.confirmDelete(this.state.buyInfo.id);
                    }}>删除</Button>
                    <Button type="primary" inline size="small" style={{width:"30%"}}>卖出该基金</Button>
                </div>
            </div>
        )
    }
}