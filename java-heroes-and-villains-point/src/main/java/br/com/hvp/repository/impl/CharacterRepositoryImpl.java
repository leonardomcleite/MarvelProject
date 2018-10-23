package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.hvp.repository.interfaces.CharacterRepositoryInterface;

@Repository
@Transactional
public class CharacterRepositoryImpl implements CharacterRepositoryInterface {

	@PersistenceContext
	private EntityManager entityManager;

}
