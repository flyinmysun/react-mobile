import React from "react"
import { NavBar, Icon ,List, Button } from 'antd-mobile';
import util from "../utils/util"
import {browserHistory} from "react-router"
import "../buy/buy.css"
import moment from "moment"
//console.log(moment)

const Item = List.Item;
const Brief = Item.Brief;

export default class BuyDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fundInfo:{}
            //res:[]
        }
    }
    componentDidMount() {
        let param = {
            "pageNo": 1,
            "pageSize": 10,
            "orders": {"valueTime": true}
        }
        //console.log(fundId);
        util.requestData("http://lms.moyior.com/ZFortuneCat-web/api/fund/getFundListByUser",param,this.successFn)
    }
    successFn = (res) => {
        //console.log(res);
        let curLocation = browserHistory.getCurrentLocation();
        let fundId = curLocation.query.id;
        let fundInfo = {};
        for(let i=0;i<res.length;i++){
            let item = res[i];
            if(item.id == fundId){
                fundInfo = item;
            }
        }
        this.setState({...this.state, fundInfo: fundInfo});
        console.log(fundInfo);

    }
    render(){
        return(
            <div>
                <NavBar leftContent="back"
                        mode="dark"
                        onLeftClick={() =>{
                            browserHistory.push("/buy");
                        }}
                        rightContent={[
                            <Icon key="1" type="ellipsis" />,
                        ]}
                >基金详情页</NavBar>
                <List className="my-list">
                    <p  className="fundTitle">{this.state.fundInfo.name}基金详情</p>
                    <Item extra={this.state.fundInfo.recentNetValue} align="top"  thumb={ <Icon type={require('../svgs/value.svg') }/> } multipleLine >
                        基金净值
                    </Item>
                    <Item extra={moment(this.state.fundInfo.valueTime).format("YYYY-MM-DD HH-mm-ss")} align="top" thumb={<Icon type={require('../svgs/time.svg') }/> } multipleLine>
                        更新时间
                    </Item>
                    <Item extra={this.state.fundInfo.costAvailable?"是":"否"} align="top" thumb={<Icon type={require('../svgs/num.svg') }/> } multipleLine>
                        是否有效
                    </Item>
                </List>
                <div style={{margin:"0.6rem"}}>
                    <Button className="btn" type="primary" size="small" onClick={()=>{
                        //browserHistory.push(`/buy-detail?id=${id}`);   //使用~    ~来进行字符拼接，${}  里面放入变量
                        browserHistory.push(`/add-buy?id=${this.state.fundInfo.id}`)
                    }}>新增此基金购买</Button>
                </div>












            </div>
        )
    }
}