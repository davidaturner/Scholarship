using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDylanApp1.Clean
{
    internal static class EmailerClean
    {
        public static void EmailGrandTotal(double grandtotal)
        {
            Console.WriteLine("Thank you for your business! Your total is {0}.", grandtotal);
        }
    }
}
