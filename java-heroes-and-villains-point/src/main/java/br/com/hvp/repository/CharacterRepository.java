package br.com.hvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hvp.entity.CharacterEntity;
import br.com.hvp.repository.interfaces.CharacterRepositoryInteface;

public interface CharacterRepository extends JpaRepository<CharacterEntity, Long>, CharacterRepositoryInteface {

}
