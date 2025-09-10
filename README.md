# Projeto Cyberpunk: Sistema de Invasão e Gerenciamento

Este projeto é uma simulação de um sistema de invasão e gerenciamento com uma interface de usuário inspirada na estética cyberpunk. Ele oferece diversas funcionalidades interativas, desde uma tela de login imersiva até um painel de controle de sistema, gerenciador de arquivos, sistema de mensagens, monitor de rede, terminal interativo e até mesmo um arcade com jogos clássicos.

## Funcionalidades Principais

O sistema é composto por várias páginas HTML, cada uma com um propósito específico e um design coeso que reflete o tema cyberpunk:

- **Tela de Login (`index.html`):** Ponto de entrada imersivo com efeitos visuais e sonoros, e um campo de senha para acesso ao sistema.
- **Painel de Controle (`acesso.html`):** Exibe métricas do sistema em tempo real (CPU, memória, rede), atividades e um mapa de rede simulado.
- **Gerenciador de Arquivos (`arquivos.html`):** Interface para navegação, visualização e gerenciamento de arquivos e pastas.
- **Arcade de Jogos (`jogos.html`):** Contém versões cyberpunk de jogos clássicos como Snake e Tetris, com controles e estatísticas.
- **Sistema de Mensagens (`mensagem.html`):** Permite a comunicação com contatos, com recursos de criptografia simulados.
- **Painel de Administração (`painel.html`):** Oferece controle sobre usuários, logs do sistema e configurações, com gráficos e tabelas de dados.
- **Monitor de Rede (`rede.html`):** Visualiza o tráfego de rede em tempo real, com filtros por protocolo e detalhes de pacotes.
- **Terminal Interativo (`terminal.html`):** Um terminal de linha de comando funcional com comandos básicos e efeitos visuais.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

```
.
├── acesso.html
├── arquivos.html
├── auth.js
├── d.html (Cópia de arquivos.html - Redundante)
├── doom.html
├── e.html (Cópia de arquivos.html - Redundante)
├── index.html
├── jogos.html
├── mensagem.html
├── painel.html
├── rede.html
├── styles.css
├── terminal.html
├── wind.html (Cópia de terminal.html - Redundante)
└── z.html (Cópia de terminal.html - Redundante)
```

### Descrição dos Arquivos:




### `index.html`

Este é o ponto de entrada da aplicação, apresentando uma tela de login com um tema cyberpunk. Ele inclui:
- Efeitos visuais de scanline, ruído e partículas para criar uma atmosfera imersiva.
- Um terminal simulado que exibe mensagens de sistema.
- Um campo de entrada de senha com validação.
- Controles de áudio para ativar/desativar sons ambiente e efeitos de digitação.
- Uma tela de download simulada que aparece antes do acesso ao sistema principal.

### `acesso.html`

Esta página parece ser o painel de controle principal após o login. Ela exibe métricas do sistema e atividades, com um design cyberpunk:
- Gráficos de uso de CPU, memória e tráfego de rede.
- Lista de atividades do sistema com indicadores de status.
- Mapa de sistema simulado para visualização da rede.
- Informações de armazenamento.
- HUD (Heads-Up Display) e relógio fixos na tela.
- Menu de navegação para outras seções do sistema.

### `arquivos.html, d.html, e.html, z.html`

Esta página simula um gerenciador de arquivos com uma interface cyberpunk:
- Barra lateral com drives e acesso rápido.
- Área de conteúdo para listar arquivos e pastas.
- Barra de caminho para navegação.
- Barra de ferramentas com botões de ação (ex: upload, download).
- Visualização de arquivos em grade.
- Menu de contexto para ações em arquivos.
- Pré-visualização de arquivos.

### `doom.html`

Esta página é dedicada a um jogo DOOM em estilo cyberpunk, um emulador. Inclui:
- Um canvas para renderizar o jogo.
- Status de carregamento e progresso do jogo.
- Botão para tela cheia.
- Elementos HUD específicos para o jogo.

### `jogos.html`

Esta página apresenta um arcade cyberpunk com jogos clássicos como Snake e Tetris, adaptados ao estilo visual do projeto:
- Cards para cada jogo com título, área de jogo (canvas) e controles (iniciar, pausar, reiniciar).
- Estatísticas de jogo (pontuação, nível, recorde).
- Seção de instruções detalhadas para cada jogo.

### `mensagem.html`

Esta página implementa um sistema de mensagens com uma interface cyberpunk:
- Painel de contatos com busca e lista de usuários (online, offline, ausente).
- Área de chat com mensagens recebidas e enviadas, incluindo status (entregue, lido, enviando).
- Campo de entrada de mensagem e botão de envio.
- Seção de criptografia com campos para chaves e botões de criptografar/descriptografar.

### `painel.html`

Esta página serve como um painel de administração, oferecendo controle e monitoramento do sistema:
- Barra lateral com menu de administração (usuários, logs, configurações).
- Seção de estatísticas com cards para usuários ativos, processos, etc.
- Tabela de dados para listar usuários ou outros elementos gerenciáveis.
- Gráficos de uso de recursos do sistema.
- Visualizador de logs do sistema com diferentes tipos de log (erro, aviso, sucesso, info).

### `rede.html`

Esta página é um monitor de rede, com visualizações e controles para o tráfego de rede:
- Painel de controle com filtros por protocolo e botões de ação (iniciar/parar captura).
- Área de visualização da rede com nós (core, router, server, workstation) e pacotes animados.
- Estatísticas de tráfego (pacotes capturados, bytes transferidos).
- Lista de pacotes capturados com detalhes (tempo, origem, destino, tamanho, protocolo).

### `terminal.html`

Esta página simula um terminal de linha de comando interativo:
- Área de exibição de saída do terminal.
- Campo de entrada para comandos.
- Histórico de comandos.
- Suporte a comandos básicos como `help`, `clear`, `ls`, `cd`, `cat`, `echo`, `ping`, `hack`.
- Efeitos visuais e sonoros de digitação.

### `auth.js`

Este arquivo JavaScript é responsável pela lógica de autenticação do sistema. Ele verifica se o usuário está autenticado (`sessionStorage.getItem(\'authenticated\')`) e, caso contrário, redireciona para a página `index.html` (tela de login). Isso garante que as páginas protegidas só possam ser acessadas após o login bem-sucedido.

### `styles.css`

Este arquivo CSS unificado define o estilo visual de todas as páginas do projeto, criando uma estética cyberpunk coesa. Ele inclui:
- **Importação de fontes:** Utiliza as fontes \'Share Tech Mono\' e \'Orbitron\' para um visual tecnológico.
- **Reset e configurações básicas:** Define margens, paddings e box-sizing para consistência.
- **Efeitos visuais cyberpunk:**
    - `scanline`: Linha de varredura animada que simula telas antigas.
    - `noise`: Efeito de ruído sutil para uma sensação de vídeo analógico.
    - `grid-lines`: Linhas de grade de fundo para um visual futurista.
- **Layout e containers:** Estilos para o container principal e cabeçalhos.
- **Tipografia:** Definições para títulos (com efeito glitch), subtítulos e texto geral.
- **Navegação:** Estilos para o menu de navegação e itens ativos.
- **Cards e painéis:** Estilos base para os diversos cards e painéis usados nas páginas, incluindo efeitos de gradiente e sombra.
- **Botões:** Vários estilos de botões com efeitos hover e variações de cor (start, warning, danger).
- **Formulários e inputs:** Estilos para campos de entrada de texto, incluindo um estilo específico para senhas.
- **Tabelas e listas:** Estilos para tabelas de dados e listas de itens.
- **Indicadores de status:** Estilos para indicadores de online, aviso, offline e badges de status.
- **Elementos de interface:** Estilos específicos para o terminal, prompt e linhas de terminal (comando, erro, sistema, resposta).
- **Gráficos e visualizações:** Estilos para containers de gráficos, barras de gráfico e títulos de gráfico.
- **Elementos fixos:** Estilos para o HUD, relógio e o logo cyberpunk fixos na tela.
- **Responsividade:** Media queries para adaptar o layout a diferentes tamanhos de tela.





## Como Usar

Para utilizar este projeto, basta abrir o arquivo `index.html` em qualquer navegador web moderno. Não é necessária nenhuma instalação ou configuração adicional. Certifique-se de que todos os arquivos (`.html`, `.css`, `.js`) estejam na mesma pasta ou em suas respectivas subpastas, conforme a estrutura do projeto.

## Licença

Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir o código, desde que a licença original seja incluída.


## Preview
<img width="1279" height="946" alt="image" src="https://github.com/user-attachments/assets/dbe34548-e68d-4413-b37a-4f583be45728" />

<img width="1275" height="950" alt="image" src="https://github.com/user-attachments/assets/03a70abb-e6bb-48be-a4e5-55b96352eaa1" />



