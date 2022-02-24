using System;
using System.Collections.Generic;
using IterativeONE.AccountModels;
using IterativeONE.AccountMaintenance;
using IterativeONE.Applicants;
using IterativeONE.Interfaces;

namespace IterativeONE
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // OCP
            // Classes are open for extension.
            // Closed for modification.

            StandardMessages.GreetingNewEmployees();

            EmployeeAccountCreateBase createBase = new EmployeeAccountCreate();
            EmployeeAccountGetBase getBase = new EmployeeAccountGet();

            List<EmployeeAccountModelBase> newEmployees = 
                createBase.CreateAccountsForApplicants(

                    new List<ApplicantBase>()
                    {
                        new ApplicantForEmployee(){ FirstName = "Tim", LastName = "Corey" },
                        new ApplicantForManager(){ FirstName = "Coppola", LastName = "Talent" },
                        new ApplicantForExecutive(){ FirstName = "Boychik", LastName = "Annias" },
                    }
                );

            getBase.DisplayAccounts(newEmployees);

            StandardMessages.Done();
        }
    }
}
