using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDylanApp1.Original
{
    internal class TaxRegister
    {
        public double Subtotal { get; set; }
        public double TaxRatePercentage { get; set; }
        public double GrandTotal { get; set; }


        public TaxRegister(double taxrate)
        {
            Subtotal = 0.0;
            TaxRatePercentage = taxrate;
            GrandTotal = 0.0;
        }

        public double AddToSubtotal(double subtotal)
        {
            Console.WriteLine("Adding {0} dollar(s) to total.", subtotal);
            Subtotal += subtotal;
            return Subtotal;
        }

        public void CalculateGrandTotalAndEmailResult()
        {
            GrandTotal = Subtotal * (1 + (TaxRatePercentage / 100));
            EmailGrandTotal();
        }
        private void EmailGrandTotal()
        {
            Console.WriteLine("Thank you for your business! Your total is {0}.", GrandTotal);
        }




    }
}
