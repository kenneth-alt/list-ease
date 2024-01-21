import { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      item: 'Orange juice',
      checked: true,
    },
    {
      id: 2,
      item: 'item 2',
      checked: false,
    },
    {
      id: 3,
      item: 'item 3',
      checked: false,
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('grocerylist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('grocerylist', JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
