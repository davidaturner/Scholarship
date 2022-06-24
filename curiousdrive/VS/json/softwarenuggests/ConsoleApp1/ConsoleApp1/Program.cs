using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    // This program models C# classes from JSON information.
    class Program
    {
        static void Main(string[] args)
        {
            // Create sample.json file. Good json.
            // Use online https://jsonlint.com/ to validate.

            // Manage NuGet Package. Browse. Newtonsoft.JSON.

            // Hit F10 to start Debug immediately on first line stop. Add watch to variables.
            Console.WriteLine("Starting application...");

            // Get sample.json file. Right click on json file. Copy full path.
            var filename = @"C:\Users\Turner\source\repos\Scholarship\curiousdrive\VS\json\softwarenuggests\ConsoleApp1\ConsoleApp1\sample.json";

            // Read in all text from sample.json file
            // NOTE: file should only contain the element you create object(s) for.
            string jsonText = File.ReadAllText(filename);

            // Convert into single object.
            MyModel jsonData = JsonConvert.DeserializeObject<MyModel>(jsonText);
            Console.WriteLine("...Done!");
            Console.ReadLine();

            //NOTE: Changes in JSON does NOT necessarily mean a change in Convert. The class CHANGES to fit the Json.
        }
    }
}
