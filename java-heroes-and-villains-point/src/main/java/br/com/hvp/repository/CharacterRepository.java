package br.com.hvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hvp.entity.CharacterEntity;

public interface CharacterRepository  extends JpaRepository<CharacterEntity, Long> {
	
}
