import useLocalStorage from '../hooks/useLocalStorage';

const LocalStorage = () => {
  const [value, setValue] = useLocalStorage('name', 'Hello ');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="app-separator">
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default LocalStorage;
