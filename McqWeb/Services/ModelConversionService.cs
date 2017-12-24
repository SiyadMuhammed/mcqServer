using McqRepository.Models;

namespace McqWeb.Services
{
    public class ModelConversionService
    {
        public PaperMetadata ConvertToRepositoryModel(Models.PaperMetadata data)
        {
            return new PaperMetadata
            {
                Id = data.Id,
                CategoryId = data.CategoryId,
                Year = data.Year,
                Title = data.Title,
                Description = data.Description
            };
        }
        public Query ConvertToRepositoryModel(Models.Query data)
        {
            return new Query
            {
                Id = data.Id,
                PaperId = data.PaperId,
                CategoryId = data.CategoryId,
                Question = data.Question,
                Answer = data.Answer,
                Option1 = data.Option1,
                Option2 = data.Option2,
                Option3 = data.Option3
            };
        }

        public RepositoryFilter ConvertToRepositoryModel(Models.Filter data)
        {
            return new RepositoryFilter
            {
                PageSize = data.PageSize,
                Offset = data.Offset,
                SortColumn = data.SortColumn,
                SortDirection = data.SortDirection
            };
        }
    }
}