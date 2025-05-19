const express = require("express")
const noteRouter = express.Router()
const auth = require("../middlewares/auth")
const { getNotes, createNote } = require("../controllers/noteControllers")

noteRouter.get("/", auth, getNotes)
noteRouter.post("/", auth, createNote)
// noteRouter.delete("/:id",auth,deleteNotes)
// noteRouter.put("/:id",auth,updateNotes)

module.exports = noteRouter

