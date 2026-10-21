import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept/CoreConcept.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import { CORE_CONSEPTS }  from '.assets/data.js';

function App() {
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
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
            

          </menu>

        </section>
      </main>
    </div>
  );
}
export default App;
