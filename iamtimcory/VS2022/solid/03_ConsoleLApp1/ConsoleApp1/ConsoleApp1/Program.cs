using System;
using ConsoleApp1.Clean;

namespace ConsoleApp1
{
    internal class Program
    {
        //LSP
        // Basic: If object S is a subtype of P
        // Then object S may be replaced by the object P
        // Without break anything.
        // It can however allow side effects 
        // See: CalculatePerHourRate().
        // An uncaught exception is unexpected.
        // Ask question: Is CEO ISA an Employee? Nope.
        // Don't have a subclass have methods that it doesn't need it.
        static void Main(string[] args)
        {
            LiskovSubstitutionExampleClean example = new LiskovSubstitutionExampleClean();
            example.Main();
        }
    }
}
