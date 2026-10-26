import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept/CoreConcept.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import { CORE_CONSEPTS, EXAMPLES }  from '.assets/data.js';
import {useState} from 'react';

function App() {
  let [selectedTopic, setSelectedTopic] = useState('components');
  function handleSelect(selectedButton){
    console.log('Selected Button', selectedButton);
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept {...CORE_CONSEPTS[0]}/>
          <CoreConcept {...CORE_CONSEPTS[1]}/>
          <CoreConcept {...CORE_CONSEPTS[2]}/>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
            

          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>

        </section>
      </main>
    </div>
  );
}
export default App;
