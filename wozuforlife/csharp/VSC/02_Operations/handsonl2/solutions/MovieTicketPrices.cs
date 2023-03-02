using System;
namespace handsonl2.solutions
{

    class MovieTicketPrices
    {
        public bool checkAgeLimit(int age, int lower, int higher)
        {
            return (age >= lower && age < higher + 1);
        }

        public void runSolution01(int age)
        {

            // If the user is a senior citizen(they are 65 years of 
            // age or older), they receive a discounted price of $7 
            // per ticket.
            // If the user is 12 years of age or younger, they 
            // receive a discounted price of $8 per ticket.
            // Otherwise, they will pay $10.

            if (age >= 65)
            {
                Console.WriteLine("You pay $7.");
            }
            else if (age >= 0 && age < 13)
            {
                Console.WriteLine("You pay $8.");
            }
            else
            {
                Console.WriteLine("You pay $10.");
            }
        }

        public void runSolution01()
        {

            int age = -1;
            runSolution01(age);
        }

        public void runSolution02()
        {
            int age = 0;
            bool isStudent = true;

            // If the user is 12 years of age or younger OR a 
            // student, they receive a discounted price of $8 per 
            // ticket.
            bool ageInRange = checkAgeLimit(age, 0, 12);
            Console.WriteLine("agePrice = " + ageInRange);
            Console.WriteLine("isStudent = " + isStudent);

            if (checkAgeLimit(age, 0, 12) || isStudent)
            {
                Console.WriteLine("You pay 8.");
            }
            else
            {
                runSolution01(age);
            }
        }

        public void runSolution03()
        {

            int age = 0;

            // Add another test that checks for any negative values 
            // for the variable age.If age is indeed set to a negative 
            // value, print "Invalid age" to the console.

            if (age < 0)
            {
                Console.WriteLine("Invalid age!");
            }
            else
            {
                runSolution02();
            }
        }
        public void helloWorld()
        {
            Console.WriteLine("Hello from: MovieTiketPrices");
        }
    }
}