package br.com.hvp.repository.interfaces;

import java.util.List;

import br.com.hvp.entity.CharacterEntity;

public interface CharacterRepositoryInterface {

	List<CharacterEntity> findByCharacterEligible();
}
