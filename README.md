#🛠️ V10marzo25 - Autenticación con Supabase y Angular
Este proyecto es una aplicación en Angular que implementa autenticación con Supabase, permitiendo iniciar sesión con Google y obtener un JWT Token.

📌 Características
✅ Login con Google mediante Supabase
✅ Obtención de JWT Token tras autenticación
✅ Manejo de sesiones con cookies
✅ Cierre de sesión
✅ Integración lista para expandir a un backend con Spring Boot

🚀 Tecnologías utilizadas
Angular
Supabase (Autenticación y almacenamiento de usuario)
TypeScript
Bootstrap (para diseño).

📥 Instalación y configuración
🔹 1. Clonar el repositorio

git clone https://github.com/tu-usuario/V10marzo25.git
cd V10marzo25


🔹 2. Instalar dependencias
sh
Copiar
Editar
npm install
🔹 3. Configurar Supabase
Crea un archivo src/environments/environment.ts y coloca tu configuración:

typescript
Copiar
Editar
export const environment = {
  production: false,
  supabaseUrl: 'https://TUSUPABASEURL.supabase.co',
  supabaseAnonKey: 'TU_SUPABASE_ANON_KEY'
};
 4. Ejecutar el proyecto
sh
Copiar
Editar
ng serve
Accede en el navegador a http://localhost:4200

📌 Uso
1️⃣ Iniciar sesión → Pulsa el botón "Login con Google"
2️⃣ Verificación del usuario → Se obtiene un JWT Token
3️⃣ Cerrar sesión → Borra el token y finaliza sesión
