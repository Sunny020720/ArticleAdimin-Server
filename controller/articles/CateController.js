const {list} = require("../../services/articles/CateServce");

const CateController={
    // //1.获取频道列表
    // export const artGetChannelsService = () => {
    //     return request.get('/my/cate/list')
    // }
    list:async(req,res)=>{
        // req.body
        var result = await list(req.body)

        if(result.length === 0){
            res.send({
                code: -1,
                message:"获取失败"
            })
        }else{
            res.send({
                code: 0,
                message:'获取成功！',
                ActionType:"OK",
                data:result
            })
        }
    },
    // //2.添加分类
    // export const artAddChannelService = (data) => {
    //     return request.post('/my/cate/add', data)
    // }
    // //3.编辑分类
    // export const artEditChannelService = (data) => {
    //     return request.put('/my/cate/info', data)
    // }
    // //4.删除分类
    // export const artDelChannelService = (id) => {
    //     return request.delete('/my/cate/del', {
    //         params: { id }
    //     })
    // }

}

module.exports = CateController
