var students = [{
    "studentID": 1,
    "studentName": "Student 1",
    "contactDetails": {
        "email": "student1@example.com",
        "phone": "XXXXXXXXXX"
    },
    "teacherID": 5
},
{
    "studentID": 2,
    "studentName": "Student 2",
    "contactDetails": {
        "email": "student2@example.com",
        "phone": "XXXXXXXXXX"
    },
    "teacherID": 2
},
{
    "studentID": 3,
    "studentName": "Student 3",
    "contactDetails": {
        "email": "student3@example.com",
        "phone": "XXXXXXXXXX"
    },
    "teacherID": 5
},
{
    "studentID": 4,
    "studentName": "Student 4",
    "contactDetails": {
        "email": "student4@example.com",
        "phone": "XXXXXXXXXX"
    },
    "teacherID": 1
},
{
    "studentID" : 5,
    "studentName" : "Student 5",
    "contactDetails" : {
        "email" : "student5@example.com",
        "phone" : "XXXXXXXXXX"
    },
    "teacherID" : 3
},
{
    "studentID": 6,
    "studentName": "Student 6",
    "contactDetails": {
        "email": "student6@example.com",
        "phone": "XXXXXXXXXX"
    },
    "teacherID": 1
},
{
    "studentID": 7,
    "studentName": "Student 7",
    "contactDetails": {
        "email": "student7@example.com",
        "phone": "XXXXXXXXXX"
    },
    "teacherID": 2
},
{
    "studentID" : 8,
    "studentName" : "Student 8",
    "contactDetails" : {
        "email" : "student8@example.com",
        "phone" : "XXXXXXXXXX"
    },
    "teacherID" : 3
},
{
    "studentID" : 9,
    "studentName" : "Student 9",
    "contactDetails" : {
        "email" : "student9@example.com",
        "phone" : "XXXXXXXXXX"
    },
    "teacherID" : 4
},
{
    "studentID" : 10,
    "studentName" : "Student 10",
    "contactDetails" : {
        "email" : "student10@example.com",
        "phone" : "XXXXXXXXXX"
    },
    "teacherID" : 3
}

];
var teachers = [
    {
        "teacherID" : 1,
        "teacherName" : "teacher 1",
        "studentIDs" : [4,6]
    },
    {
        "teacherID" : 2,
        "teacherName" : "teacher 2",
        "studentIDs" : [2,7]
    },
    {
        "teacherID" : 3,
        "teacherName" : "teacher 3",
        "studentIDs" : [1,5,10]
    },
    {
        "teacherID" : 4,
        "teacherName" : "teacher 4",
        "studentIDs" : [9]
    },
    {
        "teacherID" : 5,
        "teacherName" : "teacher 5",
        "studentIDs" : [1,3]
    }
];

module.exports = { students, teachers };