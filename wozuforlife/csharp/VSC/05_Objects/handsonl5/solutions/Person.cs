using System;

namespace handsonl5.solutions
{

    class Person
    {
        public Person() { }

        public Person(string firstName, string lastName, int age)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = 0;

            if (age >= 0)
            {
                this.age = age;
            }
            else
            {
                Console.WriteLine(
                    "Attempted to set age to an invalid value. Set age to 0 instead.");
            }
        }

        private string firstName;
        public string FirstName
        {

            get { return this.firstName; }
            set { this.firstName = value; }
        }

        private string lastName;
        public string LastName
        {

            get { return this.lastName; }
            set { this.lastName = value; }
        }

        private int age;
        public int Age
        {

            get { return this.age; }
            set { this.age = value; }
        }
    }
}