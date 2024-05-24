import "./App.css";
import { Dropdown } from "./components/dropdown/dropdown";

const array = [
  { label: "Item 1", value: "Item 1" },
  { label: "Item 2", value: "Item 2" },
  { label: "Item 3", value: "Item 3" },
  { label: "Item 4", value: "Item 4" },
  { label: "Item 5", value: "Item 5" },
  { label: "Item 6", value: "Item 6" },
  { label: "Item 7", value: "Item 7" },
  { label: "Item 8", value: "Item 8" },
  { label: "Item 9", value: "Item 9" },
  { label: "Item 10", value: "Item 10" },
  { label: "Item 11", value: "Item 11" },
  { label: "Item 12", value: "Item 12" },
  { label: "Item 13", value: "Item 13" },
  { label: "Item 14", value: "Item 14" },
  { label: "Item 15", value: "Item 15" },
  { label: "Item 16", value: "Item 16" },
  { label: "Item 17", value: "Item 17" },
  { label: "Item 18", value: "Item 18" },
  { label: "Item 19", value: "Item 19" },
  { label: "Item 20", value: "Item 20" },
  { label: "Item 21", value: "Item 21" },
  { label: "Item 22", value: "Item 22" },
  { label: "Item 23", value: "Item 23" },
  { label: "Item 24", value: "Item 24" },
  { label: "Item 25", value: "Item 25" },
  { label: "Item 26", value: "Item 26" },
  { label: "Item 27", value: "Item 27" },
  { label: "Item 28", value: "Item 28" },
  { label: "Item 29", value: "Item 29" },
  { label: "Item 30", value: "Item 30" },
];

const array2 = [
  {
    label:
      "Super long nameeeeeeeeeeeeeeeeeeee nameeeeeeeeeeeeeeeeeeee nameeeeeeeeeeeeeeeeeeee",
    value: "Item 1",
  },
  { label: "Item 2", value: "Item 2" },
  { label: "longg nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", value: "Item 3" },
  { label: "Item 4", value: "Item 4" },
  { label: "Item 5", value: "Item 5" },
];

function App() {
  return (
    <div style={{ width: "400px" }}>
      <div style={{ margin: "10px" }}>
        <Dropdown selectedValue={undefined} options={array2} />
      </div>
      <div style={{ margin: "10px" }}>
        <Dropdown selectedValue={[]} options={array} isMulti />
      </div>
    </div>
  );
}

export default App;
