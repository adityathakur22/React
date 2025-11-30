use("testDB");

db.students.insertOne({
  name: "Aditya",
  course: "AI & ML"
});

db.students.find({});
