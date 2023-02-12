using System;
using lessons.animalInterfaces;
using lessons.companyInterfaces;

namespace lessons
{
    namespace companyInterfaces
    {
        interface Employed
        {
            string companyName();
            Boolean isEmployee();
            int howLong();
        }
    }
    namespace animalInterfaces
    {

        interface Animal
        {
            string sound();
        }

        interface AnimalType
        {
            string type();
        }

        interface Named
        {
            string name();
        }

        // `Pet` inherits from `Animal` and `AnimalType` interfaces
        interface Pet : Animal, AnimalType, Named
        {
            Boolean isOwned();
            string ownerName();
        }

    }

    class Dog : Pet
    {
        private string petName;
        private string petType;
        private string petOwnerName;

        public Dog() : this("NO_NAME", "NO_OWNER") { }

        public Dog(String name, string ownerName)
        {
            petName = name;
            petType = "dog";
            petOwnerName = ownerName;
        }

        public bool isOwned()
        {
            return (petOwnerName != null && petOwnerName != "" && petOwnerName != "NO_OWNER");
        }

        public string name()
        {
            return petName;
        }

        public string ownerName()
        {
            return petOwnerName;
        }

        public string sound()
        {
            return "bark!";
        }

        public string type()
        {
            return petType;
        }
    }

    // `Employee` class inherits from `Person` class.
    //  - It inherits the `Animal` interface `sound()` method.
    //  - It inherits the `AnimalType` interface `type()` method.
    //  - It inherits the `Named` interface `name()` method.
    // It implements the `Employed` interface:
    //  - It implements the `Employed` interface `companyName()` 
    //      `howLong()` and `isEmployee` methods

    class Employee : Person, Employed
    {
        private string employeeCompanyName;
        private int workedHowLong;
        public Employee(string name) : this(name, "Not employed", 0)
        { }

        public Employee(string name, string companyName, int howLong)
            : base(name)
        {
            employeeCompanyName = companyName;
            workedHowLong = howLong;
        }

        public string companyName()
        {
            return employeeCompanyName;
        }

        public int howLong()
        {
            return workedHowLong;
        }

        public bool isEmployee()
        {
            return employeeCompanyName != "Not employed" && workedHowLong > 0;
        }
    }

    class Person : Animal, AnimalType, Named
    {
        private string animalName;
        private string animalType;
        private string animalSound;

        public Person(String name)
        {
            animalName = name;
            animalType = "person";
            animalSound = "yum yum";
        }

        public string name()
        {
            return animalName;
        }

        public string sound()
        {
            return animalSound;
        }

        public string type()
        {
            return animalType;
        }

        public string greeting()
        {
            return "Hi! My name is " + name() + ".";
        }
    }
    class _08_03
    {

        public static void run()
        {
            Dog toby = new Dog("Toby", "Mr Starboard");
            Console.WriteLine(toby.name() + " is a " + toby.type() + " and can " + toby.sound());

            Employee joeSantos = new Employee("Joe Santos", "ACME", 25);
            Console.WriteLine(joeSantos.name() + " worked for " + joeSantos.companyName()
                + " for " + joeSantos.howLong() + " years.");
            // Console.WriteLine("Hello, World!");
        }
    }
}