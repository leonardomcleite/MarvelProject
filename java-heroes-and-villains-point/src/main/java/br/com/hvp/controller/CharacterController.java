package br.com.hvp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.controller.client.CharacterClient;
import br.com.hvp.dto.CharacterDTO;
import br.com.hvp.dto.MessageDTO;
import br.com.hvp.service.CharacterService;

@RestController
@CrossOrigin
public class CharacterController implements CharacterClient {
	
	@Autowired
	private CharacterService charactersService;

	@Override
	public MessageDTO createCharacters(@RequestBody List<CharacterDTO> characters) throws Exception {
		return this.charactersService.createCharacters(characters);
	}

	@Override
	public void listCharacters() throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteCharacter() throws Exception {
		// TODO Auto-generated method stub
		
	}
	

}
