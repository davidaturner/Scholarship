using System;

namespace lessons
{
    class BaseClass
    {
        protected string name;
        public virtual string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }
    }

    class ChildClass: BaseClass
    {
        public override string Name
        {
            set
            {
                if (value != string.Empty)
                {
                    name = value;
                }
                else
                {
                    name = "Unknown";
                }
            }
        }
    }

    // class MemberSupplies
    // {
    public class Member
    {
        public string name;

        // baseSupplies is defined as protected so that it may be accessed 
        // only by this class and derived classes.
        protected double baseSupplies;

        // Constructor to set the name and baseSupplies values.
        public Member(string name, double baseSupplies)
        {
            this.name = name;
            this.baseSupplies = baseSupplies;
        }

        // Declared virtual so it can be overridden.
        public virtual double CalculateSupplies()
        {
            return baseSupplies;
        }
    }

    // Derive (inherit) a new class from Member.
    public class PremiumMember: Member
    {
        // New field that will affect the result of `CalculateSupplies`.
        private double premiumSupplies;

        // The constructor calls the base-class version and initializes 
        // the premiumSupplies field.
        public PremiumMember(string name, double baseSupplies, double premiumSupplies)
            : base(name, baseSupplies)
        {
            this.premiumSupplies = premiumSupplies;
        }

        // Override the `CalculateSupplies` method to take premium into account.
        public override double CalculateSupplies()
        {
            return baseSupplies + premiumSupplies;
        }
    }
    // }

    class _08_04
    {

        public static void run()
        {
            ChildClass child = new ChildClass();
            child.Name = "Tarquin";

            BaseClass nonameBase = new BaseClass();
            nonameBase.Name=string.Empty;
            Console.WriteLine(nonameBase.Name);
            ChildClass noname = new ChildClass();
            noname.Name=string.Empty;
            Console.WriteLine(noname.Name);

            Console.WriteLine(child.Name);
            // Create some new employees.
            PremiumMember member1 = new PremiumMember("Alice", 11200, 500);
            Member member2 = new Member("Bob", 11200);
            Console.WriteLine("Premium Member: " + member1.name + " paid " + 
                                                member1.CalculateSupplies());
            Console.WriteLine("Member: " + member2.name + " paid " + 
                                        member2.CalculateSupplies());
        }
    }
}