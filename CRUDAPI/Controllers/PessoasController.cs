using CRUDAPI.Models;
using DELL.CRUDANGULARWEBAPI;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController:ControllerBase
    {
        private readonly Contexto _contexto;

        public PessoasController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> SelecionarTodosAsync(){
            return await _contexto.Pessoas.ToListAsync();

        }
        [HttpGet("{Id}")]

        public async Task<ActionResult<Pessoa>> SelecionarPKAsync(int Id){
                Pessoa pessoa = await _contexto.Pessoas.FindAsync(Id);
                if(pessoa == null){
                    return NotFound();
                }
                return pessoa;

        }
    }
}