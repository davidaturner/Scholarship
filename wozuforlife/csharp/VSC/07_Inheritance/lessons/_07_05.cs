using System;

namespace lessons
{
    // public class Animal
    // {
    //     public virtual string GiveBirth()
    //     {
    //         return "I don't know how";
    //     }
    // }
    public class Animal
    {
        public string name;
        string birthMethod;

        public Animal() : this(string.Empty, string.Empty)
        {

        }
        public Animal(string name, string birthMethod)
        {
            this.name = name;
            this.birthMethod = birthMethod;
        }

        public virtual string Sound()
        {
            return "I make no sound.";
        }

        public string GiveBirth()
        {
            return birthMethod;
        }
    }

    // public class Mammal : Animal
    // {
    //     public override string GiveBirth()
    //     {
    //         return "I give live birth";
    //     }
    // }

    public class Person : Animal
    {
        public Person() : base() { }

        public Person(string name, string birthMethod) : base(name, birthMethod) { }

        public override string Sound()
        {
            return "I can speak!";
        }
    }


    // public class Bird : Animal
    // {
    //     public override string GiveBirth()
    //     {
    //         return "I lay eggs";
    //     }
    // }

    public class Bird : Animal
    {
        public bool flies;

        public Bird() : base()
        {
            this.flies = true;
        }

        public Bird(string name, bool flies)
            : base(name, "I lay eggs")
        {
            this.flies = flies;
        }

        public override string Sound()
        {
            return "Squawk!";
        }
        // public override string GiveBirth()
        // {
        //     return "I lay eggs";
        // }
    }

    class _07_05
    {
        public static void run()
        {
            Animal tiger = new Animal("tiger", "I give live birth.");
            Person toby = new Person("male person", "I can not give birth");
            Person koia = new Person("female person", "I give live birth");
            Bird duck = new Bird("duck", true);

            Console.WriteLine("Name: " + tiger.name + " Birth Method: " +
                                tiger.GiveBirth() + " Sounds: " + tiger.Sound());
            Console.WriteLine("Name: " + toby.name + " Birth Method: " +
                                toby.GiveBirth() + " Sounds: " + toby.Sound());
            Console.WriteLine("Name: " + koia.name + " Birth Method: " +
                                koia.GiveBirth() + " Sounds: " + koia.Sound());
            Console.WriteLine("Name: " + duck.name + " Birth Method: " +
                                duck.GiveBirth() + " Sounds: " + duck.Sound());
            Console.WriteLine("Can this " + duck.name + " fly?: "
                            + ((duck.flies) ? "Yes" : "Nope!"));

        }
    }
}