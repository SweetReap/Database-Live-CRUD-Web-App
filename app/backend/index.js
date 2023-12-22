import express from "express"
import mysql from "mysql" 
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

const d = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Me3rYChriM",
    database: "computer_science_department"
});

app.get("/", (req, res) =>{
    res.json("Hey! Backend has officially been loaded!")
}); //adding requests to the API server

app.get("/Instructor", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM Instructor";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});

app.get("/Student", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM Student";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});

app.get("/Course", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM Course";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});

app.get("/Department", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM Department";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});

app.get("/Course-Section", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM CourseSection";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});

app.get("/Graduate", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM Graduate";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});

app.get("/Employer", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM Employer";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});


app.get("/Cheating-Incident", (req,res) =>{ //Getting all instructors from our database
    const q = "SELECT * FROM CheatingIncident";

    d.query(q,(err,data) =>{

        if(err) {
            console.log("Data not Retrieved...")
            return res.json(err);
        }

        return res.json(data)
    });
});

app.post("/Student", (req,res) => {
    const q = "INSERT INTO Student (f_name,m_init,l_name,email,phone,address,major) VALUES (?)";
    const values = [
        req.body.f_name,
        req.body.m_init,
        req.body.l_name,
        req.body.email,
        req.body.phone,
        req.body.address,
        req.body.major,
    ];

    d.query(q, [values], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Student has been added successfully.");  
    })
})

app.delete("/Student/:emplid", (res,req)=>{
    const stuID = req.params.emplid;
    const q ="DELETE FROM Student WHERE emplid = ?"

    d.query(q, [stuID], (err,data)=> {
        if(err) return res.json(err);
        return res.json("Student has been removed successfully.");  
    })
})


app.post("/Instuctor", (req,res) => {
    const q = "INSERT INTO Instructor(name, phone_number, email, address, office_location) VALUES (?)";
    const values = [
        req.body.name,
        req.body.phone_number,
        req.body.email,
        req.body.address,
        req.body.office_location,
    ];

    d.query(q, [values], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Instructor has been added successfully.");  
    })
})

app.delete("/Instructor:emplid", (req,res) =>{
    const insID = req.params.emplid;
    const q = "DELETE FROM Instructor WHERE emplid = ?";

    d.query(q, [insID], (err,data)=> {
        if(err) return res.json(err);
        return res.json("Instuctor has been removed successfully.");  
    })
})

app.post("/Course", (req,res) => {
    const q = "INSERT INTO Course(course_name, course_code, hours, credits, description) VALUES (?)";
    const values = [
        req.body.course_name,
        req.body.course_code,
        req.body.hours,
        req.body.credits,
        req.body.description,
    ];

    d.query(q, [values], (err, data) =>{
        if(err) return res.json(err);
        return res.json("Course has been added successfully.");  
    })
})

app.delete("/Course:course_id", (req,res) =>{
    const courseID = req.params.course_id;
    const q = "DELETE FROM Course WHERE course_id = ?";

    d.query(q, [insID], (err,data)=> {
        if(err) return res.json(err);
        return res.json("Course has been removed successfully.");  
    })
})


// app.post("/instructors", (req,res) => { //adding a new instructor into database from CRUD webapp
//     const q = "INSERT INTO Instructor(emplid, name, phone_number, email, office_location, date_of_hire) VALUES (?)";
//     const values = [
//         '0001',
// 	    'Bane Lovett',
// 	    '0987654321',
// 	    'lovette@email.com',
// 	    'New York,US',
// 	    '2023-12-06'
//     ];

//     d.query(q,[values], (err, data) =>{
//         if(err) return res.json(err)
//         return res.json(data)
//     });

// });

app.listen(8800, () => {
    console.log("Connected to backend!")
});