namespace ConsoleApp1.Clean
{
    public interface IApplicantModel
    {
        string FirstName { get; set; }
        string LastName { get; set; }

        IAccountProcessorClean AccountProcessor { get; set; }
    }
}