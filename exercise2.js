let dbmongoUsers = [
    {
        username : "ho",
        password : 1234,
        name : "HO",
        email : "ho@utem.student.edu.my"
    },
    {
        username : "khoo",
        password : 12345,
        name : "KHOO",
        email : "khoo@utem.student.edu.my"
    }
]

function login(reqUsername, reqPassword){
    let matchuser = dbmongoUsers.find(user => user.username == reqUsername)
    if (!matchuser) return "User not found!"

    
    if (matchuser.password == reqPassword){
        return matchuser
    }
    else {
        return "Invalid password!"
    }

}


//login("khoo", "password")
console.log(login("ho", "1234"))
