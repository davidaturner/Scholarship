using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_BigOConsole
{
    public class _05_NLogN
    {
        public class NLogarithmNFun
        {
            Boolean IsJagged;

            protected int[,] My2DArray { get; set; }
            protected int[][] MyJaggedArray { get; set; }

            public NLogarithmNFun(int[,] array)
            {
                Console.WriteLine("Multidimensional array stored.");
                IsJagged = false;
                My2DArray = array;
            }

            public NLogarithmNFun(int[][] array)
            {
                Console.WriteLine("Jagged array stored.");
                IsJagged = true;
                MyJaggedArray = array;
            }

            public Boolean isJagged()
            {
                return IsJagged;
            }
            public void PrintMyArray(Array myArray)
            {
                _05_NLogN.Print.MyArray(myArray);
            }

            public void PrintMyArray(int[] myArray)
            {
                Array theArray = Array.CreateInstance(typeof(int), myArray.Length);
                for(int i=0; i<myArray.Length; i++)
                {
                    theArray.SetValue(myArray[i], i);
                }
                _05_NLogN.Print.MyArray(theArray);
            }

            public void PrintMy2DArray(int[,] myArray)
            {
                for (int i = 0; i <= myArray.Rank; i++)
                {
                    _05_NLogN.Print.My1DArray(i, myArray);
                }
            }

            public void PrintRowFromMy2DArray(int row)
            {
                _05_NLogN.Print.My1DArray(row, My2DArray);
            }

            public void PrintMy2DArray()
            {
                _05_NLogN.Print.My2DArray(My2DArray);
            }

            public void PrintMyJaggedArray()
            {
                _05_NLogN.Print.MyJaggedArray(MyJaggedArray);
            }

        }

        public static class Print
        {
            public static void My1DArray(int row, int[,] the2DArray)
            {
                for (int i = 0; i < the2DArray.GetLength(0); i++)
                {
                    if (i == row)
                    {
                        for (int j = 0; j < the2DArray.GetLength(1); j++)
                        {
                            Console.Write("{0} ", the2DArray[i, j]);
                        }
                        break;
                    }
                }
                Console.WriteLine();
            }

            public static void MyArray(Array array)
            {
                for (int i = 0; i < array.GetLength(0); i++)
                {
                    Console.Write("{0} ", array.GetValue(i));
                }
                Console.WriteLine();
            }

            public static void My2DArray(int[,] the2DArray)
            {
                for (int i = 0; i < the2DArray.GetLength(0); i++)
                {
                    for (int j = 0; j < the2DArray.GetLength(1); j++)
                    {
                        Console.Write("{0} ", the2DArray[i, j]);
                    }
                    Console.WriteLine();
                }
                Console.WriteLine();
            }

            public static void MyJaggedArray(int[][] theJaggedArray)
            {
                Console.WriteLine(theJaggedArray.Rank);
                Console.WriteLine(theJaggedArray.Length);
                Console.WriteLine(theJaggedArray[0].Length);
                Console.WriteLine(theJaggedArray[1].Length);
                Console.WriteLine(theJaggedArray[1][0]);
            }

            public static Array Initialize2D()
            {
                // make a single dimension array
                Array MyArray1 = Array.CreateInstance(typeof(int), 5);

                // make a 2 dimensional array
                Array MyArray2 = Array.CreateInstance(typeof(int), 5, 3);

                // make an array container
                Array BossArray = Array.CreateInstance(typeof(Array), 2);
                BossArray.SetValue(MyArray1, 0);
                BossArray.SetValue(MyArray2, 1);

                return BossArray;
            }
        }

        public static class ArrayFun
        {
            public static void Run()
            {
                // make a single dimension array
                Array MyArray1 = Array.CreateInstance(typeof(int), 5);
                int b = 0;
                MyArray1.SetValue(b++, 0);
                MyArray1.SetValue(b++, 1);
                MyArray1.SetValue(b++, 2);

                // make a 3 dimensional array
                Array MyArray2 = Array.CreateInstance(typeof(int), 5, 3, 2);

                // make an array container
                Array BossArray = Array.CreateInstance(typeof(Array), 2);
                BossArray.SetValue(MyArray1, 0);
                BossArray.SetValue(MyArray2, 1);

                int i = 0, j, rank;
                foreach (Array anArray in BossArray)
                {
                    Console.WriteLine(anArray.ToString());
                    rank = anArray.Rank;
                    if (rank > 1)
                    {
                        Console.WriteLine("Lengths of {0:d} dimension array[{1:d}]", rank, i);
                        // show the lengths of each dimension
                        for (j = 0; j < rank; j++)
                        {
                            Console.WriteLine("    Length of dimension({0:d}) = {1:d}", j, anArray.GetLength(j));
                        }
                    }
                    else
                    {
                        Console.WriteLine("Lengths of single dimension array[{0:d}]", i);
                        Console.WriteLine(anArray.GetValue(0));
                        Console.WriteLine(anArray.GetValue(1));
                        Console.WriteLine(anArray.GetValue(2));
                    }
                    // show the total length of the entire array or all dimensions
                    Console.WriteLine("    Total length of the array = {0:d}", anArray.Length);
                    Console.WriteLine();
                    i++;
                }
            }
        }
    }
}
