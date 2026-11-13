// ============================================================
//  CONFIGURAÇÃO DO FIREBASE  (nuvem + vários usuários)
// ============================================================
//  Enquanto este valor for null, o sistema funciona em MODO LOCAL:
//  os dados ficam salvos só no navegador/aparelho em uso.
//
//  Para liberar acesso a outros usuários (dados compartilhados em tempo real):
//   1. Crie um projeto em https://console.firebase.google.com
//   2. Ative Authentication > E-mail/senha  e  Firestore Database
//   3. Em Configurações do projeto > Seus apps > Web (</>), copie o firebaseConfig
//   4. Substitua o null abaixo pelo objeto copiado, por exemplo:
//
//   window.FIREBASE_CONFIG = {
//     apiKey: "AIza...",
//     authDomain: "controle-baterias.firebaseapp.com",
//     projectId: "controle-baterias",
//     storageBucket: "controle-baterias.appspot.com",
//     messagingSenderId: "123456789",
//     appId: "1:123456789:web:abc123"
//   };
//
//  Depois cole o conteúdo de firestore.rules em Firestore > Regras
//  (trocando o código de acesso pelo seu).
//
//  USAR_LOGIN = false  -> uso pessoal: entra com um código de acesso
//                         (regras: firestore.rules)
//  USAR_LOGIN = true   -> vários usuários com e-mail e senha
//                         (ative Authentication > E-mail/senha e use firestore-login.rules)
// ============================================================
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCFCwHkV7mIFqXO5D1CakDF_NJAhdHH5pk",
  authDomain: "controle-baterias-25741.firebaseapp.com",
  projectId: "controle-baterias-25741",
  storageBucket: "controle-baterias-25741.firebasestorage.app",
  messagingSenderId: "455390594179",
  appId: "1:455390594179:web:6c41002b5b811ee25047b6"
};
window.USAR_LOGIN = false;
