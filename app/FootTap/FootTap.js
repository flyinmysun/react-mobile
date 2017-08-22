import React from "react"
import { TabBar, Icon } from 'antd-mobile';
import "./FootTap.css"


export default class FootTap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
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
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'blueTab'}

                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}
                    data-seed="logId"
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type={require('../svgs/all.svg')} size="md" />}
                    selectedIcon={<Icon type={require('../svgs/all.svg')} size="md" />}
                    title="持仓买入"
                    key="持仓买入"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
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
