namespace ConsoleApp1.Clean
{
    public interface IChoreClean
    {
        double HoursWorked { get; set; }
        bool IsCompleted { get; set; }
        string Name { get; set; }
        IPersonClean Owner { get; set; }

        void CompleteChore();
        void PerformHoursOfWork(double hoursWorked);
    }
}