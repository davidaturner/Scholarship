using System;

namespace lessons
{

    public class _05_04
    {
        public static void run()
        {
            // instantiate three student objects
            Student student1 = new Student();
            Student student2 = new Student();
            Student student3 = new Student();

            // set the information for student 1
            student1.FirstName = "Harry";
            student1.LastName = "Potter";
            student1.CourseFocus = "Flying";

            // set the information for student 2
            student2.FirstName = "Ron";
            student2.LastName = "Weasley";
            student2.CourseFocus = "Herbology";

            // set the information for student 3
            student3.FirstName = "Hermione";
            student3.LastName = "Granger";
            student3.CourseFocus = "Potions";

            // print information for each student
            Console.WriteLine(student1.FirstName + " " + student1.LastName + " is studying " + student1.CourseFocus);
            Console.WriteLine(student2.FirstName + " " + student2.LastName + " is studying " + student2.CourseFocus);
            Console.WriteLine(student3.FirstName + " " + student3.LastName + " is studying " + student3.CourseFocus);
        }
    }
}