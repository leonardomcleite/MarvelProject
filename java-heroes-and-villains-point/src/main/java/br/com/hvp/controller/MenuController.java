package br.com.hvp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.hvp.controller.client.MenuClient;
import br.com.hvp.dto.MenuDTO;
import br.com.hvp.service.MenuService;

@RestController
@CrossOrigin
public class MenuController implements MenuClient {

	@Autowired
	private MenuService menusService;

	@Override
	public void createMenu(@RequestBody MenuDTO menu) throws Exception {
		this.menusService.createMenu(menu);
	}

	@Override
	public void createMenuWithList(@RequestBody List<MenuDTO> menus) throws Exception {
		this.menusService.createMenuWithList(menus);
	}

	@Override
	public List<MenuDTO> listMenus() throws Exception {
		return this.menusService.listMenus();
	}
	
	@Override
	public void updateMenu(@RequestBody MenuDTO menu) throws Exception {
		this.menusService.updateMenu(menu);
	}

	@Override
	public void deleteMenus(@RequestBody List<MenuDTO> menus) throws Exception {
		this.menusService.deleteMenu(menus);
	}

}
