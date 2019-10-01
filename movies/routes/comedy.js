const moviesRepo=[
    {type:'comedy',name:'comedy1',length:1.20},
    {type:'comedy',name:'comedy2',length:1.20},
    {type:'comedy',name:'comedy3',length:1.20}
]

const express=require('express');
const router=express.Router();

router.get('/comedy',(req,res)=>{
    res.render('comedy',{my:moviesRepo});
})

module.exports = router
