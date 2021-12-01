using System;
using _01_ConsoleSApp1.Original;

namespace _01_ConsoleSApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Logger log = new Logger();
            log.ToConsole("Hello, World!", 0);
        }
    }
}
