package br.com.hvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.hvp.entity.MenuEntity;
import br.com.hvp.repository.interfaces.MenuRepositoryInterface;

public interface MenuRepository extends JpaRepository<MenuEntity, Long>, MenuRepositoryInterface {

}
