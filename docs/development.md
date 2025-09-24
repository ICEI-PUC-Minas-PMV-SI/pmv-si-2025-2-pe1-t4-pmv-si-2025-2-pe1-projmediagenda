# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                      |    Responsável              | Artefato Criado |
|------|-------------------------------------------------------------------------------------------------------------|-----------------------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas pelo calendario                               | ...                         |  tarefas.html   |
|RF-002| A aplicação deve ter uma interface prática e intuitiva                                                      | ...                         | interface.html  |
|RF-003| A aplicação deve ter uma aba para cadastro do usuario (senha + gmail.com.br) sendo possivél guardar o login | ...                         |  login.html     |
|RF-004| A aplicação deve seguir um padrão de cores verde,cinza,azul,branco para sua interface                       | ...                         | Cores.css       |
|RF-005| Deve ser possivel acompanhar os resultados é o nivel de aprendizado do cliente                              | ...                         |  resultados     |
|RF-006| A aplicação deve ter um calendário que permita anotações, marcações,lembretes para o usuario                | ...                         | Calendario.html |
|RF-007| A aplicação deve ter uma área de anotações                                                                  | ...                         |  Anotações.html |
|RF-008| A aplicação deve ter uma area para plantões                                                                 | ...                         | plantões.html   |
|RF-009| A aplicação deve ter recursos interativos para provas e quizzes interativos                                 | ...                         | interações.css  |


## Descrição das estruturas:

                                     
 Anotações
| **Nome**    |     **Tipo**     |   **Descrição**                             | **Exemplo**                                        |
|-------------|------------------|---------------------------------------------|----------------------------------------------------|
| id          | Numero (inteiro) | Identificador único da tarefa/evento        | 2                                                  |
| titulo      | Texto            | Título da tarefa/evento                     | Reunião de planejamento                            |
| descricao   | Texto            | Descrição detalhada da tarefa               |Reunião com a equipe para falar sobre os exames     |
| data        | Data             | Data do evento                              | 18/09/2025                                         |
| hora        | Texto            | Hora do evento                              | 14:30                                              |
| tipo        | Texto            | Tipo do evento (tarefa, lembrete, plantão)  | lembrete                                           |
| usuarioId   | Numero (inteiro) | Identificador do usuário dono da tarefa     | 2                                                  |

## Estrutura do usuário
| **Nome**    |     **Tipo**     |   **Descrição**                             | **Exemplo**                                        |
|-------------|------------------|---------------------------------------------|----------------------------------------------------|
| id          | Numero (inteiro) | Identificador único do usuário              | 3                                                  |
| Nome        | Texto            | Nome completo do usuário                    | Gabriel Fonseca Santos                             |
| email       | Texto            | E-mail do usuário                           | gabriel182@gmail.com                               |
| senha       | texto            | Senha criptografada do usuário              | ******                                             |
| Aprendizado | Texto            | Nivel de aprendizado atual do usuário       | Intermediário                                      |


