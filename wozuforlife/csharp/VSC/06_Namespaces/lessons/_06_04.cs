using System;
using tv = lessons.Transportation.Vehicles; // alias of a namespace
using lessons.MyObjects; // using all classes in namespace

namespace lessons
{
    // namespace Transportation
    // {
    namespace Transportation.Vehicles {
        
        class Auto {
            public string make;
            public string model;
            
            public Auto() : this("", "")
            {}
            public Auto(string make, string model) {
                this.make = make;
                this.model = model;
            }
        }
    };

    namespace MyObjects {
        public class Widget {
            public int viewed;

            public Widget() {
                this.viewed = 0;
            }
        }
    };

    // }
    class _06_04
    {
        // TODO: 'TestWidget` method
        public static void TestWidget(Widget widget) {
            widget.viewed++;
        }

        public static void run()
        {
            tv.Auto myAuto = new tv.Auto("Subaru", "Forester");
            Console.WriteLine(myAuto.make+ " " + myAuto.model);

            Widget myWidget = new Widget();
            _06_04.TestWidget(myWidget);
            Console.WriteLine(myWidget.viewed);
            // Console.WriteLine("Hello World!");
        }
    }
}