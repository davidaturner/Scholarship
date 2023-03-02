using System;

namespace MammalSpace
{

    interface Animal
    {

        void eat();
    }

    interface Mammal : Animal
    {

        void run();
        void speak();
    }

    class Dog : Mammal
    {
        public void eat()
        {
            Console.WriteLine("Dogs eat bones.");
        }

        public void run()
        {
            Console.WriteLine("Dogs can run at a top speed of 45 mph!");
        }

        public void speak()
        {
            Console.WriteLine("Bark!");
        }
    }

    class Cat : Mammal
    {
        public void eat()
        {
            Console.WriteLine("Cats eat mice.");
        }

        public void run()
        {
            Console.WriteLine("Cats can run at a top speed of 30 mph!");
        }

        public void speak()
        {
            Console.WriteLine("Meow!");
        }
    }

    class Cow : Mammal
    {
        public void eat()
        {
            Console.WriteLine("Cows eat grass.");
        }

        public void run()
        {
            Console.WriteLine("Cows can run at a top speed of 25 mph!");
        }

        public void speak()
        {
            Console.WriteLine("Moo!");
        }
    }
}