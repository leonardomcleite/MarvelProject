package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.hvp.repository.interfaces.CharacterRepositoryInteface;

public class CharacterRepositoryImplement implements CharacterRepositoryInteface {
	
	@PersistenceContext	
	private EntityManager entityManager;
	
}
