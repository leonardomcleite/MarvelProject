package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.hvp.repository.interfaces.MenuRepositoryInteface;

public class MenuReporitoryImplement implements MenuRepositoryInteface {
	
	@PersistenceContext	
	private EntityManager entityManager;

}
