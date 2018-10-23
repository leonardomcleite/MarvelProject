package br.com.hvp.business;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.com.hvp.dto.CharacterDTO;
import br.com.hvp.dto.MessageDTO;
import br.com.hvp.entity.CharacterEntity;
import br.com.hvp.mapper.BeanMapper;
import br.com.hvp.repository.CharacterRepository;

@Controller
public class CharacterBusiness {
	
	@Autowired
	CharacterRepository characterRepository;

	public MessageDTO createCharacters(List<CharacterDTO> character) {
		List<CharacterEntity> characterEntity = new ArrayList<CharacterEntity>();
		BeanMapper beanMapper = new BeanMapper();
		characterEntity = beanMapper.mapList(character, CharacterEntity.class);
		
		try {
			characterRepository.saveAll(characterEntity);
		} catch (Exception e) {
			return new MessageDTO(0, "Falha ao Salvar Personagens", "error");
		}
		return new MessageDTO(200, "Personagens Criados Com Sucesso", "success");
	}

	public List<CharacterDTO> listCharacters() {
		BeanMapper beanMapper = new BeanMapper();
		return beanMapper.mapList(characterRepository.findAll(), CharacterDTO.class);
	}

}
