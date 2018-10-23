Feature: Marvel personagens
  	Busca dados no site
 Scenario: Buscar personagens
    Given estancia o driver
    When entra na pagina principal
    And navega nas paginas e extrai as urls dos personagens  
    Then extrai os dados