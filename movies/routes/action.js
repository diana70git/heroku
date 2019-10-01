const moviesRepo=[
    {type:'action',name:'action1',length:1.20},
    {type:'action',name:'action2',length:1.20},
    {type:'action',name:'action3',length:1.20}
]

const express=require('express');
const router=express.Router();

router.get('/action',(req,res)=>{
    res.render('action',{my:moviesRepo});
})

module.exports = router