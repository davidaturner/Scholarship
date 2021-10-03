using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_RecursiveConsole
{
    public class ATMAnalogy
    {
        public ArrayList TheLine { get; set; }
        public static int LineCount;

        public ATMAnalogy ()
        {
            TheLine = new ArrayList();
            LineCount = 0;
        }

        public void Add(string Name)
        {
            TheLine.Add(Name);
        }

        public void Remove(string Name)
        {
            TheLine.Remove(Name);
        }

        public int PlaceInline(string Name)
        {
            return 0;
        }
    }
}
