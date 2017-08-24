/**
 * Created by Administrator on 2017/8/24.
 */
import React from "react"
import loginP1 from '../imgs/login.png';
import "./login.css"
import {browserHistory} from 'react-router'
import { List, InputItem,Icon,Button} from 'antd-mobile';

export default class Login extends React.Component{
    constructor(){
        super();

        this.state = {
            userName:"",
            password:"",
        }
    }
    signIn(){
        //console.log(this.state.userName);
        //console.log(this.state.password);
        fetch("http://lms.moyior.com/ZFortuneCat-web/api/user/login", {
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
                    browserHistory.push("/buy");
                });
            } else {
                console.log('请求失败，状态码为', response.status);
            }
            //console.log(response)
        });


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
                    <InputItem ref="username" placeholder="请输入用户名"  onChange={(value)=>{
                        this.setState({...this.state,userName:value})
                    }}>
                        <div className="inputImgPerson">
                            <Icon type={require('../svgs/person.svg')}/>
                        </div>
                    </InputItem>
                    <InputItem ref="password" placeholder="请输入密码"  onChange={(value)=> {
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