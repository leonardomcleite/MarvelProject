package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.hvp.repository.interfaces.GameRepositoryInterface;

@Repository
@Transactional
public class GameRepositoryImpl implements GameRepositoryInterface {

	@PersistenceContext
	private EntityManager entityManager;

}
