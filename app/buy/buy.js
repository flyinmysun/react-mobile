import React from "react"
import { NavBar, Icon ,List } from 'antd-mobile';
require ('es6-promise').polyfill();
require ('isomorphic-fetch');
const Item = List.Item;
const Brief = Item.Brief;


export default class Buy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
        }
    }

    componentDidMount() {

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