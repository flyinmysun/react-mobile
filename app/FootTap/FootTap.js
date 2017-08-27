import React from "react"
import {browserHistory} from 'react-router'
import { TabBar, Icon } from 'antd-mobile';
import "./FootTap.css"


export default class FootTap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }

    componentDidMount(){
        this.selectTab();
        browserHistory.listen((e) => {  //切换路由时触发
            this.selectTab();
        })
    }

    selectTab = () =>{
        let curLocation = browserHistory.getCurrentLocation();  //得到当前的浏览器的url路由名字
        //console.log(curLocation)
        if(curLocation.pathname == "/login"){
            this.setState({...this.state,hidden: true});
        }else if(curLocation.pathname == "/buy"){
            this.setState({...this.state,hidden: false,selectedTab: 'blueTab',});
        }
        else if(curLocation.pathname == "/hold-buy"){
            this.setState({...this.state,hidden: false,selectedTab: 'redTab',});
        }
        else if(curLocation.pathname == "/hold-sell"){
            this.setState({...this.state,hidden: false,selectedTab: 'greenTab',});
        }
        else if(curLocation.pathname == "/loss"){
            this.setState({...this.state,hidden: false,selectedTab: 'yellowTab',});
        }
    }

    /*renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    点击切换 tab-bar 显示/隐藏
                </a>
            </div>
        );
    }*/

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="买入市场"
                    key="买入市场"
                    icon={<Icon type={require('../svgs/all.svg')} size="md" style={{ width: '0.44rem',
                        height: '0.44rem',}} />}
                    selectedIcon={<Icon type={require('../svgs/all.svg')} size="md" style={{ width: '0.44rem',
                        height: '0.44rem',}} />}
                    selected={this.state.selectedTab === 'blueTab'}

                    onPress={() => {
                        browserHistory.push("/buy");
                    }}
                    data-seed="logId"
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../svgs/holdBuy.svg')} size="md" />}
                    selectedIcon={<Icon type={require('../svgs/holdBuy.svg')} size="md" />}
                    title="持仓买入"
                    key="持仓买入"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        browserHistory.push("/hold-buy");
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../svgs/holdSell.svg')} size="md" style={{ width: '0.44rem',
                        height: '0.44rem',}} />}
                    selectedIcon={<Icon type={require('../svgs/holdSell.svg')} size="md" style={{ width: '0.44rem',
                        height: '0.44rem',}} />}
                    title="持仓卖出"
                    key="持仓卖出"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        browserHistory.push("/hold-sell");
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../svgs/set.svg')} size="md" />}
                    selectedIcon={<Icon type={require('../svgs/set.svg')} size="md" />}
                    title="设置"
                    key="设置"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        /*this.setState({
                            selectedTab: 'yellowTab',
                        });*/
                        browserHistory.push("/loss");
                    }}
                >
                </TabBar.Item>
            </TabBar>
        );
    }
}
