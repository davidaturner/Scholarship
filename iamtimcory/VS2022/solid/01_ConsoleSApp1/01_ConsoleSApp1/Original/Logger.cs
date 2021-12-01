using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ConsoleSApp1.Original
{
    public class Logger
    {
        public void ToConsole(string message, int numberofLFsBefore)
        {
            StringBuilder lfs = new StringBuilder();
            if (numberofLFsBefore > 0)
            {
                for(int i=0; i<numberofLFsBefore; i++)
                {
                    lfs.Append("\r\n");
                }
            }
            lfs.Append(message);
            Console.WriteLine(lfs.ToString());
        }
    }
}
