import React from "react"
import {browserHistory} from "react-router"
import {Icon,NavBar,SearchBar,WhiteSpace,List} from "antd-mobile"
import service from "../Service/Service"
import HoldBuyListItem from './components/HoldBuyListItem'
const Item = List.Item;
const Brief = Item.Brief;



export default class HoldBuy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[]
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
        console.log(res)
        this.setState({...this.state,res:res})
    }


    render(){
        return(
            <div style={{paddingBottom:"2rem"}}>
                <NavBar mode="dark" rightContent={[<Icon key="1" type="ellipsis" />,]}>持仓买入列表</NavBar>
                <SearchBar placeholder="搜索" maxLength={8} />
                <WhiteSpace />
                <List className="my-list">
                    {
                        this.state.res.map((item,index)=>{
                            return(
                                <Item key={index} extra={<div style={{fontSize:".28rem"}}>持有天数 <span style={{color:"#108ee9"}}>{item.curDays}</span>天</div>} multipleLine align="top" wrap onClick={()=>{
                                    browserHistory.push(`/hold-buy-detail?id=${item.id}`)
                                }}>
                                    <HoldBuyListItem item={item}/>
                                </Item>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}