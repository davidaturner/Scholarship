using System;

namespace lessons
{
    class _04_04
    {
        public static string GreetMe(string name) {
            return ("Hello, " + name);
        }

        public static double GetAverage(double[] numbers) {

            if (numbers.Length == 0) {
                return 0.0;
            }
            double result = 0.0;    
            for(int i=0; i<numbers.Length; i++) {
                result += numbers[i];       
            }
            
            return (result / numbers.Length);
        }

        public static void run()
        {
            Console.WriteLine(_04_04.GreetMe("Joe"));
            double[] numbers = new double[]{1, 2, 3, 4, 5};
            Console.WriteLine(_04_04.GetAverage(numbers));
        }
    }
}
