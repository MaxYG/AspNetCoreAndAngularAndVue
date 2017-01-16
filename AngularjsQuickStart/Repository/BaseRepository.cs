using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using Data;

namespace Repository
{
    public abstract class BaseRepository<TEntity> where TEntity:class 
    {
        private readonly IDbContextProvider _dbContextProvider;
        protected Angularjs2DbContext DbContext => _dbContextProvider.GetContactDbContext();
        protected BaseRepository(IDbContextProvider dbContextProvider)
        {
            _dbContextProvider = dbContextProvider;
        }

        public TEntity Add(TEntity t)
        {
            DbContext.Set<TEntity>().Add(t);
            SafeSaveChanges();

            return t;
        }

        public void Edit(TEntity t)
        {
            var entry = DbContext.Entry(t);
            DbContext.Set<TEntity>().Attach(t);
            entry.State = EntityState.Modified;
            SafeSaveChanges();
        }

        public void Delete(int id)
        {
            var entity = Get(id);
            DbContext.Set<TEntity>().Remove(entity);
            SafeSaveChanges();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return DbContext.Set<TEntity>();
        }

        public TEntity Get(int id)
        {
            return DbContext.Set<TEntity>().Find(id);
        }
        public void SafeSaveChanges()
        {
            foreach (var error in DbContext.GetValidationErrors())
            {
                var entityType = error.Entry.Entity.GetType().BaseType;

                foreach (var validationError in error.ValidationErrors)
                {
                    var property = entityType.GetProperty(validationError.PropertyName);
                    if (property.GetCustomAttributes(typeof(RequiredAttribute), true).Any())
                    {
                        property.GetValue(error.Entry.Entity, null);
                    }
                }
            }

            DbContext.SaveChanges();
        }
    }
}
