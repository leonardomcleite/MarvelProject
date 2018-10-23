package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.hvp.repository.interfaces.ProfileRepositoryInteface;

public class ProfileReporitoryImplement implements ProfileRepositoryInteface {
	
	@PersistenceContext	
	private EntityManager entityManager;

}
