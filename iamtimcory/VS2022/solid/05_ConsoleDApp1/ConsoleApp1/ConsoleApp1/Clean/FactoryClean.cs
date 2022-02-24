using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    /* One place with all the dependences
     * so that the high level module does not
     * have to insubstantiate.
     */
    public static class FactoryClean
    {
        public static IPersonClean CreatePerson()
        {
            return new PersonClean();  
        }

        public static IChoreClean CreateChore()
        {
            return new ChoreClean(CreateLogger(), CreateMessageSender());
        }

        public static ILoggerClean CreateLogger()
        {
            return new LoggerClean();
        }

        public static IMessageSender CreateMessageSender()
        {
            //return new EmailerClean();
            return new TexterClean();
        }
    }
}
