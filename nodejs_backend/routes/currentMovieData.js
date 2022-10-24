var express = require('express');
var router = express.Router();
var { spawn } = require('child_process');
const { json } = require('express');





router.get('/', (request, response) => {
    response.send("current movie route working")
})

router.post('/', async (request, response) => {

    // let ResultFromPython={}
    console.log(request.body)
    var movieTitle=request.body
    let onlyTitle=movieTitle['movieTitle'];
    const childPython = spawn('python', ['./../Python files/main.py', `${onlyTitle}`]);


    childPython.stdout.on('data', (data) => {
    
        // console.log(`stdout: ${data}`);
        var myStr = data.toString();
        var jsonData = JSON.parse(myStr);

        // console.log(typeof(myStr))
        //    ResultFromPython=JSON.stringify(data)
        //    console.log(typeof(ResultFromPython))
        //    response.send(ResultFromPython)
        console.log(jsonData);
        console.log(typeof (jsonData));
      
        // response.setHeader('X-Foo', 'bar')
         response.send(jsonData)
        //    return jsonData;
    })
 
     childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })
 
     childPython.on('close', (data) => {
         console.log(`child process exited with code: ${data}`)
     })
     // response.send(ResultFromPython)
     // console.log(myStr)
     // return myStr;
 //    response.send(checkError)
    

}
)

// Top10Movies("thor")





 function  Top10Movies (onlyTitle) {
    let inc=0;
  
   

}











// // console.log(request.body)
// // var movieTitle=request.body
// var movieTitle="iron man"
// const childPython=spawn('python',['./../Python files/main.py',`${movieTitle}`]);


// childPython.stdout.on('data',(data)=>{
//     // console.log(`stdout: ${data}`);

//     var myStr=data.toString()
//     console.log(myStr)
//     // var jsonData=JSON.parse(myStr)
//     // console.log(typeof(myStr))
// //    ResultFromPython=JSON.stringify(data)

// //    console.log(typeof(ResultFromPython))
// //    response.send(ResultFromPython)

// // console.log(jsonData)
// // console.log(typeof(jsonData))
// //    response.send(jsonData)





// })

// childPython.stderr.on('data',(data)=>{
//    console.error(`stderr: ${data}`);
// })

// childPython.on('close',(data)=>{
//     console.log(`child process exited with code: ${data}`)
// })




module.exports = router;