import '../src/features/auth/register.css'
import '../style.css'



export const initializeDynamicContent = () => {
  const saludo = 'Hola cómo estás';

  const elemento = document.querySelector('#prueba');
  const titulo = document.querySelector('#titulo');

  if (titulo) console.log(titulo.innerHTML);
  if (elemento) {
    elemento.innerHTML = `
        <div>
          <h1>${saludo}</h1>
        </div>
      `;
  }
};


