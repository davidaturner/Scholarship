using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Basic data types...\r\n");
            new ProgramA().Main();
            new ProgramA().MainA();

            new ProgramB().Main();
            new ProgramB().MainA();
            new ProgramB().MainB();
            new ProgramB().MainC();
            new ProgramB().MainD();
            Console.WriteLine("\r\nDONE!");
        }
    }
}
