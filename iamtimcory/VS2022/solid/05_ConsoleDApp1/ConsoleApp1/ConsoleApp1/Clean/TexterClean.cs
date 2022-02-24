using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public class TexterClean : IMessageSender
    {
        public void SendMessage(IPersonClean owner, string message)
        {
            Console.WriteLine($"This text is for {owner.FirstName}. {message}.");
        }
    }
}
