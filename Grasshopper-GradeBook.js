// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
    // Code here
    const avarage = ((s1 + s2 + s3)/3);
    let grade = "";
    switch (true) {
    case  avarage >= 90:
        grade = "A";
        break;
        
    case  avarage >= 80:
        grade = "B";
        break;
        
    case  avarage >= 70:
        grade = "C";
        break;
        
    case  avarage >= 60:
        grade = "D";
        break;
        
        
    default:
        grade = "F";
      }
    return grade;
    
  }

  //lärdomar, Testa för när switchen är true. Förmodligen mindre och snabbare kod att anväda If / else if men ville testa något nytt