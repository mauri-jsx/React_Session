# Sistema de Sesión en React con Context API

Este proyecto implementa un sistema básico de autenticación en una aplicación React utilizando Context API para gestionar la sesión del usuario. Incluye un backend que valida las credenciales de usuario en el endpoint `/login`.

## Objetivo

Implementar una aplicación de sesión sin utilizar React Router, donde se muestre un componente de inicio de sesión (Login) si no hay una sesión activa, y una pantalla de bienvenida (Home) cuando el usuario ha iniciado sesión. Este proyecto incorpora un custom hook `useSession` para acceder al estado de la sesión y las funciones de autenticación.

## Estructura de Carpetas

```plaintext
src
│
├── hook
│   └── useSession.js          # Custom hook para gestionar la sesión
│
├── context
│   └── SessionProvider.js      # Proveedor de contexto para la sesión
│
├── pages
│   ├── Home.js                # Componente de bienvenida
│   └── Login.js               # Componente de inicio de sesión
│
└── App.js                     # Componente principal
```
