using System.Collections.Generic;

namespace Repository
{
    public interface IContactBaseRepository<TEntity> where TEntity:class 
    {
        TEntity Add(TEntity t);
        void Edit(TEntity t);
        void Delete(int id);
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
    }
}
