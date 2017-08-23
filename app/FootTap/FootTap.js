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
                        this.setState({
                            selectedTab: 'blueTab',
                        });
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
                        this.setState({
                            selectedTab: 'redTab',
                        });
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
                        this.setState({
                            selectedTab: 'greenTab',
                        });
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
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                    }}
                >
                </TabBar.Item>
            </TabBar>
        );
    }
}
