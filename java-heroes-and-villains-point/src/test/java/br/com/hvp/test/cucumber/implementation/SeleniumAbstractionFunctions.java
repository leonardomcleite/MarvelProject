package br.com.hvp.test.cucumber.implementation;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import br.com.hvp.test.dto.MarvelDTO;

public abstract class SeleniumAbstractionFunctions {

	protected WebDriver driver;
	protected List<MarvelDTO> marvelUrls;

	public SeleniumAbstractionFunctions(WebDriver driver) {
		this.driver = driver;
	}
	
	/*
	 * Entra na url especificada
	 */
	public Boolean EntraNaUrlEspecificada(String url, int tentativas) {
		Boolean done = true;
		try {
			driver.manage().timeouts().pageLoadTimeout(600, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);
			driver.get(url);
			done =  true;
			return true;
		} catch (Exception e) {
			System.out.println("Falha ao entrar na página especificada");
			done = false;
			return done;
		} finally {
			if (tentativas > 0 && !done) {
				EntraNaUrlEspecificada(url, tentativas--);
			} else {
				return done;
			}
		}
	}

	public boolean validaSeValorExisteNosElementos(String valor) {
		return driver.getPageSource().contains(valor);
	}

	public void PreencheCampoSolicitado(String nomeCampo, String valor) {
		driver.findElement(By.name(nomeCampo)).clear();
		driver.findElement(By.name(nomeCampo)).sendKeys(valor);
	}

	public WebElement BuscaElementoPorId(String idElemento) {
		return driver.findElement(By.id(idElemento));
	}

	public WebElement BuscaElementoPorNome(String nomeElemento) {
		return driver.findElement(By.name(nomeElemento));
	}

	public WebElement BuscaElementoPorTag(String idElemento) {
		return driver.findElement(By.tagName(idElemento));
	}

	public WebElement BuscaElementoPorXPath(String xpathExpression) {
		return driver.findElement(By.xpath(xpathExpression));
	}

	public List<WebElement> ListaElementosComAMesmaClasse(String className) {
		return driver.findElements(By.className(className));
	}

	public WebElement BuscaElementoComOContentEspecificato(List<WebElement> listElements, String content) {
		for (int i = 0; i < listElements.size(); i++) {
			String txt = listElements.get(i).getText();
			if (txt.equalsIgnoreCase(content)) {
				return listElements.get(i);
			}
		}
		return null;
	}

	public WebDriver getDriver() {
		return driver;
	}

	public void setDriver(WebDriver driver) {
		this.driver = driver;
	}

}
