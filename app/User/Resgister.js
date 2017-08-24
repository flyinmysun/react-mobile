import React from "react"
import { NavBar, Icon ,List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


export default class Buy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
        }
        this.asTest();
    }

    c1(callback){
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
    }

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


        try{

        }catch (err){
            alert("=======error");
        }

        fetch("http://lms.moyior.com/ZFortuneCat-web/api/fund/getFundListByUser", {
            method: "POST",
            mode: "cors",
            headers: {
                //'Accept': 'application/json',
                "content-type" : 'application/json',

            },
            body: JSON.stringify({
                "pageNo":1,
                "pageSize":10,
                "orders":{"valueTime":true}
            })
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                });
            } else {
                console.log('请求失败，状态码为', response.status);
            }
            //console.log(response)
        });
    }



    handleLongPress = (e) => {
        console.log('longpress toggled', e);
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


                <List className="my-list">
                    <Item
                        arrow="horizontal"
                        thumb={<Icon type={require('../svgs/fundIcon.svg')}/>}
                        multipleLine
                        onClick={() => {}}
                    >
                        长河国际基金 <Brief>基金代码：253522</Brief>
                    </Item>
                </List>










            </div>
        )
    }
}