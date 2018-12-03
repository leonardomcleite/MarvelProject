package br.com.hvp.repository.interfaces;

import java.util.List;

import br.com.hvp.entity.GameEntity;

public interface GameRepositoryInterface {
	
	List<GameEntity> listOpenGames();
	boolean roundPlayer(Long player, Long game);

}
 