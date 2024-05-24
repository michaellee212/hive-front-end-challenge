# Hive Frontend Engineer Challenge

Using React or vanilla (plain) Javascript, build a reusable dropdown menu component. Please
do not use a pre-built dropdown from a component library (i.e. No material ui, built in html
select, ant design, ANY already built drop down). We expect you to build this from scratch.
Please note, we value an elegant component architecture over styling.

## Requirements

### Design and Interface

- A user should be able to open and close the dropdown menu.
- The component must support a single selected option or multiple selected options.
- Please demonstrate both use cases separately.
- A user should be able to select and deselect all options at once.
- The selected option or options must be visible when the dropdown is closed.

### API (via Component Props)

- The component should support both single select and multi select.
- The component should have a flexible API, making it reusable across different parts of
- one or more applications. Consider it part of a component library.
- Should be able to be used as a controlled component

### Performance

- The component should render large lists efficiently.
- The component should not perform excessive computations.

### Readability

- The code should be readable and a fellow developer should be able to dive right into
  your code.

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Directories/Files/Components:

src (Contains all user interface files, utils, and components)

- App.js (Source file displaying the dropdownw)
- components
  - dropdown (Dropdown source file and styles)

### Dropdown Component Properties

```
function Dropdown({id, selectedValue, options, isMulti})

id: string;
selectedValue: {label: string; value: string | number} | Array<{label: string; value: string | number}> | undefined;
options: Array<{label: string; value: string | number}>;
isMulti: boolean;
placeholder: string;
```
