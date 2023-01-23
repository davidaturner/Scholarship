using System;

namespace lessons
{
    class _03_04
    {
        static public string[] NameArray() 
        {
           string[] musician = {"John", "Mike", "Joe", "Kevin"};
           return musician;
        }

        static public string[] GradeArray() {
            string[] grades = {"A", "B", "C", "D", "F"};
            return grades;
        }

        static public void run()
        {
            var musicians = NameArray();
            Console.WriteLine(musicians[0]);
            Console.WriteLine(musicians[1]);
            Console.WriteLine(musicians[2]);
            Console.WriteLine(musicians[3]); 

            var grades = GradeArray();
            Console.WriteLine(grades[0]);
            Console.WriteLine(grades[1]);
            Console.WriteLine(grades[2]);
            Console.WriteLine(grades[3]); 
            Console.WriteLine(grades[4]); 
        }
    }
}