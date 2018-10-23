package br.com.hvp.test.cucumber.implementation;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import br.com.hvp.test.dto.MarvelDTO;
import gherkin.deps.com.google.gson.Gson;

public class SmokeMarvelTest extends SeleniumAbstractionFunctions {
	
	public List<String> listUrl = new ArrayList<String>();
	public List<String>  listDurability = new ArrayList<String>();
	public List<String>  listEnergy = new ArrayList<String>();
	public List<String>  listCombat = new ArrayList<String>();
	public List<String>  listInteligence = new ArrayList<String>();
	public List<String>  listSpeed = new ArrayList<String>();
	public List<String>  listStrength = new ArrayList<String>();
	public List<String>  listCharactersName = new ArrayList<String>();
	public List<String>  listCharactersNameTwo = new ArrayList<String>();
	public List<String>  listCharactersBiografy = new ArrayList<String>();
	
	public SmokeMarvelTest(WebDriver driver) {
		super(driver);
	}
	
	public void ExtaiAsUrls() throws Throwable {
		List<String> listUrlCompleta = new ArrayList<String>();
		Boolean error = false;

		for (int i = 0; i < 71; i++) {
			List<WebElement>  listElementsClick = new ArrayList<WebElement>();
			try {
				listElementsClick = driver.findElements(By.xpath("//a[contains(@class, 'explore__link')]"));
			} catch (Exception e) {
				System.out.println("Erro ao buscar urls");
				error = true;
			} finally {
				if (error) {
					Thread.sleep(6000);
					listElementsClick = driver.findElements(By.xpath("//a[contains(@class, 'explore__link')]"));
				}
				
				for (int j = 0; j < listElementsClick.size(); j++) {
					listUrlCompleta.add(listElementsClick.get(j).getAttribute("href"));
				}
				
				if (i < 70) {
					driver.findElement(By.xpath("//span[contains(@aria-label, 'Next')]")).click();
					Thread.sleep(2000);
				}
			}
		}
		
//		Remove urls repetidas
		Boolean repetida = false;
		this.listUrl.add(listUrlCompleta.get(0));
		for (int i = 0; i < listUrlCompleta.size(); i++) {
			for (int j = 0; j < this.listUrl.size(); j++) {
				if (this.listUrl.get(j).equalsIgnoreCase(listUrlCompleta.get(i))) {
					repetida = true;
					break;
				}
			}
			if (repetida == false) {
				this.listUrl.add(listUrlCompleta.get(i));
			}
			repetida = false;
		}
	}
	
	public void buscarDadosMarvel(int from, int to) throws Throwable {
		if (to == 0) {
			to = this.listUrl.size();
		}

		for (int j = from; j < to; j++) {
			System.out.println(j);
			EntraNaUrlEspecificada(this.listUrl.get(j), 2);
			buscarStatisticas();
			buscarNomePersonagemUm(j);
			buscarNomePersonagemDois(j);
			buscarBiografiaCompletaPersonagem(j);
			
			if(j%500 == 0) {
				imprmirBusca(from , j);
			}
		}
		imprmirBusca(from , this.listUrl.size());
	}
	
	public void buscarStatisticas() {
		List<WebElement>  listStatisticValues = new ArrayList<WebElement>();
		
		try {
			listStatisticValues = driver.findElements(By.xpath("//span[contains(@class, 'power-circle__rating')]"));
		} catch (Exception e) {
			listDurability.add("0");
			listEnergy.add("0");
			listCombat.add("0");
			listInteligence.add("0");
			listSpeed.add("0");
			listStrength.add("0");
		}

		if (listStatisticValues.size() > 0) {
			this.listDurability.add(listStatisticValues.get(0).getText());
			this.listEnergy.add(listStatisticValues.get(1).getText());
			this.listCombat.add(listStatisticValues.get(2).getText());
			this.listInteligence.add(listStatisticValues.get(3).getText());
			this.listSpeed.add(listStatisticValues.get(4).getText());
			this.listStrength.add(listStatisticValues.get(5).getText());
		} else {
			this.listDurability.add("0");
			this.listEnergy.add("0");
			this.listCombat.add("0");
			this.listInteligence.add("0");
			this.listSpeed.add("0");
			this.listStrength.add("0");
		}
	}
	
	public void buscarNomePersonagemUm(int index) {
		try {
			this.listCharactersName.add(driver.findElement(By.xpath("//span[contains(@class, 'masthead__headline')]")).getText());
		} catch (Exception e) {
			this.listCharactersName.add("Não encontrado (" + index + ")");
		}
	}
	
	public void buscarNomePersonagemDois(int index) {
		try {
			this.listCharactersNameTwo.add(driver.findElement(By.xpath("//span[contains(@class, 'masthead__eyebrow')]")).getText());
		} catch (Exception e) {
			segundaVersaoParaNomeDois(index);
		}
	}
	
	public void segundaVersaoParaNomeDois(int index) {
		try {
			listCharactersNameTwo.add(driver.findElement(By.xpath("//div[contains(@class, 'featured__header')]")).getText());
		} catch (Exception e) {
			this.listCharactersNameTwo.add("Não encontrado (" + index + ")");
		}
	}
	
	public void buscarBiografiaCompletaPersonagem(int index) {

		 Boolean isBiografiaCompleta = verificaSeExisteBiogradiaCompleta();
		
		if (isBiografiaCompleta) {		
			try {
				List<WebElement> textsBiografy = driver.findElements(By.xpath("//div[contains(@class, 'text')]//p"));
				String biography = "";
				for (int i = 0; i < textsBiografy.size(); i++) {
					biography += "###";
					biography += textsBiografy.get(i).getText();
				}
				listCharactersBiografy.add(biography);
			} catch (Exception e) {
				buscaBiografiaSimplificada(index);
				System.out.println("Ocorreu um erro inesperado ao buscara Biografia");
			}
		} else {
			buscaBiografiaSimplificada(index);
		}
	}
	
	public Boolean verificaSeExisteBiogradiaCompleta() {
		try {
			WebElement textsBiografy = driver.findElement(By.xpath("//h3[contains(@class, 'title')]"));
			if (textsBiografy.getText() == "Biography") {
				return true;
			}
			return false;
		} catch (Exception e) {
			return false;
		}
	}
	
	public void buscaBiografiaSimplificada(int index) {
		try {
			listCharactersBiografy.add(driver.findElement(By.xpath("//div[contains(@class, 'featured__copy')]")).getText());
		} catch (Exception e) {
			listCharactersBiografy.add("Não encontrado (" + index + ")");
		}
	}
	
	public void imprmirBusca(Integer from, Integer to) {
		List<MarvelDTO> marvelCharacters = new ArrayList<MarvelDTO>();
		for (int i = from; i < to; i++) {
			MarvelDTO list = new MarvelDTO(
				this.listCharactersName.get(i),
				this.listCharactersNameTwo.get(i),
				this.listCharactersBiografy.get(i),
				this.listDurability.get(i),
				this.listEnergy.get(i),
				this.listCombat.get(i),
				this.listInteligence.get(i),
				this.listSpeed.get(i),
				this.listStrength.get(i),
				this.listUrl.get(i)
			);
			marvelCharacters.add(list);
		}
		System.out.println(new Gson().toJson(marvelCharacters));
	}
	
}
