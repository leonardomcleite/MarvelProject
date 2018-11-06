package br.com.hvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hvp.entity.GameEntity;
import br.com.hvp.repository.interfaces.GameRepositoryInterface;

public interface GameRepository  extends JpaRepository<GameEntity, Long>, GameRepositoryInterface {
	
}
