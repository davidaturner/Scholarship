using System;

namespace ConsoleApp1.Original
{
    public interface ILibraryItem
    {
        string Author { get; set; }
        DateTime BorrowDate { get; set; }
        string Borrower { get; set; }
        int CheckOutDurationInDays { get; set; }
        string LibraryId { get; set; }
        int Pages { get; set; }
        string Title { get; set; }

        void CheckOut(string borrower);

        void CheckIn();

        DateTime GetDueDate();
    }
}