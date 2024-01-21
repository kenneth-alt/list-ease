import AddItem from './AddItem';
import ItemsList from './content-components/ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
      <AddItem />
    </main>
  );
};
export default Content;
