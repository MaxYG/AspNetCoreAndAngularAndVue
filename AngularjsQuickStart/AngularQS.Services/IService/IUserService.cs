﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AngularQS.Data.Models;
using AngularQS.DomainModel;

namespace AngularQS.Services.IService
{
    public interface IUserService
    {
        UserDomain Add(UserDomain userDomain);
        void Update(User userDomain);
        Task<User> GetAsync(int id);
        IEnumerable<User> GetList();
    }
}
