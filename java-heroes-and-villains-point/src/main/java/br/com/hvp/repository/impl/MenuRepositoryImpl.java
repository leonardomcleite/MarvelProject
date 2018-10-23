package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.hvp.repository.interfaces.MenuRepositoryInterface;

@Repository
@Transactional
public class MenuRepositoryImpl implements MenuRepositoryInterface {

	@PersistenceContext
	private EntityManager entityManager;

}
