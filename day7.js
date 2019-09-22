const educationInfo={
    ssc:{
        instute:"bhs",
        year:"2011",
        group:"science"
    }
}

const newInfo={
    hsc:{
        instute:"swc",
        year:"2013",
        group:"science"
    }
}

const updateEducationInfo=(currentInfo,newInfo)=>{
     currentInfo.ssc.gpa=5.00;
     return newInfo={...currentInfo,...newInfo}
}

console.log(updateEducationInfo(educationInfo,newInfo));