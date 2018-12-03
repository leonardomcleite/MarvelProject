package br.com.hvp.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.hvp.entity.CharacterEntity;
import br.com.hvp.entity.ClassificationEntity;
import br.com.hvp.repository.interfaces.CharacterRepositoryInterface;

@Repository
@Transactional
public class CharacterRepositoryImpl implements CharacterRepositoryInterface {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<CharacterEntity> findByCharacterEligible() {
		String jpql = "SELECT ch FROM " + CharacterEntity.class.getSimpleName() + " ch LEFT JOIN " +
					  ClassificationEntity.class.getSimpleName() + " ca " +
					  "ON ch.classification = ca.id " +
					  "WHERE ch.pathThumbnail IS NOT NULL AND " +
					  "(ca.durability <> 0 OR ca.energy <> 0 OR ca.intelligence <> 0 OR ca.combat <> 0 OR ca.speed <> 0 OR ca.strength <> 0)";
		TypedQuery<CharacterEntity> createQuery = this.entityManager.createQuery(jpql, CharacterEntity.class);
		
		return createQuery.getResultList();
	}

}
