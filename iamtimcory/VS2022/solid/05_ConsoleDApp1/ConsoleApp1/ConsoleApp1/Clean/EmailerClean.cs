using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    // Make interface more generic (optional)
    public class EmailerClean : IMessageSender
    {
        public void SendMessage(IPersonClean owner, string message)
        {
            Console.WriteLine($"Mail is being sent to {owner.Email}.");
        }
    }
}
