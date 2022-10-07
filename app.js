require("./connection");
const express = require("express");
const Student = require("./models/Student");

const app = express();
const PORT = "4001";

app.use(express.json());

// GET: home page
app.get("/", async (req, res) => {
  try {
    res.json("Welcome!!");
  } catch (error) {
    return error;
  }
});

// GET: all students
app.get("/students", async (req, res) => {
  try {
    const allStudents = await Student.find();

    res.status(200).json({ allStudents });
  } catch (error) {
    return error;
  }
});

// GET: one student by id
app.get("/students/:studentId", async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    res.status(200).json(student);
  } catch (error) {
    return error;
  }
});

// POST: create new student
app.post("/students", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({ newStudent });
  } catch (error) {
    return error;
  }
});

// PUT: update student by id
app.put("/students/:studentId", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.studentId,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({ updated });
  } catch (error) {
    return error;
  }
});

// DELETE: delete student by id
app.delete("/students/:studentId", async (req, res) => {
  try {
    const deletedUser = await Student.findByIdAndDelete(req.params.studentId);
    res
      .status(204)
      .json({ message: "Deleted successfully", deleted_data: deletedUser });
  } catch (error) {
    return error;
  }
});

app.delete("/students", async (req, res) => {
  try {
    await Student.deleteMany();

    return res.status(204).json({ success: true });
  } catch (error) {
    return error;
  }
});

app.listen(PORT, () => console.log("listening on port " + PORT));
