const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv/config')

app.use(express.static('./public'))
app.use(express.json())

/**
 * app.get('api/v1/tasks')               -   Get All Tasks
 * app.post('api/v1/tasks')              -   Create a task
 * app.get('api/v1/tasks/:id')           -   Get a single task
 * app.patch('api/v1/tasks/:id')         -   Update a single task
 * app.delete('api/v1/tasks/:id')        -   Delete a single task
 */

app.use('/api/v1/tasks',tasks)


const start = async ()=>{
    try{
        await connectDB(process.env.connectionString)
        app.listen(port = 3000, console.log(`Listening to server on port ${port}...`))
    }catch(err){
        console.log(err)
    }
}

start()




