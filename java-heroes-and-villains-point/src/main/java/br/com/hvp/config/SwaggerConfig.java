package br.com.hvp.config;

import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Documentação de api rest
 * 
 * Para acessar a api: http://localhost:8080/swagger-ui.html
 * 
 * @see springfox.documentation.spring.web.plugins.Docket
 * @see springfox.documentation.spring.web.plugins.Docket#apiInfo(ApiInfo)
 * @see springfox.documentation.builders.ApiInfoBuilder
 *
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
	public Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.basePackage("br.com.visualizacao.dados.controller"))
            .paths(PathSelectors.any())
            .build()
            .apiInfo(apiInfo());
    }
	
	public ApiInfo apiInfo() {
		return new ApiInfoBuilder()
			.title("Projeto Visualizacao de Dados")
			.description("Documentação de acesso aos endpoints do Projeto Visualizacao de Dados")
			.version("1.0.0")
			.build();
	}
	
}
