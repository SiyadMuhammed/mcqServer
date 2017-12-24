using System;

namespace McqRepository.Models
{
    public class PaperMetadata
    {
        public Guid? Id { get; set; }
        public Guid CategoryId { get; set; }
        public bool Publish { get; set; }
        public string Category { get; set; }
        public int Year { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
