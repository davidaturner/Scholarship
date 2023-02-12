using System;

namespace lessons {

    public class Student
    {
        public string firstName;
        public string lastName;
        public string courseFocus;

        // constructor
        public Student()
        {
            firstName = "";
            lastName = "";
            courseFocus = "";

            // Console.WriteLine("Student object created!");
        }

        public Student(string first, string last, string focus)
        {
            firstName = first;
            lastName = last;
            courseFocus = focus;

            // Console.WriteLine(firstName + " " + lastName + " is studying " + courseFocus);
        }

        // Declare a FirstName property of type string
        public string FirstName
        {
            get
            {
                return firstName;
            }
            set
            {
                firstName = value;
            }
        }

        // Declare a LastName property of type string
        public string LastName
        {
            get
            {
                return lastName;
            }
            set
            {
                lastName = value;
            }
        }

        // Declare a CourseFocus property of type string
        public string CourseFocus
        {
            get
            {
                return courseFocus;
            }
            set
            {
                courseFocus = value;
            }
        }
    }

}