import React from 'react';
import ReactDom from 'react-dom';
import '../node_modules/antd-mobile/lib/button/style';
import Button from '../node_modules/antd-mobile/lib/button';


class App extends React.Component{
    render(){
        return(
            <div>
                <Button>Start</Button>
            </div>

        )
    }
}

ReactDom.render(<App/>,document.getElementById("root"));
