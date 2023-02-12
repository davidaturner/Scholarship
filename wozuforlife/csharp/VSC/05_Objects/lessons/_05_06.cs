using System;

namespace lessons
{
    public class Greeter
    {
        public static string[] Greet(ActivityPerson[] people)
        {
            if (people == null || people.Length == 0)
            {
                return null;
            }

            string[] greetings = new string[people.Length];
            int i = 0;
            foreach(ActivityPerson person in people)
            {
                greetings[i] = "Hello " + person.firstName + " " + person.lastName + "!";
                Console.WriteLine(greetings[i]);
                i++;
            }

            return greetings;
        }
    }

    public class ActivityPerson {
        public string firstName;
        public string lastName;

        public ActivityPerson() {
            this.firstName = "";
            this.lastName = "";
        }
        public ActivityPerson(string firstName, string lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // TODO: Accessors
        public string FirstName
        {
            get { return firstName; }
            set { firstName = value; }
        }
        public string LastName
        {
            get { return lastName; }
            set { lastName = value; }
        }

        public string FullName
        {
            get { return firstName + " " + lastName; }
        }
    }

    class _05_06
    {
        public static void run()
        {
            ActivityPerson joesantos = new ActivityPerson("Joe", "Santos");
            ActivityPerson[] people = {
                joesantos,
                new ActivityPerson("Larry", "Crapos"),
                new ActivityPerson("Charles", "McKay")
            };

            string[]greetings = Greeter.Greet(people);
            Console.WriteLine(greetings.Length);
        }
    }
}
