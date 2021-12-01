using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDylanApp1.Clean
{
    internal static class TaxRateTableClean
    {
        public static double APPLY_7_0_PERCENTAGE = 7.0;
        public static double APPLY_7_5_PERCENTAGE = 7.5;
    }

    internal static class TaxmanClean
    {
        public static double ApplyTaxToSubtotal(double subtotal, double taxpercentage)
        {
            return subtotal * (1 + taxpercentage/100);
        }
    }
}
