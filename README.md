# ☁️ CDN Service

> Uma solução simples, rápida e persistente para upload e distribuição de arquivos.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/typescript-%5E5.0-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue.svg)

Este projeto é um serviço de CDN (Content Delivery Network) minimalista construído para facilitar o upload e a recuperação de arquivos de forma eficiente. Perfeito para servir imagens, documentos e outros ativos estáticos em suas aplicações.

---

## ✨ Funcionalidades

- **🚀 Upload Simples**: Envie arquivos rapidamente através de uma API REST intuitiva.
- **💾 Persistência Garantida**: Sistema configurado com volumes Docker para garantir que seus dados permaneçam seguros, mesmo após reinicializações.
- **🐳 Docker Ready**: Pronto para rodar em qualquer ambiente com suporte a Docker e Docker Compose.
- **🛡️ Tipagem Forte**: Desenvolvido inteiramente em TypeScript para maior segurança e manutenibilidade.

## 🛠️ Tech Stack

Este projeto foi construído com as melhores ferramentas do mercado:

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
- **[Express](https://expressjs.com/)**: Framework web rápido e minimalista.
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScript com superpoderes de tipagem.
- **[Multer](https://github.com/expressjs/multer)**: Middleware para manipulação de `multipart/form-data`.
- **[Docker](https://www.docker.com/)**: Plataforma de containerização.

---

## 🚀 Começando

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter instalado:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Instalação e Execução

A maneira mais fácil de rodar o projeto é utilizando o Docker Compose. Isso irá configurar o servidor e garantir a persistência dos arquivos.

1. **Clone o repositório** (se aplicável):
   ```bash
   git clone <seu-repositorio>
   cd cdn
   ```

2. **Inicie o serviço**:
   ```bash
   docker-compose up --build -d
   ```

   O servidor estará rodando em `http://localhost:3005`.

---

## 📡 Documentação da API

### 1. Upload de Arquivo

Envie um arquivo para o servidor.

- **Endpoint**: `POST /upload`
- **Body**: `multipart/form-data`
  - `file`: O arquivo que você deseja enviar.

**Exemplo com cURL:**

```bash
curl -X POST -F "file=@/caminho/para/seu/imagem.png" http://localhost:3005/upload
```

**Resposta de Sucesso (200 OK):**

```json
{
  "message": "File uploaded successfully",
  "filename": "a1b2c3d4-e5f6-7890-1234-567890abcdef.png",
  "originalName": "imagem.png",
  "url": "http://localhost:3005/files/a1b2c3d4-e5f6-7890-1234-567890abcdef.png",
  "size": 10240,
  "mimetype": "image/png"
}
```

### 2. Acessar Arquivo

Recupere um arquivo enviado anteriormente usando o nome do arquivo retornado no upload.

- **Endpoint**: `GET /files/:filename`

**Exemplo de Uso:**

Acesse diretamente no navegador ou via requisição:
`http://localhost:3005/files/a1b2c3d4-e5f6-7890-1234-567890abcdef.png`

---

## 📂 Estrutura do Projeto

```
cdn/
├── src/
│   ├── config/
│   │   └── multer.ts    # Configuração de upload
│   ├── routes.ts        # Definição das rotas da API
│   └── server.ts        # Ponto de entrada do servidor
├── uploads/             # Diretório persistente de arquivos (mapeado no Docker)
├── Dockerfile           # Configuração da imagem Docker
├── docker-compose.yml   # Orquestração dos containers
├── package.json         # Dependências e scripts
└── tsconfig.json        # Configuração do TypeScript
```

---

Feito com 💙 por [Seu Nome/Organização]
