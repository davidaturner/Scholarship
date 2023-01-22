using System;

namespace lessons
{
    class _02_04
    {
        static public void ifElseShortExample()
        {

            var a = 5;
            var b = 6;
            if (a == 6)
            {
                Console.WriteLine("A equals six!");
            }
            else if (b == 6)
            {
                Console.WriteLine("B equals six!");
            }
            else
            {
                Console.WriteLine("False");
            }
        }

        static public void ifElseLongerExample()
        {
            // First the variable rating is declared and set to 7.
            var rating = 7;

            // if the user rated the restaurant 5-stars, print "This food is the best! I could eat this every day."
            if (rating == 5)
            {
                Console.WriteLine("This food is the best! I could eat this every day.");
            }
            // if the user rated the restaurant 4-stars, print "Good meal."
            else if (rating == 4)
            {
                Console.WriteLine("Good meal.");
            }
            // if the user rated the restaurant 3-stars, print "It was OK."
            else if (rating == 3)
            {
                Console.WriteLine("It was OK.");
            }
            // if the user rated the restaurant 2-stars, print "I did not like this, but it's cheap."
            else if (rating == 2)
            {
                Console.WriteLine("I did not like this, but it's cheap.");
            }
            // if the user rated the restaurant 1-star,  print "I will never eat here again."
            else if (rating == 1)
            {
                Console.WriteLine("I will never eat here again.");
            }
            // Validation for number entered outside of rating.
            else
            {
                Console.WriteLine("Please enter a valid rating of 1-5.");
            }
        }

        static public void orderMatters(bool isFirstOrder)
        {

            int score = 95;
            string grade = "F";

            if (!isFirstOrder)
            {
                if (score > 70)
                {
                    grade = "C";
                }
                else if (score > 80)
                {
                    grade = "B";
                }
                else if (score > 90)
                {
                    grade = "A";
                }
            }
            else
            {
                if (score > 90)
                {
                    grade = "A";
                }
                else if (score > 80)
                {
                    grade = "B";
                }
                else if (score > 70)
                {
                    grade = "C";
                }
            }

            Console.WriteLine(grade);
        }

        static public void inequality(int frankAge, int kevinAge)
        {
            Console.WriteLine(frankAge != kevinAge);
        }

        static public void run()
        {
            _02_04.ifElseShortExample();
            _02_04.ifElseLongerExample();
            _02_04.orderMatters(false);
            _02_04.orderMatters(true);
            _02_04.inequality(30, 40);
            _02_04.inequality(40, 40);
        }
    }
}