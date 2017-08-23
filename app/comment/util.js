function post(postData, dispatch) {
    return fetch('/api/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: postData
        })
    }).then((response) => response.json())
        .then((json) => {
            let hasError = false;
            let text = '';
            /// /api/list正常返回格式{errcode:0,errmsg:'',data:[]}
            if (json.errcode !== 0) {
                hasError = true;
                text = json.errmsg;
            } else {
                hasError = false;
                text = '';
            }
            // 网络异常 如断网
            if (json.error) {
                dispatch(success({
                    msg: strings.NET_ERROR,
                    data: false
                }));
            }
            // 正常业务处理
            else {
                dispatch(success({
                    msg: hasError ? text : '',
                    data: !hasError
                }));
            }
        })
        .catch((err) => {
            dispatch(success({
                msg: (__DEBUG__ && err.message) ? err.message : strings.NET_ERROR,
                data: false
            }));
        });
}