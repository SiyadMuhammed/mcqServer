namespace McqWeb.Models
{
    public class Filter
    {
        public int PageSize { get; set; }
        public int Offset { get; set; }
        public string SortColumn { get; set; }
        public string SortDirection { get; set; }
    }
}