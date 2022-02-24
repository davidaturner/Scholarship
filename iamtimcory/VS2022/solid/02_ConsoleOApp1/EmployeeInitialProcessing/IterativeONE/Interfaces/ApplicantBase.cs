namespace IterativeONE.Interfaces
{
    public class ApplicantBase
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public ApplicantType ApplicantType { get; set; } = ApplicantType.Employee;
    }
}