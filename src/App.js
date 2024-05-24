import "./App.css";
import { Dropdown } from "./components/dropdown/dropdown";

const array = [
  { label: "Los Angeles", value: "Los Angeles" },
  { label: "San Francisco", value: "San Francisco" },
  { label: "Seattle", value: "Seattle" },
  { label: "Austin", value: "Austin" },
  { label: "New York", value: "New York" },
  { label: "Chicago", value: "Chicago" },
  { label: "Denver", value: "Denver" },
  { label: "Boston", value: "Boston" },
  { label: "New Orleans", value: "New Orleans" },
  { label: "Portland", value: "Portland" },
  { label: "Miami", value: "Miami" },
  { label: "Dallas", value: "Dallas" },
  { label: "San Diego", value: "San Diego" },
  { label: "Raleigh", value: "Raleigh" },
  { label: "Charleston", value: "Charleston" },
  { label: "Nashville", value: "Nashville" },
  { label: "Atlanta", value: "Atlanta" },
  { label: "Phoenix", value: "Phoenix" },
  { label: "Houston", value: "Houston" },
  { label: "Las Vegas", value: "Las Vegas" },
  { label: "Detroit", value: "Detroit" },
  { label: "Fresno", value: "Fresno" },
  { label: "Sacramento", value: "Sacramento" },
  { label: "Orlando", value: "Orlando" },
  { label: "San Jose", value: "San Jose" },
  { label: "San Mateo", value: "San Mateo" },
  { label: "Fremont", value: "Fremont" },
  { label: "Oakland", value: "Oakland" },
  { label: "Salt Lake City", value: "Salt Lake City" },
  { label: "Baltimore", value: "Baltimore" },
];

const array2 = [
  {
    label: "Hugo Frank",
    value: "Hugo Frank",
  },
  { label: "Annabella Warren", value: "Annabella Warren" },
  { label: "Shelby Alvarado", value: "Shelby Alvarado" },
  { label: "Katherine Spencer", value: "Katherine Spencer" },
  { label: "Joshua Davidson", value: "Joshua Davidson" },
];

function App() {
  return (
    <div style={{ width: "400px" }}>
      <div style={{ margin: "10px" }}>
        <Dropdown
          selectedValue={undefined}
          options={array2}
          placeholder="Choose a name"
        />
      </div>
      <div style={{ margin: "10px" }}>
        <Dropdown selectedValue={[]} options={array} isMulti />
      </div>
    </div>
  );
}

export default App;
