const moviesRepo=[
    {type:'drama',name:'drama1',length:1.20},
    {type:'drama',name:'drama2',length:1.20},
    {type:'drama',name:'drama3',length:1.20},
]

const express=require('express');
const router=express.Router();

router.get('/drama',(req,res)=>{
    res.render('drama',{my:moviesRepo});
})

module.exports = router
