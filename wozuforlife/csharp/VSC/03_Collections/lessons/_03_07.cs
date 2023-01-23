using System;

namespace lessons
{
    class _03_07
    {
        static public int[] DoubleArray(int[] numbers) {
           int[] results = new int[numbers.Length];
           
           for(int i=0; i<results.Length; i++) {
               results[i] = 2 * numbers[i];
           }

            return results;
        }

        static public double GetAverage(int[] numbers) {
            double results = 0.0;
            if (numbers.Length > 0)
            {
                int i = 0;
                do
                {
                    results += numbers[i];
                } while (++i < numbers.Length);

                results /= numbers.Length;
            }
            return results;
        }


        static public void run(int[] array1)
        {
            var doubled = _03_07.DoubleArray(array1);
            Console.WriteLine(doubled[0]);
            Console.WriteLine(doubled[1]);
            Console.WriteLine(doubled[2]);
            Console.WriteLine(_03_07.GetAverage(array1));
            // Console.WriteLine("Hello World!");
        }
    }
}