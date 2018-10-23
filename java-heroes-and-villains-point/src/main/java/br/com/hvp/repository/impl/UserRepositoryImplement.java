package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.hvp.repository.interfaces.UserRepositoryInteface;

public class UserRepositoryImplement implements UserRepositoryInteface {
	
	@PersistenceContext	
	private EntityManager entityManager;
	
}
