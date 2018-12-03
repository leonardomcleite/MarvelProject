package br.com.hvp;

import java.util.concurrent.Executor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@SpringBootApplication(exclude = { MongoAutoConfiguration.class, MongoDataAutoConfiguration.class })
public class JavaHeroesAndVillainsPointApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaHeroesAndVillainsPointApplication.class, args);
	}
	
	@Bean(name = "sendList")
	public Executor asyncSendList() {
		final ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
		executor.setCorePoolSize(1);
		executor.setMaxPoolSize(3);
		executor.initialize();
		return executor;
	}

	@Bean(name = "sendGame")
	public Executor asyncSendGame() {
		final ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
		executor.setCorePoolSize(1);
		executor.setMaxPoolSize(3);
		executor.initialize();
		return executor;
	}

	
}
