import React from "react"
import FootTap from "../FootTap/FootTap"


export default class RootView extends React.Component{
    render(){
        return(
            <div>

                <div>
                    {this.props.children}
                </div>
                <FootTap/>
            </div>

        )
    }
}