using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_BigOConsole
{
    public class _03_N2nd
    {
        public class InNetworkTotalTime
        {
            public int MinutesPerFacilityTime { get; set; }

            public InNetworkTotalTime(int minutesPerFacilityTime)
            {
                MinutesPerFacilityTime = (minutesPerFacilityTime <= 0.0) ? 1 : minutesPerFacilityTime;
            }

            public void CalculateTotalTime(ArrayList network)
            {
                double totalNetworkTime = 0;
                int numberOfProviders = 0;

                // O(N2)
                Console.WriteLine("Facilities In Network: " + network.Count);
                Console.WriteLine("Minutes Conversion: " + MinutesPerFacilityTime);
                for (int i=0; i < network.Count; i++)
                {                               
                    double[] facility = (double[])network[i];                       // O(1)
                    Console.WriteLine("Facility " + (i + 1) + " Times: " + 
                        printFacilityTimes(facility, MinutesPerFacilityTime));
                    for(int j=0; j < facility.Length; j++)
                    {
                        numberOfProviders++;                                        // O(1)
                        totalNetworkTime += MinutesPerFacilityTime * facility[j];   // O(1)
                    }
                }
                Console.WriteLine("Number of Provider Times: " + numberOfProviders);
                Console.WriteLine("   Total Network Time: " + totalNetworkTime + " minutes.");
            }

            private static string printFacilityTimes(double[] facilityTimes, double minutes)
            {
                StringBuilder str = new StringBuilder();
                for (int i = 0; i < facilityTimes.Length; i++)
                {
                    str.Append(facilityTimes[i]* minutes + " ");
                }
                return str.ToString();
            }
        }
    }
}
