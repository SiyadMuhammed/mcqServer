using System;

namespace McqWeb.Models
{
    public class PaperMetadata
    {
        public Guid? Id { get; set; }
        public Guid CategoryId { get; set; }
        public int Year { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}