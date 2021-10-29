using System;
using System.Collections.Generic;
using System.Text;

namespace Lesson1
{
    public class _03_Variables
    {
        public static string ProgramName()
        {
            return "Variables";
        }

        public static void Run()
        {
            string Name = "George";
            int Age = 70;

            Console.WriteLine("There once was a man named " + Name + ".");
            Console.WriteLine("George was " + Age + " years old.");
            Console.WriteLine("He really liked the name " + Name + ".");
            Console.WriteLine("But he didn't like being " + Age + " years old.");
        }

    }
}
