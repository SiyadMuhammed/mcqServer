using System.Collections.Generic;

namespace McqRepository.Models
{
    public class Papers
    {
        public int TotalItems { get; set; }
        public List<PaperMetadata> Items { get; set; }
    }
}
