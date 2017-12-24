using System;

namespace McqWeb.Models
{
    public class Query
    {
        public Guid? Id { get; set; }
        public Guid? PaperId { get; set; }
        public Guid CategoryId { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
    }
}