//import logo from './3.jpg'; 
import './App.css'; 
import ProductList from './components/ProductList'; 
import TodoItem from './components/TodoItem'; 
import TodoList from './components/TodoList'; 
 
const initialTodos = [ 
  { id: 1, title: 'Learn React', completed: true }, 
  { id: 2, title: 'Build a Todo App', completed: false }, 
  { id: 3, title: 'Master Redux', completed: false } 
]; 
function App() { 
  const products = [ 
    { id: 1, name: 'Product A', price: 50.00 }, 
    { id: 2, name: 'Product B', price: 75.00 }, 
    { id: 3, name: 'Product C', price: 100.00 } 
  ]; 
 
  return ( 
    <> 
    <div > 
    <ProductList products={products} /> 
 
    <div> 
      <h2>My Todo List</h2> 
      <TodoList todos={initialTodos} /> 
    </div> 
 
    </div> 
    </> 
  ); 
} 
 
export default App;
