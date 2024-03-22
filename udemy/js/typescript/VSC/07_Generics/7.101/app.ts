// Generic Utility/Built In Types
// Partial
// ReadOnly

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// if input params are available at time of runtime.
// function createCourseGoal(t:string, d:string, date:Date) 
//     : CourseGoal {
//         return {
//             title : t,
//             description : d,
//             completeUntil : date
//         }
//     }

// input params are not in final form yet at runtime.
// create Partial temporarily until all parms are available return finished object.
function createCourseGoal(t:string, d:string, date:Date) 
    : CourseGoal {
        let courseGoal : Partial<CourseGoal> = {};
        courseGoal.title = t;
        courseGoal.description = d;
        courseGoal.completeUntil = date;
        return courseGoal as CourseGoal; // typecast as finished object
        // return {
        //     // title : t,
        //     // description : d,
        //     // completeUntil : date
        // }
    }

// const but not immutable.
// const sports = ['Soccer', 'Football'];
// sports.push('Baseball');     // allowed; does not error
// sports.pop();                // allowed; does not error.

// set ReadOnly - now push and pop causes compile error.
const sports : Readonly<string[]> = ['Soccer', 'Football'];
// sports.push('Baseball');     // error
// sports.pop();                // error