package br.com.hvp.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.hvp.entity.GameEntity;
import br.com.hvp.repository.interfaces.GameRepositoryInterface;

@Repository
@Transactional
public class GameRepositoryImpl implements GameRepositoryInterface {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<GameEntity> listOpenGames() {
		String jpql = "SELECT gms FROM " + GameEntity.class.getSimpleName() + " gms " + " WHERE gms.stage = 0 ";

		TypedQuery<GameEntity> createQuery = this.entityManager.createQuery(jpql, GameEntity.class);
		return createQuery.getResultList();
	}

	@Override
	public boolean roundPlayer(Long player, Long idGame) {
		String jpql = "SELECT count(*) FROM " + GameEntity.class.getSimpleName() + " gms "
				+ " WHERE gms.id = :idGame AND gms.roundPlayer = :roundPlayer";
		TypedQuery<Integer> createQuery = this.entityManager.createQuery(jpql, Integer.class);
		createQuery.setParameter("idGame", idGame);
		createQuery.setParameter("roundPlayer", player);
		Integer cont = createQuery.getSingleResult();

		if (cont > 0) {
			return true;
		} else {
			return false;
		}
	}

}
