const moviesARepo=[
    {type:'action',name:'action1',length:1.20},
    {type:'action',name:'action2',length:1.20},
    {type:'action',name:'action3',length:1.20}
]
const moviesCRepo=[
    {type:'comedy',name:'comedy1',length:1.20},
    {type:'comedy',name:'comedy2',length:1.20},
    {type:'comedy',name:'comedy3',length:1.20}
]

const moviesDRepo=[
    {type:'drama',name:'drama1',length:1.20},
    {type:'drama',name:'drama2',length:1.20},
    {type:'drama',name:'drama3',length:1.20},
]

const express=require('express');
const router=express.Router();

router.get('/action',(req,res)=>{
    res.render('action',{my:moviesARepo});
})

router.get('/comedy',(req,res)=>{
    res.render('comedy',{my:moviesCRepo});
})

router.get('/drama',(req,res)=>{
    res.render('drama',{my:moviesDRepo});
})

module.exports = router