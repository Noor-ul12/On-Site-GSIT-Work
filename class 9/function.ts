

  // basic syntax of function 
  // function nameOfFunction(parm.1, parm.2) {
    // function boby
  // }


  //  function parameter
  function admitCard(name: string,       //   parameter          
    rollNumber: number,                  //   parameter
    courseName: string = "Typescript",   //   parameter with defalt value
     phone?: number                      // parameter optional
    ): void{

  //   function body

  console.log( "#-----------------------------#");
  console.log("Name:" + name);    // concatenation
  console.log(`rollNumber:  ${rollNumber}`);  //template literal (ES6)
  console.log("Course name " + courseName);
  //  check if phone number is undefined
  if(phone) {
  
  console.log("phone Number: " + phone);}

  console.log("#------------------------------#");
    }

    // invoke function

    admitCard("Noor ul", 45673,"Next.js",3322473662) // arument
    admitCard("hina",74653,undefined,174756383)  // arguument with defalt value


    //  student list array object

    const studentList = [
      {name: "Rahul",
      rollNumber: 54637,
      courseName: "java script",
      phone: 987654321
},
    { name: "Ali sami",
      rollNumber: 78906,
      courseName: "HTML CSS",
      
    },
    { name: "Sana khan",
      rollNumber: 90007,
      courseName: undefined,
      phone:7666765
    },
     ]

//  loop thorugh array of an object

for (const student of studentList) {
  // invoke function with object value as argument
  admitCard(student.name, student.rollNumber, student.courseName,student.phone)
}