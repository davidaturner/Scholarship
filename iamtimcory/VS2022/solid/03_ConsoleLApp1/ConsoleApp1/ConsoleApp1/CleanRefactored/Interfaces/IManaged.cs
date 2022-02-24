namespace ConsoleApp1.Refactored.Interfaces
{
    public interface IManaged
    {
        EmployeeFact Manager { get; set; }

        void AssignManager(EmployeeFact manager);
    }
}