package br.com.hvp.controller.client;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.hvp.dto.CharacterDTO;
import br.com.hvp.dto.MessageDTO;

@RequestMapping(value = "/character")
public interface CharacterClient {
	
	@PostMapping(value="/create", headers = "content-type=application/json")
	public MessageDTO createCharacters(List<CharacterDTO> characters) throws Exception;

	@GetMapping(value="/list")
	public void listCharacters() throws Exception;
	
	@DeleteMapping(value="/delete")
	public void deleteCharacter() throws Exception;
	
//	@PostMapping(value="/comics", headers = "content-type=application/json")
//	public void PopulaComics(List<?> comics) throws Exception;
//	
//	@PostMapping(value="/creators", headers = "content-type=application/json")
//	public void PopulaCreators(List<?> creators) throws Exception;
//	
//	@PostMapping(value="/events", headers = "content-type=application/json")
//	public void PopulaEvents(List<?> events) throws Exception;
//	
//	@PostMapping(value="/series", headers = "content-type=application/json")
//	public void Populaseries(List<?> series) throws Exception;
//	
//	@PostMapping(value="/stories", headers = "content-type=application/json")
//	public void PopulaStories(List<?> stories) throws Exception;
	
}
