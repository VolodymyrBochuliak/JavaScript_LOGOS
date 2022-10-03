import BadWordsInput from './components/Bad_words_input';
import BadWordsOutput from './components/Bad_words_output';
import './App.scss';

function App() {
  return (
    <div className="body_container">
      <header className="app_header">
        <h3> React list of prohibited words</h3>
      </header>
      <div className="main_container">
        <div className="main_inner">
          < BadWordsOutput />
          < BadWordsInput />

                
        </div>
      </div>
    </div>
  );
}

export default App;
