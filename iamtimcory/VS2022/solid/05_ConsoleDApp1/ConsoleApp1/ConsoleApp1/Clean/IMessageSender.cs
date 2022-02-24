namespace ConsoleApp1.Clean
{
    public interface IMessageSender
    {
        void SendMessage(IPersonClean owner, string message);
    }
}