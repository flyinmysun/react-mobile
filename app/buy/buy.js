import React from "react"
import { NavBar, Icon ,List } from 'antd-mobile';
import util from "../utils/util"
import { browserHistory } from 'react-router';

const Item = List.Item;
const Brief = Item.Brief;


export default class Buy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
            res:[],
        }
    }

    /*c1(callback){
        let param = "1"
        if(callback){
            callback(param);
        }
    }

    c2(p1,callback){
        let param = "2"+p1;
        if(callback){
            callback(param);
        }
    }

    c3(p2,callback){
        let param = "3"+p2;
        if(callback){
            callback(param);
        }
    }

    p1() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (1 === 1) {
                    resolve("成功");
                } else {
                    reject("失败");
                }
            }, 3000);
        });
    }

    p2(data) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (1 === 1) {
                    resolve("成功"+data);
                } else {
                    reject("失败");
                }
            }, 3000);
        });
    }

    async asTest(){
        let rs = await this.p1();
        let rs2 = await this.p1(rs);
        console.log(rs2);
    }*/

    componentDidMount() {

        //this.asTest();

        /*this.p1().then((data)=>{
            return this.p2(data);
        }).then(function(data){
            alert(data);
        }).catch(function(error){
            alert(error);
        })*/

        /*this.c1((data)=>{
            this.c2(data,(data)=>{
                this.c3(data,(data)=>{
                    alert(data);
                });
            })
        })*/


        /*try{

        }catch (err){
            alert("=======error");
        }*/
        let param={
            "pageNo":1,
            "pageSize":10,
            "orders":{"valueTime":true}
        }

        util.requestData("http://lms.moyior.com/ZFortuneCat-web/api/fund/getFundListByUser",param,this.successFn)
        /*fetch("http://lms.moyior.com/ZFortuneCat-web/api/fund/getFundListByUser", {
            method: "POST",
            mode: "cors",//允许跨域
            credentials: "include",//允许传cookies
            headers: {
                "content-type" : 'application/json',

            },
            body: JSON.stringify({
                "pageNo":1,
                "pageSize":10,
                "orders":{"valueTime":true}
            })
        }).then((response)=> {
            if (response.ok) {
                response.json().then((data)=> {
                    if(data && data.success==true){
                        let res = data.result.result;
                        console.log(res);
                        this.setState({...this.state,res:res});
                    }
                });
            } else {
                console.log('请求失败，状态码为', response.status);
            }
            //console.log(response)
        });*/
    }

    successFn =(res)=>{
        //console.log(res);
        this.setState({...this.state,res:res});
    }

    changeDetailPage = (id) => {
        //console.log('longpress toggled', e);
        //browserHistory.push("/buy-detail?fundId="+1);
        //console.log(id)
        browserHistory.push(`/buy-detail?id=${id}`);   //使用~    ~来进行字符拼接，${}  里面放入变量
    }

    render(){

        return(
            <div>
                <NavBar leftContent="back"
                        mode="dark"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="1" type="ellipsis" />,
                        ]}
                >可买入基金列表</NavBar>
                <List className="my-list" style={{paddingBottom:"100px"}}>
                    {
                        this.state.res.map((item,index)=>{
                            return(
                                <Item key={index} arrow="horizontal" thumb={<Icon type={require('../svgs/fundIcon.svg')}/>} multipleLine
                                      style={{borderBottom:"1px soild red"}} onClick={(e) => {
                                          this.changeDetailPage(item.id)
                                }}>
                                      {item.name}
                                      <Brief>基金代码：{item.code}</Brief>
                                </Item>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}