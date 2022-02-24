using IterativeONE.AccountModels;
using IterativeONE.Interfaces;
using System.Collections.Generic;

namespace IterativeONE.AccountMaintenance
{
    public abstract class EmployeeAccountCreateBase
    {
        public List<EmployeeAccountModelBase> CreateAccountsForApplicants(List<ApplicantBase> applicants)
        {
            List<EmployeeAccountModelBase> employeeAccounts = new List<EmployeeAccountModelBase>();

            foreach (var applicant in applicants)
            {
                employeeAccounts.Add(CreateEmployeeAccount(applicant));
            }

            return employeeAccounts;
        }

        public virtual string CreateEmailAddress(EmployeeAccountModel account)
        {
            return account.FirstName.Substring(0, 1) + account.LastName + "@ourcompany.com";
        }

        public abstract EmployeeAccountModel CreateEmployeeAccount(ApplicantBase applicant);

        public virtual string CreateFullName(EmployeeAccountModel account)
        {
            return account.FirstName + " " + account.LastName;
        }
    }
}