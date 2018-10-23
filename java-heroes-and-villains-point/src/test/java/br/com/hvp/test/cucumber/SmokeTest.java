package br.com.hvp.test.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = false, 
	format = {"pretty", "html:target/cucumber", "json:target/cucumber/cucumber.json"},
	plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
	features="src/test/resources/features/smoke_test.feature")
public class SmokeTest {

}
