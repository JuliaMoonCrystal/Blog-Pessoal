package org.generation.blogPessoal.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.generation.blogPessoal.model.Usuario;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UsuarioRepositoryTest {

	@Autowired
	private UsuarioRepository repository;
	
	@BeforeAll
	void start() {
		Usuario usuario = new Usuario(0, "Luca Felipe", "Lukinhas@email.com.br", "13454321");
		if(!repository.findByUsuario(usuario.getUsuario()).isPresent())
			repository.save(usuario);
		
		usuario = new Usuario(0, "Manuel Da Silva", "manuel@email.com.br", "111111111");
		if(!repository.findByUsuario(usuario.getUsuario()).isPresent())
			repository.save(usuario);
		
		usuario = new Usuario(0, "Allan Da Silva", "AllaS@email.com.br", "222222222");
		if(!repository.findByUsuario(usuario.getUsuario()).isPresent())
			repository.save(usuario);

        usuario = new Usuario(0, "My Conquister", "Conquister@email.com.br", "44443333");
        if(!repository.findByUsuario(usuario.getUsuario()).isPresent())
            repository.save(usuario);
        
        usuario = new Usuario(0, "Rachael Grey", "Grey@email.com.br", "88889999");
        if(!repository.findByUsuario(usuario.getUsuario()).isPresent())
            repository.save(usuario);
        
        usuario = new Usuario(0, "Paulo Nunes", "pauloNunes@email.com.br", "55551111");
        if(!repository.findByUsuario(usuario.getUsuario()).isPresent())
            repository.save(usuario);
        
        usuario = new Usuario(0, "Paulo Antunes", "paulo@email.com.br", "22226666");
        if(!repository.findByUsuario(usuario.getUsuario()).isPresent())
            repository.save(usuario);
	}
	
		@Test
		@DisplayName("💾 Retorna o nome")
		public void findByNomeRetornaNome() throws Exception {

			Usuario usuario = repository.findByNome("Paulo Nunes");
			assertTrue(usuario.getNome().equals("Paulo Nunes"));
		}
		
	   
		@Test
		@DisplayName("💾 Retorna 3 usuarios")
		public void findAllByNomeContainingIgnoreCaseRetornaTresUsuarios() {

			List<Usuario> listaDeUsuarios = repository.findAllByNomeContainingIgnoreCase("Silva");
			assertEquals(2, listaDeUsuarios.size());
		}

		@AfterAll
		public void end() {
			
			repository.deleteAll();
			
		}
}
