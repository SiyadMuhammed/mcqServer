using McqWeb.Models;

namespace McqWeb.Services
{
    public class ModelValidationService
    {
        public bool IsValidModel(PaperMetadata model)
        {
            return IsNotEmpty(model.Title) &&
                   IsNotEmpty(model.Description) &&
                   IsNotEmpty(model.Year.ToString()) &&
                   IsNotEmpty(model.CategoryId.ToString());
        }

        public bool IsValidModel(Query model)
        {
            return IsNotEmpty(model.Question) &&
                   IsNotEmpty(model.Answer) &&
                   IsNotEmpty(model.Option1) &&
                   IsNotEmpty(model.CategoryId.ToString());
        }

        public bool IsValidModel(Filter model)
        {
            return IsNotEmpty(model.SortColumn) &&
                   IsNotEmpty(model.SortDirection) &&
                   IsValidSortOrder(model.SortDirection);
        }


        private bool IsValidSortOrder(string data)
        {
            return data.ToLower() == "desc" || data.ToLower() == "asc";
        }

        private static bool IsNotEmpty(string data)
        {
            return !string.IsNullOrEmpty(data);
        }
    }
}