using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IterativeONE.AccountModels;
using IterativeONE.Interfaces;

namespace IterativeONE.AccountMaintenance
{
    public class EmployeeAccountCreate : EmployeeAccountCreateBase
    {
        public override EmployeeAccountModel CreateEmployeeAccount(ApplicantBase applicant)
        {
            EmployeeAccountModel account = new EmployeeAccountModel()
            {
                FirstName = applicant.FirstName,
                LastName = applicant.LastName,
            };

            account.FullName = CreateFullName(account);
            account.EmailAddress = CreateEmailAddress(account);

            account.EmployeeType = (EmployeeType)applicant.ApplicantType;

            return account;
        }
    }
}
