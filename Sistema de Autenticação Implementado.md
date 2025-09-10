# Sistema de Autenticação Implementado

## Descrição
Foi implementado um sistema de autenticação que impede o acesso direto às páginas do sistema sem passar pela página inicial (index.html) e inserir a senha correta.

## Como Funciona

### 1. Arquivo de Autenticação (auth.js)
- Criado um arquivo JavaScript que verifica se o usuário está autenticado
- Utiliza `sessionStorage` para armazenar o estado de autenticação
- Se não estiver autenticado, redireciona automaticamente para index.html

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated) {
        window.location.replace('index.html');
    }
});
```

### 2. Modificação do index.html
- Adicionada funcionalidade para definir a sessão quando a senha correta for inserida
- A senha configurada é: **neuroshima**
- Após inserir a senha correta, o sistema define `sessionStorage.setItem("authenticated", "true")`

### 3. Proteção de Todas as Páginas
O script auth.js foi adicionado a todas as páginas do sistema:
- acesso.html
- arquivos.html
- d.html
- doom.html
- e.html
- jogos.html
- mensagem.html
- painel.html
- rede.html
- terminal.html
- wind.html
- z.html

## Fluxo de Autenticação

1. **Acesso Direto a Qualquer Página**: O usuário é automaticamente redirecionado para index.html
2. **Página Index**: O usuário deve inserir a senha "neuroshima"
3. **Senha Correta**: O sistema define a sessão como autenticada e redireciona para acesso.html
4. **Navegação Livre**: Uma vez autenticado, o usuário pode navegar entre todas as páginas
5. **Sessão Expirada**: Se a sessão for limpa ou expirar, o usuário é redirecionado novamente para index.html

## Segurança

- **Proteção por Sessão**: Utiliza sessionStorage que é limpo quando o navegador é fechado
- **Redirecionamento Automático**: Impede acesso não autorizado através de redirecionamento imediato
- **Senha Única**: Sistema centralizado com uma única senha de acesso
- **Verificação em Tempo Real**: A verificação acontece no carregamento de cada página

## Teste do Sistema

O sistema foi testado e confirmado que:
1. ✅ Impede acesso direto a qualquer página protegida
2. ✅ Redireciona automaticamente para index.html quando não autenticado
3. ✅ Aceita a senha "neuroshima" corretamente
4. ✅ Permite navegação livre após autenticação
5. ✅ Reprotege o sistema quando a sessão é limpa

## Arquivos Modificados/Criados

### Novo Arquivo:
- `auth.js` - Script de autenticação

### Arquivos Modificados:
- `index.html` - Adicionada funcionalidade de definir sessão
- Todas as páginas HTML - Adicionada referência ao auth.js

O sistema está funcionando perfeitamente e atende aos requisitos solicitados.

