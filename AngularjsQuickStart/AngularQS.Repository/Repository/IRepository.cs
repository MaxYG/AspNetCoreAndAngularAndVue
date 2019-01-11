using System.Collections.Generic;
using System.Linq;
using AngularQS.Data;
using AngularQS.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace AngularQS.Repository
{
    public interface IRepository<TEntity>  where TEntity : Entity
    {
        void Add(TEntity entity);
        IEnumerable<TEntity> GetAll();
    }

    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : Entity
    {
        private readonly AngularQSContext _dbDbContext;
        protected BaseRepository(AngularQSContext dbDbContext)
        {
            _dbDbContext = dbDbContext;
        }

        public void Add(TEntity entity)
        {
            _dbDbContext.Set<Entity>().Add(entity);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbDbContext.Set<TEntity>().AsEnumerable();
        }
    }
}