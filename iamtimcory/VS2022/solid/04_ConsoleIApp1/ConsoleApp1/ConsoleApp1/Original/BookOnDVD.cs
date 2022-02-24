using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Original
{
    // ISP
    // A client should NOT depend on an
    // interface they DO NOT use.
    public class BookOnDVD : ILibraryItem
    {
        public string Author { get; set; }
        public DateTime BorrowDate { get; set; }
        public string Borrower { get; set; }
        public int CheckOutDurationInDays { get; set; } = 14;
        public string LibraryId { get; set; }

        public List<string> Actors { get; set; }
        public int Pages { get; set; }
        public string Title { get; set; }

        public int RunTimeInMinutes { get; set; }

        public void CheckIn()
        {
            Borrower = "";
        }

        public void CheckOut(string borrower)
        {
            Borrower = borrower;
            BorrowDate = DateTime.Now;
        }

        public DateTime GetDueDate()
        {
            return BorrowDate.AddDays(CheckOutDurationInDays);
        }
    }
}
