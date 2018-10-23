package br.com.hvp.test.cucumber.implementation;

import org.openqa.selenium.WebDriver;

import br.com.hvp.test.config.WebDriverConfig;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTesteImplementation {
	
	protected WebDriver driver;
	public SmokeMarvelTest smokeMarvelTest;

    @Given("^estancia o driver$")
	public void estancia_o_driver() throws Throwable {
    	this.driver = WebDriverConfig.newChromeDriver();
		smokeMarvelTest = new SmokeMarvelTest(driver);
	}
    
    @When("^entra na pagina principal$")
    public void entra_na_pagina_principal() throws Throwable {
    	smokeMarvelTest.EntraNaUrlEspecificada("https://www.marvel.com/characters", 1);
    }
	
	@And("^navega nas paginas e extrai as urls dos personagens$")
	public void navega_nas_paginas_e_extrai_as_urls_dos_personagens() throws Throwable {
		smokeMarvelTest.ExtaiAsUrls();
	}

	@Then("^extrai os dados$")
	public void extrai_os_dados() throws Throwable {
		smokeMarvelTest.buscarDadosMarvel(0, 0);
	}

}
