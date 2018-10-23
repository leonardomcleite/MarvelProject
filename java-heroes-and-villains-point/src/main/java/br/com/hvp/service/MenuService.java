package br.com.hvp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.business.MenuBusiness;
import br.com.hvp.dto.MenuDTO;
import br.com.hvp.service.interfaces.MenuInterface;

@RestController
@CrossOrigin
public class MenuService implements MenuInterface {

	@Autowired
	private MenuBusiness menuBusiness;

	@Override
	public void createMenu(@RequestBody MenuDTO menu) throws Exception {
		this.menuBusiness.createMenu(menu);
	}

	@Override
	public void createMenuWithList(@RequestBody List<MenuDTO> menus) throws Exception {
		this.menuBusiness.createMenuWithList(menus);
	}

	@Override
	public List<MenuDTO> listMenus() throws Exception {
		return this.menuBusiness.listMenus();
	}
	
	@Override
	public void updateMenu(@RequestBody MenuDTO menu) throws Exception {
		this.menuBusiness.updateMenu(menu);
	}

	@Override
	public void deleteMenus(@RequestBody List<MenuDTO> menus) throws Exception {
		this.menuBusiness.deleteMenu(menus);
	}

}
