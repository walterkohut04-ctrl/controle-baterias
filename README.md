# ⚡ Controle de Baterias

Sistema web (com app instalável no celular) para controlar a **venda de baterias**: custos, valor de venda, lucro, margem, tabela de preços atual e **documentos das baterias** para enviar ao cliente.

Criado a partir da planilha `Baterias_Full.xlsx`, aba **Jun.** (17 vendas e a tabela de preços já vêm carregadas).

🔗 **Acesse:** https://walterkohut04-ctrl.github.io/controle-baterias/

---

## O que o sistema faz

| Aba | Para quê |
|---|---|
| **Painel** | Total custo, total venda, lucro bruto, lucro líquido e margem (igual ao topo da planilha), com filtros por ano/mês/cliente; vendas por mês; resumo por cliente e por modelo; alertas (vendas em aberto, pagamento “A definir”, margem baixa). |
| **Vendas** | Lista completa com ordenação, busca, filtro (em aberto / OK), totais, editar, duplicar, excluir e exportar para Excel. Clique no status para marcar como OK. 📎 abre os documentos do modelo da venda. |
| **Nova venda** | Entrada rápida: escolha o modelo, carregador e indicador → o custo vem da tabela de preços. Mostra o cálculo na hora e um **preço sugerido** para atingir a meta de margem. “Salvar e lançar outra” mantém cliente e data. No celular há o botão **+** em todas as telas. |
| **Preços** | Valor antigo × valor atual de baterias, carregadores e indicador, com variação %, histórico e venda sugerida. Ao atualizar um preço, o valor atual vira “valor antigo” automaticamente. |
| **Documentos** | Anexe fichas técnicas, certificados, manuais, garantias e fotos, vinculados a cada modelo. Selecione vários ou use **“Enviar kit do modelo”** para mandar tudo de uma vez: no celular abre direto o compartilhamento (WhatsApp, e-mail…); no computador baixa os arquivos e abre o e-mail com o texto pronto. |
| **Usuários** | (modo nuvem) Cadastro de usuários com perfil **Administrador** ou **Operador**. |
| **Config.** | Imposto sobre o lucro (24%), meta de margem (20%), backup/restauração e reimportação da planilha. |

### Fórmulas (iguais às da planilha)
- **Custo Tecnopemt** = Indicador + Carregador + Bateria
- **Lucro s/ imposto** = Valor da venda − Custo
- **Lucro c/ imposto** = Lucro s/ imposto × (1 − 24%)
- **Margem** = Lucro c/ imposto ÷ Valor da venda
- **Preço sugerido** = Custo ÷ (1 − meta ÷ (1 − imposto))

---

## Modo local × modo nuvem

O sistema já funciona assim que é publicado, em **modo local**: os dados ficam salvos no navegador do aparelho em que você está.

Para usar em **qualquer aparelho** (celular e computador vendo os mesmos dados), ative o **modo nuvem** com Firebase (plano gratuito Spark; os documentos ficam no próprio Firestore).

### Uso pessoal (código de acesso) — padrão
1. Em https://console.firebase.google.com crie um projeto (ex.: `controle-baterias`).
2. **Firestore Database** → *Criar banco de dados* → região `southamerica-east1` (São Paulo) → modo produção.
3. **Firestore → Regras**: cole [`firestore.rules`](firestore.rules), troque `TROQUE-PELO-SEU-CODIGO` pelo seu código de acesso e publique.
4. **Configurações do projeto → Seus apps → Web (`</>`)**: registre o app e copie o `firebaseConfig` para [`firebase-config.js`](firebase-config.js).
5. Abra o sistema, digite o código de acesso e clique em **Importar dados da planilha**.

O código fica salvo no aparelho; “Sair” remove-o daquele aparelho.

### Vários usuários (e-mail e senha) — quando quiser liberar para outras pessoas
1. Ative **Authentication → E-mail/senha** e adicione `walterkohut04-ctrl.github.io` em *Domínios autorizados*.
2. Use as regras de [`firestore-login.rules`](firestore-login.rules) e coloque `window.USAR_LOGIN = true` em `firebase-config.js`.
3. No sistema: **Primeiro acesso (admin)** → depois cadastre os usuários na aba **Usuários**.
   - **Administrador**: vê custos, lucros e margens; altera preços; gerencia usuários.
   - **Operador**: lança vendas (custo preenchido pela tabela, sem ver), vê valores de venda e usa os documentos.
   (Os dados do modo código não passam automaticamente: use Config. → Exportar/Importar backup.)

## Instalar como app
- **Android/Chrome**: botão **📲 Instalar app** no topo.
- **iPhone**: Safari → Compartilhar → *Adicionar à Tela de Início*.

## Arquivos
- `index.html` — o sistema completo (React + Firebase, arquivo único)
- `firebase-config.js` — chave do Firebase (modo nuvem)
- `firestore.rules` — regras do banco (uso pessoal com código)
- `firestore-login.rules` — regras do banco (vários usuários)
- `manifest.webmanifest`, `sw.js`, `icons/` — app instalável (PWA)
