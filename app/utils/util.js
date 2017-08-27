//封装fetch

class util{
    requestData(url,param,successCallBack){
        fetch(url,{
            method: "POST",
            mode: "cors",  //允许跨域
            credentials: "include",//允许传cookies
            headers: {"content-type" : 'application/json'},
            body: JSON.stringify(param)
        }).then((response)=> {
            if (response.ok) {
                response.json().then((data)=>{
                    if(data &&data.success==true){
                        let res = data.result.result;
                        successCallBack(res)
                    }else{
                        console.log(data.errorMsg)
                    }
                });
            } else {
                console.log('请求失败，状态码为', response.status);
            }
        });
    }
}

export default new util();

