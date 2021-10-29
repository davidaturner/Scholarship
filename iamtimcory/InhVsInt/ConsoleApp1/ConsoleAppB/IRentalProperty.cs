using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppB
{
    public interface IRentalProperty
    {
        int RentalId { get; set; }
        string CurrentRenter { get; set; }
        decimal RentPerDay { get; set; }
    }
}
