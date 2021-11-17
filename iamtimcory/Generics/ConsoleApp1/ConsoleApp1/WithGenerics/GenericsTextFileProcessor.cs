using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp1.Models;

namespace ConsoleApp1.WithGenerics
{
    class GenericsTextFileProcessor {

        public static void SaveToTextFile<T>(List<T> data, string filepath) where T: class, new()
        {
            List<string> lines = new List<string>();
            StringBuilder line = new StringBuilder();

            lines.Add(BuildHeaderLine<T>(data[0]));

            foreach(var lineOfData in data)
            {
                lines.Add(BuildDataLine<T>(lineOfData));
            }

            Console.WriteLine("Writing Data to {0} file...", filepath);
            System.IO.File.WriteAllLines(filepath, lines);

        }
        private static string BuildHeaderLine<T>(T lineOfData)
        {
            return BuildLine<T>(lineOfData, true);
        }
        private static string BuildDataLine<T>(T lineOfData)
        {
            return BuildLine<T>(lineOfData, false);
        }
        private static string BuildLine<T>(T lineOfData, bool isHeader)
        {
            StringBuilder line = new StringBuilder();

            var cols = lineOfData.GetType().GetProperties();
            for (int i = 0; i < cols.Length; i++)
            {
                var value = (isHeader == true) ? cols[i].Name : cols[i].GetValue(lineOfData);
                line.Append(value);
                if (i < cols.Length - 1)
                {
                    line.Append(",");
                }
            }
            Console.WriteLine(line.ToString());

            return line.ToString();
        }

        // TODO Load from file into create the appropriate entities.
        public static List<T> LoadFromTextFile<T>(string filepath) where T : class, new()
        {
            // TO-DO: Determine entitie and convert.
            List<string> lines = System.IO.File.ReadAllLines(filepath).ToList();
            T entry = new T();
            var cols = entry.GetType().GetProperties();

            // split and save first line.
            var headers = lines[0].Split(',');

            // remove header for now.
            lines.RemoveAt(0);

            // Set up return values
            List<T> output = new List<T>();

            foreach(var line in lines)
            {
                Object[] results = new Object[3];
                int r = 0;

                entry = new T();

                var vals = line.Split(',');

                for(int i=0; i<headers.Length;i++)
                {
                    foreach (var col in cols)
                    {

                        if (col.Name == headers[i])
                        {
                            col.SetValue(entry, Convert.ChangeType(vals[i], col.PropertyType));
                            results[r] = col.GetValue(entry);
                            r++;
                        }
                    }

                }
                Console.WriteLine($"A {results[0]} B {results[1]} C {results[2]}");
                output.Add(entry);
            }

            return output;

        }

    }
}
