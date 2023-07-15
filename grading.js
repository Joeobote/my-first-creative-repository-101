function studentsGrade(mark){
    if (mark>100){
        return "invalid"
    }
   else if (mark>79){
        return "A";
        
    }
    else if (mark>=60 && mark<=79){
        return "B"
    }
    else if(mark>49 && mark<=59){
        return "C"
    }
    else if(mark>40 && mark<=49){
        return "D"
    }
    else if(mark<40 && mark>0){
        return "E"
    }
else if (mark<0){
    return "Invalid"
}
    

}
let result= studentsGrade(-34)
console.log(result)

