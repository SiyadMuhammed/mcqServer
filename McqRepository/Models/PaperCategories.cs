using System.Collections.Generic;

namespace McqRepository.Models
{
    public class PaperCategories
    {
        public int TotalItems { get; set; }
        public List<PaperType> Items { get; set; }
    }
}
