namespace ConsoleApp1.Clean
{
    public class AccountProcessorCleanBase : IAccountProcessorClean
    {
        public virtual EmployeeModel CreateEmployee(IApplicantModel person)
        {
            EmployeeModel employee = new EmployeeModel()
            {
                FirstName = person.FirstName,
                LastName = person.LastName
            };

            employee.EmailAddress = $"{person.FirstName.Substring(0, 1) + person.LastName}@ourcompany.com";
            return employee;
        }
    }
}