using IterativeONE.AccountModels;
using System;
using System.Collections.Generic;

namespace IterativeONE.AccountMaintenance
{
    public class EmployeeAccountGetBase
    {
        public virtual void DisplayAccounts(List<EmployeeAccountModelBase> employees)
        {
            foreach (var employee in employees)
            {
                DisplayEmployeeAccount(employee);
            }
        }

        public virtual void DisplayEmployeeAccount(EmployeeAccountModelBase account)
        {
            Console.WriteLine($"First Name:  {account.FirstName}");
            Console.WriteLine($"Last Name:  {account.LastName}");
            Console.WriteLine($"Full Name:  {account.FullName}");
            Console.WriteLine($"Email Address:  {account.EmailAddress}");
            Console.WriteLine($"Employee Type: {account.EmployeeType}");
            Console.WriteLine();
        }
    }
}