using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using AngularQS.Data;
using AngularQS.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace AngularQS.Repository
{
    public interface IRepository<TEntity>  where TEntity : Entity
    {
        void Add(TEntity entity);
        void Edit(TEntity entity);
        void Delete(int id);
        TEntity Get(int id);
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

        public void Edit(TEntity t)
        {
            var entry = _dbDbContext.Entry(t);
            _dbDbContext.Set<TEntity>().Attach(t);
            entry.State = EntityState.Modified;
        }

        public void Delete(int id)
        {
            var entity = Get(id);
            _dbDbContext.Set<TEntity>().Remove(entity);
        }

        public TEntity Get(int id)
        {
            return _dbDbContext.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _dbDbContext.Set<TEntity>().AsEnumerable();
        }
    }
}