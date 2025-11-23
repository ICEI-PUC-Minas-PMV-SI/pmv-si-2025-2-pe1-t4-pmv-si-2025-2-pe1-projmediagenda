# Testes

Neste projeto será realizado um tipo de teste:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
<!-- O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. -->

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
<!-- - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade) -->

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço http://127.0.0.1:5500/Implementa%C3%A7%C3%A3o%20da%20solu%C3%A7%C3%A3o/funcionalidade%20do%20Sistema/telas%20totais/login/telalogin.html <br> 2) Preencha todos os campos do formulário  <br> 3) Clique em cadastrar <br> 
**Requisitos associados** | RF-003
**Resultado esperado** | Prosseguir para a parte 2 do cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Fazer login com conta valida 2**
 :--------------: | ------------
**Procedimento**  | 1) Clikar no botão "login" <br> 2) Preencher os campos <br> 3) Clikar no botão Entrar
**Requisitos associados** | RF-003
**Resultado esperado** | login realizado com sucesso
**Dados de entrada** | Inserção de dados válidos no formulário de Login
**Resultado obtido** | Sucesso


**Caso de Teste** | **CT03 - Fazer anotação no calendário**
 :--------------: | ------------
**Procedimento**  | 1) Clikar em cima do dia ao qual se pretende anexar uma anotação <br> 2) Preencher a box com as informações <br> 3) Clikar no botão Salvar
**Requisitos associados** | RF-006
**Resultado esperado** | Anotação Salva
**Dados de entrada** | Anotações
**Resultado obtido** | Salvo (em formato de icone de  "." no canto inferior direito.)


**Caso de Teste** | **CT04 - Visualização das anotações**
 :--------------: | ------------
**Procedimento**  | 1) Clikar em cima do dia ao qual se quer no calendario <br> 2) analisar as atividades registradas <br> 
**Requisitos associados** | RF-001
**Resultado esperado** | visualização da atividade 
**Dados de entrada** | Criação da  atividade em Registro Agenda
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Quiz psicologico **
 :--------------: | ------------
**Procedimento**  | 1) Avaliar-se de 1 a 10 em 3 quesitos propostos <br> 2) Enviar as respostas <br> 
**Requisitos associados** | RF-009
**Resultado esperado** |  Um painel dando a media das 3 respostas e chegando a um resultado final.
**Dados de entrada** | Escolhas das notas.
**Resultado obtido** | A média delas e sua frase motivacional.

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta*                                         |
|---|---|
|Requisito Associado | RF-003 - A aplicação deve permitir que os usuários criem uma conta e acessem o site|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/420572469b83e987/EQayfJIZxitJl6DauEaSQ7gBevSOuJQ_zlzS6VY9kWWhGg?e=at0tjp| 

|*Caso de Teste*                                 |*CT02 - fazer login*                                        |
|---|---|
|Requisito Associado | RF-003 -  A aplicação deve permitir fazer o login com os usuarios ja cadastrados  e armazenados.|
|Link do vídeo do teste realizado: |   https://1drv.ms/v/c/420572469b83e987/EQuOetfcQxBIrMczVQVjjckBYt1_Y8vLNtfr5DrhvPExMA?e=Z5eXov |

|*Caso de Teste*                                 |*CT03 - fazer anotações*                                        |
|---|---|
|Requisito Associado | RF-006 -  A aplicação deve Permitir que o usuario faça as anotações e as salve representando com o seu devido icone.|
|Link do vídeo do teste realizado: |   https://1drv.ms/v/c/420572469b83e987/EYm73-LvzhVHijxPBhrv_6cBaveNbAQeV933XPc98Tsufg?e=BQja7u  |

|*Caso de Teste*                                 |*CT04 - fazer Atividades*                                        |
|---|---|
|Requisito Associado | RF-001 -  A aplicação deve permitir que o usuario crie atividades no registro agenda e as veja no calendário.|
|Link do vídeo do teste realizado: |   https://1drv.ms/v/c/420572469b83e987/Edopeq8Jfh9BoV4nNdrEGs0BaDQrB83O5tAvvo-gtgcndA?e=1jk9cP |

|*Caso de Teste*                                 |*CT05 - Quiz psicologico*                                        |
|---|---|
|Requisito Associado | RF-001 -  A aplicação deve permitir que o usario faça o quiz e receba o devido resultado.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/c/420572469b83e987/EW_rVZlFVAJFkCfv4zV2hUUBu0OYDEOTNPKJ55RYNo7YNQ?e=okSEdf |

## Avaliação dos Testes de Software

Bom os testes foram todos coesos com o proposito das funções, os pontos fracos foram que, certas informações não foram tão otimizadas. iUm exemplos são os reultado do quiz. Porém estão entregues dentre dos parametros de funcionamento. No mais as coisas fluiram até que bem, futuramente possa haver mais melhorias. Mas até aqui e isso mesmo.
<!--
## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

## Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.


Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 4                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4.67                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

## Avaliação dos Testes de Usabilidade

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.
--->



