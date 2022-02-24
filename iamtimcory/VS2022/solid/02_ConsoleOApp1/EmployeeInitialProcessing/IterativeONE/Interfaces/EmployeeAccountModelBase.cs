namespace IterativeONE.AccountModels
{
    public class EmployeeAccountModelBase
    {
        public string FullName { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        public EmployeeType EmployeeType { get; set; } = EmployeeType.Employee;
    }
}