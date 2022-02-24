using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    public static class Emailer
    {
        public static void SendEmail(Person owner, string message)
        {
            Console.WriteLine($"Mail is being sent to {owner.Email}.");
        }
    }
}
