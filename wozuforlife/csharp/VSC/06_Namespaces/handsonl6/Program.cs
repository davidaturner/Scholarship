using System;
using myAnotherProgram = myNamespace.AnotherProgram;
using textAnotherProgram = textNamespace.AnotherProgram;

namespace handsonl6
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            myAnotherProgram myProgram = new myAnotherProgram();
            myProgram.printText();
            textAnotherProgram textProgram = new textAnotherProgram();
            textProgram.printText();

        }
    }
}
