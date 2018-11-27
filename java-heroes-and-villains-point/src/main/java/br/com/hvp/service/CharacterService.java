package br.com.hvp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.business.CharacterBusiness;
import br.com.hvp.dto.CharacterDTO;
import br.com.hvp.dto.MessageDTO;
import br.com.hvp.service.interfaces.CharacterInterface;

@RestController
@CrossOrigin
public class CharacterService implements CharacterInterface {

	@Autowired
	private CharacterBusiness characterBusiness;

	@Override
	public MessageDTO createCharacters(@RequestBody List<CharacterDTO> characters) throws Exception {
		return this.characterBusiness.createCharacters(characters);
	}

	@Override
	public void listCharacters() throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteCharacter() throws Exception {
		
	}

}
