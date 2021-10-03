using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_BigOConsole
{
    public class _02_Linear
    {
        public class PracticeTotalTime
        {
            public double MinutesPerDentistTime { get; set; }

            public PracticeTotalTime (double minutesPerDentistTime)
            {
                MinutesPerDentistTime = (minutesPerDentistTime <= 0.0)?1: minutesPerDentistTime;
            }

            public void CalculateTotalTime(double[] dentistTimes)
            {
                double[] converted = new double[dentistTimes.Length];
                double totalPracticeTime = 0;
                for(int i = 0; i < dentistTimes.Length; i++)                // O(N) - significant, as N > infinity - worse case
                {
                    converted[i] = dentistTimes[i] * MinutesPerDentistTime; // O(1)
                    totalPracticeTime += converted[i];                      // O(1)
                }
                Console.WriteLine("Dentists in Practice: " + dentistTimes.Length);
                Console.WriteLine("Dentists Times: " + printDentistTimes(dentistTimes));
                Console.WriteLine("Minutes Conversion: " + MinutesPerDentistTime);
                Console.WriteLine("Dentist Times Converted: " + printDentistTimes(converted));
                Console.WriteLine("   Total Practice Time: " + totalPracticeTime);
            }

            private static string printDentistTimes(double[] dentistTimes)
            {
                StringBuilder str = new StringBuilder();
                for(int i = 0; i < dentistTimes.Length; i++)
                {
                    str.Append(dentistTimes[i] + " ");
                }
                return str.ToString();
            }
        }

        public class DentistTotalTime
        {
            public int MinutesPerPatient { get; set; }

            public DentistTotalTime(int minutesPerPatient)
            {
                MinutesPerPatient = minutesPerPatient;
            }

            public int CalculateTotalTime(int numberOfPatients)
            {
                int totalTime = MinutesPerPatient * numberOfPatients;
                Console.WriteLine("Number of patients: " + numberOfPatients);
                Console.WriteLine("Minutes per patients: " + MinutesPerPatient);
                Console.WriteLine("   Total Time: " + totalTime);
                return totalTime;
            }
        }

    }
}
