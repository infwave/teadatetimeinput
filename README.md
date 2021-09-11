# TeaDateTimeInput

A date and time picker in the same react-native input component, based on ``@react-native-community/datetimepicker``. It can be used as a datepicker, timepicker or both at the same time. It is customizable and can be styled to fit your project's design.

## Installation

Install using npm:

```bash
npm install --save teadatetimeinput
```
Install using yarn:

```bash
yarn add teadatetimeinput
```

## Usage

Requires ``react`` as a peer dependency, dependencies are [moment.js](https://momentjs.com/) and [@react-native-community/datetimepicker](https://www.npmjs.com/package/@react-native-community/datetimepicker).

```js
import TeaDateTimeInput from 'teadatetimeinput';
```
or

```js
const TeaDateTimePicker = require('teadatetimeinput');
```
### Basic usage

```js
import React, {useState} from 'react';
import TeaDateTimeInput from 'teadatetimeinput';

export const App = () => {
    return(
        <TeaDateTimePicker datetime="01/01/2022 00:00" />
    );
}
```
## API

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **datetime** (required) | String |  | Initial date and time |
| **formatDate** (optional) | String | "DD/MM/YYYY" | Date format |
| **formatTime** (optional) | String | "HH:mm" | Time format |
| **is24Hour** (optional) | Bool | True | Should 24h format be used |
| **display** (optional) | String | "spinner" | Defines the visual display of the picker |
| **showTextInput** (optional) | Bool | True | Show the input field |
| **showPicker** (optional) | Bool | False | Show the picker when the first time render the page |
| **inputWrapStyle** (optional) | Object | {} | Styles to apply to input wrap component |
| **inputStyle** (optional) | Object | {} | Additional styles which should be applied to the Input component |
| **dateTimePickerWrapStyle** (optional) | Object | {} | Additional styles which should be applied to the DateTimePicker wrap component |
| **datePickerStyle** (optional) | Object | {} | Additional styles which should be applied to the DatePicker component |
| **timePickerStyle** (optional) | Object | {} | Additional styles which should be applied to the DateTime component |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)