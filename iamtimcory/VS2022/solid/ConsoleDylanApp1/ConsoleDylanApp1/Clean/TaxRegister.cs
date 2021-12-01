using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDylanApp1.Clean
{
    internal class TaxRegister
    {
        protected double Subtotal { get; set; }
        protected double TaxRatePercentage { get; set; }
        protected double GrandTotal { get; set; }


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
            CalculateGrandTotal();
            EmailGrandTotal();
        }

        virtual public void CalculateGrandTotal()
        {
            GrandTotal = Subtotal * (1 + (TaxRatePercentage / 100));
        }
        virtual public void EmailGrandTotal()
        {
            Console.WriteLine("Thank you for your business! Your total is {0}.", GrandTotal);
        }




    }
}
