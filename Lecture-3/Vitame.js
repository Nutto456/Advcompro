var name = "Fatema";

function fun(){
    //some code here
    console.log(this.name);
}

const user = {
    name: "Marium",
    yearofBirth: 1999,
    calcAge: function(){
        const currentYear = (new Date()).getFullYear();
        return currentYear - this.yearofBirth;
    }
}

fun();  // 'this' is global. log "Fatema"
user.calcAge(); // 'this' is the user object
fun.call(user); // 'this' is the user object. Logs "Marium"