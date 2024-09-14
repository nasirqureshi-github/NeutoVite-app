// create api to use model 

import express from 'express'
import { addFood,listFood ,removeFood} from "../controllers/foodController.js"
//craete image storage system
import multer from 'multer'


//craete foodrouter; using this router we can craete get method, post method etc.
const foodRouter=express.Router();
//image storage Engine
//craete one storage use multer
//date.now function use to give unique name to each file and use with file original name 
const storage =multer.diskStorage({
   destination:"uploads" ,
   filename:(req,file,cb)=>{
    return cb(null,`${Date.now()} ${file.originalname}`)
   }
})

//use diskstorage to store image in upload folder
const upload=multer({storage:storage})

//use post method to send the data to the server ,data will be process and we will get one response. (example form )

//API endpoints 
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get('/list', listFood)
foodRouter.post('/remove', removeFood)
export default foodRouter;
