using HomeWork5_15WithReact.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace HomeWork5_15WithReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarController : ControllerBase
    {
        private string _connectionString;
     
        public PeopleCarController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarRepository(_connectionString);
            repo.AddPerson(person);
        }
        [HttpGet]
        [Route("getall")]

        public List<Person> GetAll()
        {
            var repo = new PeopleCarRepository(_connectionString);
            var people = repo.GetAll();
            return people;

        }
        [HttpGet]
        [Route("getPersonById")]

        public Person GetPersonById(int id)
        {
            var repo = new PeopleCarRepository(_connectionString);
            return repo.GetPerson(id);
           

        }
        [HttpPost]
        [Route("addCar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleCarRepository(_connectionString);
            repo.AddCar(car);
        }
        [HttpGet]
        [Route("getCarsForPerson")]

        public List<Car> GetCarsForPerson(int id)
        {
            var repo = new PeopleCarRepository(_connectionString);
            return repo.GetCarsForPerson(id);           
        }
        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(Person p)
        {
            var repo = new PeopleCarRepository(_connectionString);
            repo.DeleteCarsForPerson(p.Id);
        }


    }
}
