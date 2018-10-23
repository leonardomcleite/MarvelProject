package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.hvp.repository.interfaces.ProfileRepositoryInterface;

@Repository
@Transactional
public class ProfileRepositoryImpl implements ProfileRepositoryInterface {

	@PersistenceContext
	private EntityManager entityManager;

}
