using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class MyModel
    {
        // Example one: Cid and EntityName.
        public int Cid { get; set; }
        public string EntityName { get; set; }

        // Example two: Add object
        public _EntityStockShares EntityStockShares { get; set; }
    }

    public class _EntityStockShares
    {
        public string Label { get; set; }
        public string Description { get; set; }
        // Example three: Add an object containing an array.
        public _Units Units { get; set; }

    }

    public class _Units
    {
        public _Trades[] Trades { get; set; }
    }

    public class _Trades
    {
        public int TransactionId { get; set; }
        public int AccountId { get; set; }
        public DateTime DateOfTrade { get; set; }
        public string Ticker { get; set; }
        public string TransactionType { get; set; }
        public int Quantity { get; set; }
        public double CostPerShare { get; set; }
    }
}
