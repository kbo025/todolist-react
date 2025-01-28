import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Cambia esto a la URL de tu API
  headers: {
    'Content-Type': 'application/json',
    // Otros encabezados que necesites
  },
});

const defaultTodos = [
    {key: '1', text: 'Buscar los Ingredientes', completed: false},
    {key: '2', text: 'Buscar los Instrumentos', completed: false},
    {key: '3', text: 'Colocar agua en un recipiente', completed: false},
    {key: '4', text: 'Colocar la sal y el harina', completed: false},
    {key: '5', text: 'Amasar hasta quedar firme y concistente', completed: false},
    {key: '6', text: 'Precalentar y engrasar el budare', completed: false},
    {key: '7', text: 'Agarrar una bola de harina y dar forma de Arepa', completed: false},
    {key: '8', text: 'Colocar en el budare', completed: false},
    {key: '9', text: 'Repetir hasta hacer todas las arepas', completed: false},
    {key: '10', text: 'Revisar frecuentemente el cocimiento', completed: false},
    {key: '11', text: 'Al estar completamente cocidas voltear', completed: false},
    {key: '12', text: 'Revisar frecuentemente el cocimiento', completed: false},
    {key: '13', text: 'Al estar completamente cocidas retirar del budare', completed: false},
]

export const getTodos = () => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(defaultTodos), 2000));
//     const response = await api.get('/todo');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching', error);
//     throw error;
//   }
};

// Ejemplo de función POST
export const createTodo = async (item) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(item), 500));
  // try {
  //   const response = await api.post('/todo', item);
  //   return response.data;
  // } catch (error) {
  //   console.error('Error creating', error);
  //   throw error;
  // }
};
