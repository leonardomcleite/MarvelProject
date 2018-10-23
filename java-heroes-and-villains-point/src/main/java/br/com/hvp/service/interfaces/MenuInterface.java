package br.com.hvp.service.interfaces;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.hvp.dto.MenuDTO;

@RequestMapping(value = "/menu")
public interface MenuInterface {

	@PostMapping(value = "/create", headers = "content-type=application/json")
	public void createMenu(MenuDTO menu) throws Exception;

	@PostMapping(value = "/createWithList", headers = "content-type=application/json")
	public void createMenuWithList(List<MenuDTO> menus) throws Exception;

	@GetMapping(value = "/list")
	public List<MenuDTO> listMenus() throws Exception;

	@PostMapping(value = "/update", headers = "content-type=application/json")
	void updateMenu(MenuDTO menu) throws Exception;

	@PostMapping(value = "/delete", headers = "content-type=application/json")
	public void deleteMenus(List<MenuDTO> menus) throws Exception;

}
