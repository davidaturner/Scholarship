using System;
using ConsoleDylanApp1.Clean;

namespace ConsoleDylanApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to Tax Register!\r\n");
            Console.WriteLine("Adding up your groceries.");
            //TaxRegister reg = new TaxRegister(7.0);
            TaxRegisterClean reg = new TaxRegisterClean(TaxRateTableClean.APPLY_7_0_PERCENTAGE);
            reg.AddToSubtotal(1.00);
            reg.AddToSubtotal(2.50);
            reg.AddToSubtotal(6.50);
            reg.CalculateGrandTotalAndEmailResult();
            Console.WriteLine("\r\nDone!\r\n");
        }
    }
}
