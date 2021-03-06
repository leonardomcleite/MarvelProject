package br.com.hvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hvp.entity.UserEntity;
import br.com.hvp.repository.interfaces.UserRepositoryInterface;

public interface UserRepository extends JpaRepository<UserEntity, Long>, UserRepositoryInterface {
	
}
