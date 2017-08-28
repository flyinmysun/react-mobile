/**
 * Created by Administrator on 2017/8/26.
 */
import util from '../utils/util'
class Service{
    addOrUpdateBuy(param,callback){
        let url = "http://lms.moyior.com/ZFortuneCat-web/api/buy/addOrUpdateBuy";
        util.requestData(url,param,callback)
    }
    getBuyList(param,callback){
        let url = "http://lms.moyior.com/ZFortuneCat-web/api/buy/getBuyList";
        util.requestData(url,param,callback)
    }
    login(param,callback){
        let url = "http://lms.moyior.com/ZFortuneCat-web/api/user/login";
        util.requestData(url,param,callback)
    }
    deleteBuy(param,callback){
        let url = "http://lms.moyior.com/ZFortuneCat-web/api/buy/deleteBuy"
        util.requestData(url,param,callback)
    }
}

export default new Service();