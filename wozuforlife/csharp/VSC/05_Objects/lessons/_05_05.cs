using System;

namespace lessons
{
    class _05_05
    {
        // A static class is the same as a non-static class, except that you cannot 
        // instantiate an instance of one. In other words, you cannot use the new 
        // keyword to create an instance of it. Since you cannot create an instance, 
        // you must use the class name to access the members of the static class.

        // To make a class static, the static keyword is located after the access 
        // modifier and before the class keyword as shown below. The Add method also 
        // uses the static keyword:

        public static void run()
        {
            double dubDub = -2.34;
            Console.WriteLine(Math.Abs(dubDub));

            double result = MyMath.Add(5,4);
            Console.WriteLine(result);

        }
    }
}
