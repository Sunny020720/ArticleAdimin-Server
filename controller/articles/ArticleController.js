const {list,total} = require("../../services/articles/ArticleService");
const {find_name} = require("../../services/articles/CateServce");

const ArticleController={
// //文章
// //1.获取文章列表
    list:async(req,res)=>{
        // req.body
        var result = await list(req.query)
        var result1 = await total(req.query)

            // 更新cate_name
            for(let n of result)
            {
                let res1 = await find_name(n)
                n.cate_name=res1[0].cate_name
            }

            res.send({
                code: 0,
                message:'获取成功！',
                ActionType:"OK",
                data: result,
                total:result1.length // 总条数
            })
        }
    // // 2.添加文章
// // => data是一个formData格式的对象
// export const artPublishService = (data) => {
//     return request.post('/my/article/add', data)
// }
//     add:async(req,res)=>{
//         // req.body
//         var result = await add(req.body)
//
//         if(result.length === 0){
//             res.send({
//                 code: -1,
//                 message:"添加失败"
//             })
//         }else{
//             res.send({
//                 code: 0,
//                 message:'添加成功！',
//                 ActionType:"OK",
//             })
//         }
//     },
    // // 3.获取文章详情
// export const artGetDetailService = (id) => {
//     return request.get('my/article/info', {
//         params: {
//             id
//         }
//     })
// }
    // // 4.编辑文章
// export const artEditService = (data) => {
//     return request.put('my/article/info', data)
// }
//     info:async(req,res)=>{
//         // req.body
//         var result = await info(req.body)
//
//         if(result.length === 0){
//             res.send({
//                 code: -1,
//                 message:"编辑失败"
//             })
//         }else{
//             res.send({
//                 code: 0,
//                 message:'编辑成功！',
//                 ActionType:"OK",
//             })
//         }
//     },

// // 5.删除文章
// export const artDelService = (id) => {
//     return request.delete('my/article/info', {
//         params: {
//             id
//         }
//     })
// }
//     del:async(req,res)=>{
//         // req.body
//         var result = await del(req.query)
//
//         if(result.length === 0){
//             res.send({
//                 code: -1,
//                 message:"删除失败"
//             })
//         }else{
//             res.send({
//                 code: 0,
//                 message:'删除成功！',
//                 ActionType:"OK",
//             })
//         }
//     },
}

module.exports = ArticleController
