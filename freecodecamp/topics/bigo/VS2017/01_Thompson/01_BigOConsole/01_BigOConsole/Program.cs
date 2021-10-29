using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_BigOConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            // Big O notation is used to analyze the efficiency of an algorithm
            // as its input approaches infinity. 

            Console.WriteLine("\r\nApplication STARTED...\r\n");

            // Big O Examples
            // O (NLogN)

            int[,] array = new int[3, 5] { { 1, 2, 4, 5, 6 }, { 7, 8, 9, 11, 12 }, { 14, 15, 16, 21, 22 } };
            int[][] jagged = new int[][]
            {
                new int[] { 1, 2, 3 },
                new int[] {7, 8, 9, 11, 12 }
            };

            _05_NLogN.NLogarithmNFun bigO = new _05_NLogN.NLogarithmNFun(jagged);
            bigO.PrintMyJaggedArray();

            Console.WriteLine("\r\n...DONE!\r\n");
            Console.ReadLine();
        }
    }
}
