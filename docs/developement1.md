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

|ID     | Descrição do Requisito                                                                                      |    Responsável              | Artefato Criado |
|-------|-------------------------------------------------------------------------------------------------------------|-----------------------------|-----------------|
|RF-001 | A aplicação deve permitir que o usuário gerencie suas tarefas pelo calendario                               | ...                         |tarefas.html     |
|RF-002 | A aplicação deve ter uma interface prática e intuitiva                                                      | ...                         |interface.html   |
|RF-003 | A aplicação deve ter uma aba para cadastro do usuario (senha + gmail.com.br) sendo possivél guardar o login | ...                         |login.html       |
|RF-004 | A aplicação deve seguir um padrão de cores verde,cinza,azul,branco para sua interface                       | ...                         |Cores.css        |
|RF-005 | Deve ser possivel acompanhar os resultados é o nivel de aprendizado do cliente                              | ...                         |resultados       |
|RF-006 | A aplicação deve ter um calendário que permita anotações, marcações,lembretes para o usuario                | ...                         |Calendario.html  |
|RF-007 | A aplicação deve ter uma área de anotações                                                                  | ...                         |Anotações.html   |
|RF-008 | A aplicação deve ter uma area para plantões                                                                 | ...                         |plantões.html    |
|RF-009 | A aplicação deve ter recursos interativos para provas e quizzes interativos                                 | ...                         |interações.css   |
|RNF-010| Suporte para outros indiomas                                                                                | ...                         |Tradução.js      |
|RNF-011| Ser compativel com todos os modelos de tela                                                                 | ...                         |telas.html       |
|RNF-012| Integrar calendarios externos                                                                               | ...                         |CalendarioEX.html|
|RNF-013| suporte para mais de 50 usuaruios ao mesmo tempo                                                            | ...                         |Suporte50        |
|RNF-014| login multifator                                                                                            | ...                         |Login.html/css/js|
|RNF-015| Envio sms para avisos                                                                                       | ...                         |Smsnotifcação    |


## Descrição das estruturas:

                                     
 ## tarefas/eventos
| **Nome**    |     **Tipo**     |   **Descrição**                             | **Exemplo**                                        |
|-------------|------------------|---------------------------------------------|----------------------------------------------------|
| id          | Numero (inteiro) | Identificador único da tarefa/evento        | 2                                                  |
| Titulo      | Texto            | Título da tarefa/evento                     | Reunião de planejamento                            |
| Descrição   | Texto            | Descrição detalhada da tarefa               |Reunião com a equipe para falar sobre os exames     |
| Data        | Data             | Data do evento                              | 18/09/2025                                         |
| Hora        | Texto            | Hora do evento                              | 14:30                                              |
| Tipo        | Texto            | Tipo do evento (tarefa, lembrete, plantão)  | lembrete                                           |
| UsuarioId   | Numero (inteiro) | Identificador do usuário dono da tarefa     | 2                                                  |

## Estrutura do usuário
| **Nome**    |     **Tipo**     |   **Descrição**                             | **Exemplo**                                        |
|-------------|------------------|---------------------------------------------|----------------------------------------------------|
| Id          | Numero (inteiro) | Identificador único do usuário              | 3                                                  |
| Nome        | Texto            | Nome completo do usuário                    | Gabriel Fonseca Santos                             |
| Email       | Texto            | E-mail do usuário                           | gabriel182@gmail.com                               |
| Senha       | texto            | Senha criptografada do usuário              | ******                                             |
| Aprendizado | Texto            | Nivel de aprendizado atual do usuário       | Intermediário                                      |

## Estrutura Anotações
| **Nome**    |     **Tipo**     |   **Descrição**                             | **Exemplo**                                        |
|-------------|------------------|---------------------------------------------|----------------------------------------------------|
| Id          | Numero (inteiro) | Identificador único da anotação             | 4                                                  |
| Titulo      | Texto            | titulo da anotação                          | notas das aulas de matemática                      |
| Conteudo    | Texto            | conteúdo da anotação                        | deriavadas integrais etc...                        |
| Data criação| Data             | data da criação da anotação                 | 17/10/2025                                         |
| Usuário id  | Número (inteiro) | Identificador do dono da anotação           | 4                                                  |

## Estrutura Plantões
| **Nome**    |     **Tipo**     |   **Descrição**                             | **Exemplo**                                        |
|-------------|------------------|---------------------------------------------|----------------------------------------------------|
| Id          | Numero (inteiro) | Identificador único do plantão              | 1                                                  |
|Especialidade| string           | Especialidade médica                        | cardiologia                                        |
| Medico      | string           | Nome do médico                              | Dr josé                                            |
| Data criação| string           | data da criação do plantão                  | 25/10/2025                                         |
| Inicio      | string           | Hora de inicio                              | 18:00                                              |
| fim         | string           | Hora de termino                             | 08:00                                              |
| Observações | String           | observações    importantes                  | "plantão de urgência, pegar as fichas melhores"    |
| Usuário id  | Número (inteiro) | Id do usuario que cadastrou                 | 1                                                  |

## Quiz/Provas Interativas
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                            |
|-------------------|------------------|---------------------------------------------------|----------------------------------------|
| id                | Numero (inteiro) | Identificador único do quiz                       | 2                                      |
| Titulo            | Texto            | Título do quiz/prova                              | Quiz de Cardiologia Básica             |
| Descrição         | Texto            | Descrição detalhada do quiz                       | Avaliação  fisiologia cardíaca         |
| Disciplina        | Texto            | Disciplina/área do conhecimento                   | Medicina                               |
| TempoLimite       | Numero (inteiro) | Tempo limite em minutos para realização           | 30                                     |
| Dificuldade       | Texto            | Nível de dificuldade (fácil, médio, difícil)      | médio                                  |
| UsuarioId         | Numero (inteiro) | Identificador do usuário criador do quiz          | 2                                      |

## Configurações de Interface
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                            |
|-------------------|------------------|---------------------------------------------------|----------------------------------------|
| UsuarioId         | Numero (inteiro) | Identificador do usuário                          | 1                                      |
| Tema              | Texto            | Tema selecionado para interface                   | padrão                                 |
| CorPrimaria       | Texto            | Cor primária (verde)                              | #2E8B57                              |
| CorSecundaria     | Texto            | Cor secundária (cinza)                            | #808080                              |
| CorTerciaria      | Texto            | Cor terciária (azul)                              | #1E90FF                              |
| CorFundo          | Texto            | Cor de fundo (branco)                             | #FFFFFF                              |

## Resultados/Aprendizado
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                            |
|-------------------|------------------|---------------------------------------------------|----------------------------------------|
| id                | Numero (inteiro) | Identificador único do resultado                  | 6                                      |
| UsuarioId         | Numero (inteiro) | Identificador do usuário                          | 1                                      |
| QuizId            | Numero (inteiro) | Identificador do quiz realizado                   | 5                                      |
| Nota              | Decimais&inteiros| Nota obtida no quiz                               | 8.5,9,9.5                              |
| DataRealizacao    | Data             | Data da realização do quiz                        | 18/06/2024                             |
| NivelAprendizado  | Texto            | Nível de aprendizado calculado                    | Dificil                                |

## Suporte para Idiomas
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                                        |
|-------------------|------------------|---------------------------------------------------|----------------------------------------------------|
| id                | Numero (inteiro) | Identificador único da tradução                   | 1                                                  |
| Idioma            | Texto            | Código do idioma suportado                        | pt-BR                                              |
| Chave             | Texto            | Chave de identificação do texto                   | menu_calendario                                    |
| Texto             | Texto            | Texto traduzido no idioma                         | Calendário                                         |
| UsuarioId         | Numero (inteiro) | Identificador do usuário que configurou           | 1                                                  |

## Compatibilidade de Telas
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                                        |
|-------------------|------------------|---------------------------------------------------|----------------------------------------------------|
| id                | Numero (inteiro) | Identificador único da configuração               | 2                                                  |
| Dispositivo       | Texto            | Tipo de dispositivo                               | mobile                                             |
| LarguraMinima     | Numero (inteiro) | Largura mínima em pixels                          | 320                                                |
| LarguraMaxima     | Numero (inteiro) | Largura máxima em pixels                          | 768                                                |
| Orientacao        | Texto            | Orientação da tela                                | portrait                                           |
| UsuarioId         | Numero (inteiro) | Identificador do usuário                          | 1                                                  |

## Integração Calendários Externos
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                                        |
|-------------------|------------------|---------------------------------------------------|----------------------------------------------------|
| id                | Numero (inteiro) | Identificador único da integração                 | 3                                                  |
| TipoCalendario    | Texto            | Tipo de calendário externo                        | Google Calendar                                    |
| Url               | Texto            | URL do calendário externo                         | https://calendar.google.com/calendar/ical/...      |
| EventosSincronizados | Numero (inteiro) | Quantidade de eventos sincronizados            | 15                                                 |
| UsuarioId         | Numero (inteiro) | Identificador do usuário                          | 2                                                  |

## Suporte Multi-usuário
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                                        |
|-------------------|------------------|---------------------------------------------------|----------------------------------------------------|
| id                | Numero (inteiro) | Identificador da sessão ativa                     | 4                                                  |
| UsuarioId         | Numero (inteiro) | Identificador do usuário logado                   | 25                                                 |
| DataConexao       | Data             | Data e hora da conexão                            | 18/06/2024 14:30                                   |
| Dispositivo       | Texto            | Tipo de dispositivo conectado                     | desktop                                            |
| Status            | Texto            | Status da conexão                                 | ativo                                              |

## Login Multifator
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                                        |
|-------------------|------------------|---------------------------------------------------|----------------------------------------------------|
| id                | Numero (inteiro) | Identificador único do MFA                        | 5                                                  |
| UsuarioId         | Numero (inteiro) | Identificador do usuário                          | 1                                                  |
| Metodo            | Texto            | Método de autenticação                            | email                                              |
| Codigo            | Texto            | Código de verificação                             | 123456                                             |
| DataExpiracao     | Data             | Data de expiração do código                       | 18/06/2024 14:35                                   |
| Status            | Texto            | Status do código                                  | pendente                                           |

## Notificações SMS
| **Nome**          | **Tipo**         | **Descrição**                                     | **Exemplo**                                        |
|-------------------|------------------|---------------------------------------------------|----------------------------------------------------|
| id                | Numero (inteiro) | Identificador único da notificação                | 6                                                  |
| UsuarioId         | Numero (inteiro) | Identificador do usuário destinatário             | 3                                                  |
| Telefone          | Texto            | Número de telefone para envio                     | +5511999999999                                     |
| Mensagem          | Texto            | Texto da mensagem SMS                             | Lembrete: Plantão hoje às 14h                      |
| DataEnvio         | Data             | Data e hora do envio                              | 18/06/2024 10:00                                   |
| Status            | Texto            | Status do envio                                   | enviado                                            |

