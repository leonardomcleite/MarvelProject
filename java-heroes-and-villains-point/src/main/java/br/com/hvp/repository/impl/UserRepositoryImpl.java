package br.com.hvp.repository.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.hvp.dto.UserAuthDTO;
import br.com.hvp.dto.UserDTO;
import br.com.hvp.entity.UserEntity;
import br.com.hvp.repository.interfaces.UserRepositoryInterface;

@Repository
@Transactional
public class UserRepositoryImpl implements UserRepositoryInterface {

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public UserEntity confirmUserImpl(UserDTO user) {	
		String jpql = "select usr from "+UserEntity.class.getSimpleName()+" as usr  WHERE usr.id = :id and usr.cdConfirmation = :cdConfirmation order by ";
		TypedQuery<UserEntity> createQuery = this.entityManager.createQuery(jpql, UserEntity.class);
		createQuery.setParameter("id", user.getId());
		createQuery.setParameter("cdConfirmation", user.getCdConfirmation());
		UserEntity usersEntity = createQuery.getSingleResult();
		usersEntity.setStatus(1);
		this.entityManager.flush();

		return createQuery.getSingleResult();
	}
	
	@Override
	public UserEntity confirmExistentUserImpl(UserAuthDTO user) {
		UserEntity usersEntity = this.loginUserImpl(user);
		if (usersEntity == null) {
			return usersEntity;
		} else {			
			usersEntity.setStatus(1);
			this.entityManager.flush();
			return usersEntity;
		}
	}
 	
	@Override
	public UserEntity loginUserImpl(UserAuthDTO user) {
		String where;
		String keyValue;
		if (user.getUser() != null && !user.getUser().isEmpty()) {
			where = "usr.userId like :key";
			keyValue = user.getUser();
		} else {
			where = "usr.email like :key";
			keyValue = user.getEmail();
		}
		String jpql = "select usr from "+UserEntity.class.getSimpleName()+" as usr  WHERE "+where+" and usr.password like :password";
		TypedQuery<UserEntity> createQuery = this.entityManager.createQuery(jpql, UserEntity.class);
		createQuery.setParameter("key", keyValue);
		createQuery.setParameter("password", user.getPassword());
		
		try {			
			return createQuery.getSingleResult();
		} catch (Exception e) {
			return new UserEntity();
		}
	}

}
