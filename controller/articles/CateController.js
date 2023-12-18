const {list,add,info} = require("../../services/articles/CateServce");

const CateController={
    //1.获取频道列表
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
    //2.添加分类
    add:async(req,res)=>{
        // req.body
        var result = await add(req.body)

        if(result.length === 0){
            res.send({
                code: -1,
                message:"添加失败"
            })
        }else{
            res.send({
                code: 0,
                message:'添加成功！',
                ActionType:"OK",
            })
        }
    },
    //3.编辑分类
    info:async(req,res)=>{
        // req.body
        var result = await info(req.body)

        if(result.length === 0){
            res.send({
                code: -1,
                message:"编辑失败"
            })
        }else{
            res.send({
                code: 0,
                message:'编辑成功！',
                ActionType:"OK",
            })
        }
    },
    // //4.删除分类
    // export const artDelChannelService = (id) => {
    //     return request.delete('/my/cate/del', {
    //         params: { id }
    //     })
    // }

}

module.exports = CateController
