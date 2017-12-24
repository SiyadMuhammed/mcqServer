using System;

namespace McqRepository.Models
{
    public class QueryType
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public int AssociatedQueries { get; set; }
    }
}
