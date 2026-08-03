Aplicação Front-End desenvolvida em **React** para gerenciamento de produtos, consumindo a **Product Management API**.
---

# Telas

## Cadastro de produto

![Cadastro](https://github.com/user-attachments/assets/a7ef8356-a5bd-456c-a0fd-a2ec350fe182)

---

## Listagem de produtos

![Listagem](https://github.com/user-attachments/assets/f7724845-ed18-463b-b0b8-c885ae10facb)

---

## Busca por ID

![Busca](https://github.com/user-attachments/assets/1cf64764-fca7-468e-a390-a46f83ccc985)

---

## Edição de produto

![Edição](https://github.com/user-attachments/assets/b835cc42-50c4-4e7c-865c-692b2e47e9e1)

---

## Produto atualizado

![Atualizado](https://github.com/user-attachments/assets/31407425-4bf2-4ec5-aa94-e307511bd65d)

---

## Exclusão de produto

![Exclusão](https://github.com/user-attachments/assets/569b8cf7-5756-4fb7-b9a1-5264e8d08bf9)

---

# Integração com o Backend

Este projeto consome a API REST disponível em:

https://github.com/CodIguinhoDev/product-management-api

---

# Como executar o projeto

## Pré-requisitos

* Node.js (v18 ou superior)
* O backend da aplicação em execução.

Repositório da API:

**Product Management API**

https://github.com/CodIguinhoDev/product-management-api

---

## 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/products-crud-front.git
cd products-crud-front
```

---

## 2. Instale as dependências

```bash
npm install
```

---

## 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000/api/v1
```

> Ajuste a porta conforme a configuração utilizada pelo backend.

Sempre que alterar o arquivo `.env`, reinicie o servidor do Vite.

---

## 4. Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível, por padrão, em:

```text
http://localhost:5173
```
---
