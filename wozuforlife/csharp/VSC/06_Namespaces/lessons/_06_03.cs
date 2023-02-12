using System;
// using namespaces
using csharpNamespace;
// using alias
using aliasName = csharpNamespace.myExample;

class _06_03
{
    public static void run()
    {
        aliasName.print();
        // myExample.print();
    }
}

namespace csharpNamespace
{
    class myExample
    {
        public static void print()
        {
            Console.WriteLine("Example of using a using directive.");
        }
    }
}