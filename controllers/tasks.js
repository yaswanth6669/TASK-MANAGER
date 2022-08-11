const Task = require('../models/Task')

const getAllTasks = async (req, res)=>{
    try {
        const tasks = await Task.find()   
        res.status(200).json({tasks})
    } catch (err) {
        res.status(500).json({message: err}) 
    }
}

const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({message: err})
    }
    
}

const getTask = async (req, res)=>{
    try {
        const id = req.params.id
        const task = await Task.findById(id)
        if(!task){
            return res.status(404).json({message: `No Task with id: ${id}`})
        }
        res.status(200).json({task})
    } catch (err) {
        res.status(500).json({message: err})
    }
}

const deleteTask = async (req, res)=>{
    try {
        const id = req.params.id
        const task = await Task.findOneAndDelete(id)
        if(!task){
            return res.status(404).json({message: `No Task with id: ${id}`})
        }
        res.status(200).json({task})       
    } catch (err) {
        res.status(500).json({message: err})
    }
}

const updateTask = async (req, res)=>{
    try {
        const id = req.params.id
        const task = await Task.findOneAndUpdate({_id: id}, req.body, {
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(404).json({message: `No Task with id: ${id}`})
        }
        res.status(200).send({task})
    } catch (err) {
        res.status(500).json({message: err})
    }
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}