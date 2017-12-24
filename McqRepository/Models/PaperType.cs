using System;

namespace McqRepository.Models
{
    public class PaperType
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public int AssociatedTests { get; set; }
    }
}
