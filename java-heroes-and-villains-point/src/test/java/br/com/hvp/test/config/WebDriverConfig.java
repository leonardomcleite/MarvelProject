package br.com.hvp.test.config;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class WebDriverConfig {
	
	private static WebDriver driver = null;
	
	@Before
    public void before() {
        driver = newDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }
	
	public static ChromeDriver newChromeDriver() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\fsilvae\\Downloads\\webdriver-chrome2.39\\chromedriver.exe");
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--no-sandbox"); // Permite executar chrome dentro de um container docker
        options.addArguments("--disable-web-security"); // Permite chamadas Ajax CORS
        options.addArguments("--no-first-run"); // Evita que o chrome abra popups na inicialização
        options.addArguments("--no-check-default-driver");
        options.addArguments("--allow-running-insecure-content"); // Aceita certificados SSL self-signed
        capabilities.setCapability(ChromeOptions.CAPABILITY, options);
        return new ChromeDriver(capabilities);
    }
	
	private static WebDriver newDriver() {
		return newFirefoxDriver();
	}
	
	public static FirefoxDriver newFirefoxDriver() {
//		System.setProperty("webdriver.gecko.driver", "C:\\Users\\fsilvae\\Downloads\\geckodriver.exe");
        DesiredCapabilities capability = DesiredCapabilities.firefox();
        capability.setAcceptInsecureCerts(true);
        return new FirefoxDriver(capability);
    }
	
	@After
    public void teardown() {
        if (driver != null) {
            unsafeTeardown();
        } else {
            System.out.println("driver is null");
        }
    }
	
	private void unsafeTeardown() {
        try {
            doScreenshot( "final" );
        } finally {
             driver.quit();
        }
    }
 
 
    private void doScreenshot( final String name ) {}
	 
}
