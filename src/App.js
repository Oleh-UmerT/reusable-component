import data from './source.json'
import TextBlock from './components/TextBlock';

function App() {
  return (
    <div>
      <TextBlock data={data} />
    </div>
  );
}

export default App;
