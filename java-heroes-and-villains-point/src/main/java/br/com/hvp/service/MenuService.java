package br.com.hvp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.hvp.dto.MenuDTO;
import br.com.hvp.entity.MenuEntity;
import br.com.hvp.mapper.BeanMapper;
import br.com.hvp.repository.MenuRepository;

@Service
public class MenuService {

	@Autowired
	MenuRepository menuRepository;
	
	@PersistenceContext	
	private EntityManager entityManager;

	public void createMenu(MenuDTO menu) {
		MenuEntity menuEntity = new MenuEntity();
		BeanMapper beanMapper = new BeanMapper();
		menuEntity = beanMapper.map(menu, MenuEntity.class);

		menuRepository.save(menuEntity);
	}

	public void createMenuWithList(List<MenuDTO> menus) {
		List<MenuEntity> listMenuEntity = new ArrayList<MenuEntity>();
		BeanMapper beanMapper = new BeanMapper();
		listMenuEntity = beanMapper.mapList(menus, MenuEntity.class);

		menuRepository.saveAll(listMenuEntity);
	}

	public List<MenuDTO> listMenus() {
		BeanMapper beanMapper = new BeanMapper();
		return beanMapper.mapList(menuRepository.findAll(), MenuDTO.class);
	}
	
	public void updateMenu(MenuDTO menu) {
		Optional<MenuEntity> menuOptional = menuRepository.findById(menu.getId());
		
		if (menuOptional.isPresent()) {
			BeanMapper beanMapper = new BeanMapper();
			MenuEntity menuEntity = beanMapper.map(menu, MenuEntity.class);
			menuRepository.save(menuEntity);
		}
	}
	
	public void deleteMenu(List<MenuDTO> menus) {
		BeanMapper beanMapper = new BeanMapper();
		List<MenuEntity> menuEntity = beanMapper.mapList(menus, MenuEntity.class);
		menuRepository.deleteAll(menuEntity);
	}

}
