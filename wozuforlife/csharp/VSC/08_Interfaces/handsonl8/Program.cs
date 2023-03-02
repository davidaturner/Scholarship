using System;
using MammalSpace;

namespace handsonl8
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            // runPart1();
            runPart2();

        }

        static void runPart1()
        {
            // Dog
            Dog dog = new Dog();
            dog.speak();
            dog.run();
            // Cat
            Cat cat = new Cat();
            cat.speak();
            cat.run();
            // Cow
            Cow cow = new Cow();
            cow.speak();
            cow.run();
        }

        static void runMammal(Mammal mammal)
        {
            // Mammal
            mammal.speak();
            mammal.run();
            mammal.eat();
        }

        static void runPart2()
        {
            // Dog
            Dog dog = new Dog();
            runMammal(dog);
            // Dog
            Cat cat = new Cat();
            runMammal(cat);
            // Dog
            Cow cow = new Cow();
            runMammal(cow);
        }
    }
}
