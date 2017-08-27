/**
 * Created by Administrator on 2017/8/24.
 */
import React from "react"
import loginP1 from '../imgs/login.png';
import "./login.css"
import {browserHistory} from 'react-router'
import { List, InputItem,Icon,Button} from 'antd-mobile';
import util from "../utils/util"   //将共用方法引入
//console.log(util)

export default class Login extends React.Component{
    constructor(){
        super();

        this.state = {
            userName:"changyang",
            password:"123456",
        }
    }
    signIn(){
        let param ={
            "username":this.state.userName,
            "password":this.state.password
        }
        //console.log()
        //调用共用方法里面的requestData的方法
        util.requestData("http://lms.moyior.com/ZFortuneCat-web/api/user/login",param,this.successFn)

        //Request("http://lms.moyior.com/ZFortuneCat-web/api/user/login",param,this.successFn)
        /*fetch("http://lms.moyior.com/ZFortuneCat-web/api/user/login", {
            method: "POST",
            mode: "cors",
            credentials: "include",//允许传cookies
            headers: {
                //'Accept': 'application/json',
                "content-type" : 'application/json',
            },
            body: JSON.stringify({
                "username":this.state.userName,
                "password":this.state.password
            })
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function (data) {
                    if(data &&data.success==true){
                        //console.log(data);
                        browserHistory.push("/buy");
                    }

                });
            } else {
                console.log('请求失败，状态码为', response.status);
            }
            //console.log(response)
        });*/

    }
    successFn(){
        //console.log("封装成功，等待调用")
        browserHistory.push("/buy");
    }

    render(){
        return(
            <div>
                <div className="imgBox">
                    <img src={loginP1}/>
                </div>
                <div className="tap clearfix">
                    <div className="login tapActive">登录</div>
                    <div className="Resgister">注册</div>
                </div>
                <div style={{height:"60px"}}></div>
                <List>
                    <InputItem ref="username" placeholder="请输入用户名"  value={this.state.userName} onChange={(value)=>{
                        this.setState({...this.state,userName:value})
                    }}>
                        <div className="inputImgPerson">
                            <Icon type={require('../svgs/person.svg')}/>
                        </div>
                    </InputItem>
                    <InputItem ref="password" placeholder="请输入密码"  value={this.state.password} onChange={(value)=> {
                        this.setState({...this.state, password: value})
                    }}>
                        <div className="inputImgPassword">
                            <Icon type={require('../svgs/password.svg')}/>
                        </div>
                    </InputItem>
                </List>
                <div style={{padding:"10px"}}>
                    <Button className="btn loginBtn" type="primary" size="small" onClick={()=>{
                        this.signIn();
                    }}>登录</Button>
                </div>

            </div>
        )
    }
}