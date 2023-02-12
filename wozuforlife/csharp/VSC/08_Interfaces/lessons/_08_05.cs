using System;

namespace lessons
{
    public class Animal {
            
        private string name;
        private string birthMethod;

        public Animal () : this(string.Empty, string.Empty) {}

        public Animal(string name, string birthMethod) {
            this.name = name;
            if (birthMethod != string.Empty) {
                this.birthMethod = birthMethod;
            } else {
                this.birthMethod = "I don't know how";
            }
        }

        public virtual string GiveBirth() {
            return this.birthMethod;
            // return "I don't know how";
        }
    }

    public class Mammal : Animal 
    {
        public override string GiveBirth() {
            return "I give live birth";
        }
    }

    public class Bird : Animal 
    {
        private bool flies;

        public Bird(): base() {
            this.flies = true;
        }

        public Bird(string name, bool flies)
            : base(name, "I lay eggs")
        {
            this.flies = flies;
        }

        // public override string GiveBirth() {
        //     return this.giveBirth;
        // }
    }

    class _08_05
    {

        public static void run()
        {
            Animal animal = new Animal();
            Console.WriteLine(animal.GiveBirth());
            Mammal mammal = new Mammal();
            Console.WriteLine(mammal.GiveBirth());
            Bird bird = new Bird();
            Console.WriteLine(bird.GiveBirth());
            // Console.WriteLine("Hello, World!");
        }
    }
}