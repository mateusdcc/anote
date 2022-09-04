# ANote | Esquenta Programa de Formação FCamara

<div id='top'></div>

_[Leia em português](#Portugues)_

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

<td><img alt="Stars" src="https://img.shields.io/github/stars/mateusdcc/anote?style=flat-square&labelColor=343b41"/></td>

# About it

![Usage](./assets/usage.png)

**Anote** is a tag based note-taking plataform where you can organize your notes with a powerful markdown editor that supports images, tables, videos, and much more using tags.

Anote provides a clean, simple and intuitive interface to help you organize your notes and make your life easier.

This project consists of 4 pages:

| File Name           | Page       | Utility       | Access            | Redirects to |
| ------------------- | ---------- | ------------- | ----------------- | ------------ |
| pages/index.js      | /          | Landpage      | Anyone            |              |
| pages/login.jsx     | /login     | Login page    | Not-Authenticated | /dashboard   |
| pages/register.jsx  | /register  | Register page | Not-Authenticated | /dashboard   |
| pages/dashboard.jsx | /dashboard | Main Editor   | Authenticated     | /login       |

This app was built using next.js, react.js, and supabase, here a table with the technologies used:

| Technology | Link                 |
| ---------- | -------------------- |
| Next.js    | https://nextjs.org/  |
| React.js   | https://reactjs.org/ |
| Supabase   | https://supabase.io/ |
| Vercel     | https://vercel.com/  |

Project link: https://anote.vercel.app/

# Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repo

```sh
git clone https://github.com/mateusdcc/anote
```

2. Install NPM packages

```sh
npm install
```

3. Create a .env.local file and add your supabase url and key

```sh
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key
```

4. Run the app

```sh
npm run dev
```

# Contributing

Any contributions you make are **greatly appreciated**, but it is going to be sent to another branch and merged after 10/8, the `main` branch solely purpose is to the Orange Juice Program, which is individual.

# License

Distributed under the MIT License. See `LICENSE` for more information.

# Using the app

## Registering

To register, you need go to the page [`/register`](http://anoteapp.vercel.app/register) and fill the form with your email, and password. After that, you are going to receive an email with a link to confirm your account. After confirming your account, you are going to be redirected to the landpage where you can access the dashboard by pressing the dashboard button on the right top corner or going to [here](https://anoteapp.vercel.app/dashboard).

## Logging in

To log in, you need go to the page [`/login`](http://anoteapp.vercel.app/login) and fill the form with your email, and password. If your credentials are correct, you are going to be redirected to the dashboard.

## Dashboard

The dashboard is the main page of the app, where you can create, edit, and delete notes. To get a full walkthrough of the dashboard, you can watch the video below.

[![Dashboard Walkthrough](https://img.youtube.com/vi/DoZmE2qzfAA/0.jpg)](https://www.youtube.com/watch?v=DoZmE2qzfAA)

## Showcase images

### Filtering by tag

![Filter](./assets/filter.png)

### Filtering by name

![Name Sort](./assets/namesort.png)

### New Note Modal

![New Note](./assets/newnote.png)

### Tag Color Changer

![Tag Color](./assets/tagcolor.png)

### Editing Note

![Usage](./assets/usage.png)

# Contact

Email: mateusdc@proton.me
Discord: Monkagoras#1790

---

<div id="Portugues">

# Sobre

![Usage](./assets/usage.png)

**Anote** é uma plataforma de anotações baseada em tags onde você pode organizar suas anotações com um poderoso editor de markdown que suporta imagens, tabelas, vídeos e muito mais usando tags.

Este projeto consiste em 4 páginas:

| Nome do Arquivo     | Página     | Utilidade          | Acesso          | Redireciona para |
| ------------------- | ---------- | ------------------ | --------------- | ---------------- |
| pages/index.js      | /          | Landpage           | Qualquer um     |                  |
| pages/login.jsx     | /login     | Página de login    | Não-autenticado | /dashboard       |
| pages/register.jsx  | /register  | Página de registro | Não-autenticado | /dashboard       |
| pages/dashboard.jsx | /dashboard | Editor principal   | Autenticado     | /login           |

Este aplicativo foi construído usando next.js, react.js e supabase, aqui uma tabela com as tecnologias usadas:

| Tecnologia | Link                 |
| ---------- | -------------------- |
| Next.js    | https://nextjs.org/  |
| React.js   | https://reactjs.org/ |
| Supabase   | https://supabase.io/ |
| Vercel     | https://vercel.com/  |

Link do projeto: https://anote.vercel.app/

# Começando

## Pré-requisitos

- [Node.js](https://nodejs.org/en/)

## Instalação

1. Clone o repositório

```sh
git clone https://github.com/mateusdcc/anote
```

2. Instale os pacotes NPM

```sh
npm install
```

3. Crie um arquivo .env.local e adicione sua url e chave do supabase

```sh
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key
```

4. Execute o aplicativo

```sh
npm run dev
```

# Contribuindo

Qualquer contribuição que você fizer é **muito apreciada**, mas será enviada para outra branch e mesclada após 10/8, a branch `main` tem o único propósito de ser o Programa de Formação FCamara, que é individual.

# Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

# Usando o aplicativo

## Registrando

Para se registrar, você precisa ir para a página [`/register`](http://anoteapp.vercel.app/register) e preencher o formulário com seu email e senha. Depois disso, você receberá um email com um link para confirmar sua conta. Depois de confirmar sua conta, você será redirecionado para a landpage onde você pode acessar o dashboard clicando no botão dashboard no canto superior direito ou indo para [aqui](https://anoteapp.vercel.app/dashboard).

## Fazendo login

Para fazer login, você precisa ir para a página [`/login`](http://anoteapp.vercel.app/login) e preencher o formulário com seu email e senha. Se suas credenciais estiverem corretas, você será redirecionado para o dashboard.

## Dashboard

O dashboard é a página principal do aplicativo, onde você pode criar, editar e excluir anotações. Para obter um guia completo do dashboard, você pode assistir ao vídeo abaixo.

[![Dashboard Walkthrough](https://img.youtube.com/vi/DoZmE2qzfAA/0.jpg)](https://www.youtube.com/watch?v=DoZmE2qzfAA)

## Imagens de demonstração

### Filtrando por tag

![Filter](./assets/filter.png)

### Filtrando por nome

![Name Sort](./assets/namesort.png)

### Novo modal de nota

![New Note](./assets/newnote.png)

### Alterador de cor de tag

![Tag Color](./assets/tagcolor.png)

### Editando nota

![Usage](./assets/usage.png)

# Contato

Email: mateusdc@proton.me
Discord: Monkagoras#1790

</div>
