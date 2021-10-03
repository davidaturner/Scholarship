using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class BadRentalSailboat : BadRentalBoat
    {
        // Bad practice - worked into a corner. shouldn't call an operation
        // that simply throws an exception.
        public override void StartEngine()
        {
            throw new Exception("I do not have an engine to Start");
        }

        // Bad practice
        public override void StopEngine()
        {
            throw new Exception("I do not have an engine to Stop");
        }
    }
}
