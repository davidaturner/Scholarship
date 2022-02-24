using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    //SRP Exception: Simple messaging.
    public static class StandardMessages
    {
        public static void DisplayHelloworld()
        {
            Console.WriteLine("Hello, World");
        }

        public static void DisplayDone()
        {
            Console.WriteLine("\r\n>>> Done!");
        }

        public static void DisplayPromptForFieldName(string fieldname)
        {
            Console.Write($"Enter {fieldname} : ");
        }

        public static void DisplayValidationError(string fieldName)
        {
            Console.WriteLine($"You didn't enter a {fieldName}.");
        }
    }
}
