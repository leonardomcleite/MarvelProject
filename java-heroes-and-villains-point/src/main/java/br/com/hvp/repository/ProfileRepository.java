package br.com.hvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hvp.entity.ProfileEntity;
import br.com.hvp.repository.interfaces.ProfileRepositoryInteface;

public interface ProfileRepository extends JpaRepository<ProfileEntity, Long>, ProfileRepositoryInteface {

}
