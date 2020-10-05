import { useState } from 'react';
export default (initialVal) => {
  let [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue = '';
  };
  return [value, handleChange, reset];
};
