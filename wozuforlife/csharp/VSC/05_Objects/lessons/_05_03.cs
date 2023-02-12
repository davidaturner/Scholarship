using System;

namespace lessons
{
    public class _05_03
    {
        public static void run()
        {
            Student student1 = new Student();
            Student student2 = new Student("James", "Gosling", "C#");
            Console.WriteLine(student2.courseFocus);
            Console.WriteLine(student2.firstName);
            Console.WriteLine(student2.lastName);
        }
    }
}