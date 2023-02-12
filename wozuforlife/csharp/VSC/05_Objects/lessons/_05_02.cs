using System;

namespace lessons
{

    public class _05_02
    {
        public static void run()
        {
            // New student object instantiated
            Student student1 = new Student();
            student1.courseFocus = "Algebra";
            student1.firstName = "Paul";
            student1.lastName = "Landers";
            Console.WriteLine(student1.courseFocus);
            Console.WriteLine(student1.firstName);
            Console.WriteLine(student1.lastName);
        }
    }
}