using System;
using lessons.shapes;

namespace lessons
{
    namespace shapes
    {
        public interface Shape
        {
            double area();
        }

        public class Square : Shape
        {
            double length;

            // overloaded constructor
            public Square(double length)
            {
                this.length = length;
            }

            // interface method
            public double area()
            {
                // area = length * length
                return length * length;
            }
        }

        public class Circle : Shape
        {
            double radius;

            public Circle(double radius)
            {
                this.radius = radius;
            }

            public double area()
            {
                // area = 3.14 * radius * radius
                return 3.14 * radius * radius;
            }
        }
    }
    class _08_02
    {
        public static void run()
        {
            double squareLength = 19.50;
            Square sq = new Square(squareLength);
            double area = sq.area();
            Console.WriteLine(area);

            double circleRadius = 4;
            Circle cir = new Circle(circleRadius);
            double circleArea = cir.area();
            Console.WriteLine(circleArea);
            // Console.WriteLine("Hello World!");
        }
    }
}