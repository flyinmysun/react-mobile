/**
 * Created by Administrator on 2017/8/28.
 */
import React from 'react'
export default class HoldBuyListItem extends React.Component{
    constructor(props){
        super(props)
    }

    static propTypes = {
         /*title: React.PropTypes.string.isRequired,
         source: React.PropTypes.array.isRequired,
         selectedId: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
         idName: React.PropTypes.string.isRequired,
         valueName:React.PropTypes.string.isRequired,
         changeHandler: React.PropTypes.func.isRequired,*/
         item:React.PropTypes.object.isRequired
    };

    render(){
        const {item} = this.props;
        return(
            <div>
                <p style={{color:"#108ee9"}}>{item.fundName}</p>
                <p style={{fontSize:".28rem"}}>基金代码：{item.fundCode}</p>
                <p style={{fontSize:".24rem"}}>
                    <span style={{marginRight:"0.3rem"}}>总利润(元)：{item.profit}</span>
                    <span>日利润(元)：{item.dayProfit}</span>
                </p>
            </div>
        )
    }
}