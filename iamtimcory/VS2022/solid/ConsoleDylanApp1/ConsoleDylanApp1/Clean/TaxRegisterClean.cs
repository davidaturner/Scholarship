using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleDylanApp1.Clean
{
    internal class TaxRegisterClean : TaxRegister
    {
        public TaxRegisterClean(double taxrate) : base(taxrate)
        { }

        // Apply SRP by decoupling
        // 1. tax rate.
        // 2. applying tax rate.
        // 3. emailing result
        // Also adding decoupled calculating grand total (without emailing result).

        public override void CalculateGrandTotal()
        {
            GrandTotal = TaxmanClean.ApplyTaxToSubtotal(Subtotal, TaxRatePercentage);
        }
        public override void EmailGrandTotal()
        {
            EmailerClean.EmailGrandTotal(GrandTotal);
        }
    }
}
