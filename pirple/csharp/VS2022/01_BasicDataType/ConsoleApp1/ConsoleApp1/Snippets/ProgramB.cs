using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class ProgramB
    {
        // variable can be declared once and changed later on.

        // constant can be declared once and cannot changer later on.

        public void Main()
        {
            // Naming
            // must stop with a letter
            // can follow by _ or alphanumeric
            int myInt = 1;
            int my_int = 2;

            const int MY_INT = 99;
            Console.WriteLine(MY_INT);
        }

        public void MainA()
        {
            //int
            // 32 bits signed.
            // byte
            // 8 bit unsigned version of int
            byte ibyte = 255;
            byte JBYTE = 2;
            // short
            //16 bit signed version of int
            short kshort = -600;
            const short LSHORT = 45;
            // long
            // 64 bits signed
            long mlong = 349203994775554;
            const long NLONG = -333394482882222;

            //uint, ushort, ulong - unsigned versions of int.

            //sbyte - signed version of byte.
            sbyte osbyte = -120;
            const sbyte PSBYTE = 23;

            Console.WriteLine(PSBYTE);
        }

        public void MainB()
        {
            //float
            // 32 bits 
            // assignment must end with f
            // else assumes it is a double
            // accurate to 7 places.
            float afloat = 3.334335f;
            const float BFLOAT = 33.42f;

            //double
            // 64 bits
            //accurate to 15 places.
            double dfloat = 3.559494875477d;
            const double CFLOAT = 4.5;

            Console.WriteLine(CFLOAT);
        }

        public void MainC()
        {
            //char
            // they can hold one value at a time
            // from a letter to a symbol.
            char echar = 'a';
            const char FCHAR = '-';
            Console.WriteLine(FCHAR);
        }

        public void MainD()
        {
            //boolean
            // holds the value of true or false
            bool gbool = true;
            const bool HBOOL = false;
            Console.WriteLine(HBOOL);
        }

    }
}
