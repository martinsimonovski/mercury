import React, { useState } from 'react';
import { Editor } from './Editor';
import { Header } from './Header';
import { Path } from './Path';
import './App.css';
import './tailwind.css';
const get = require('lodash/get');
const set = require('lodash/set');

function App() {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [error, setError] = useState('');
  const [path, setPath] = useState(localStorage.getItem('path') || '');

  const prettyJSON = (value, pretty) => {
    try {
      setError('');
      let obj = JSON.parse(value);

      if (path) {
        let propertyValue = get(obj, path);
        if (propertyValue) {
          try {
            propertyValue = pretty
              ? JSON.parse(propertyValue)
              : JSON.stringify(propertyValue);
            set(obj, path, propertyValue);
          } catch (e) {
            setError("Can't parse that property.");
          }
        }
      }

      return JSON.stringify(obj, null, 4);
    } catch (e) {
      setError('The JSON is not valid.');
      return '';
    }
  };

  const handleChange = (event, type) => {
    if (type === 'source') {
      setLeft(event.target.value);
      const pretty = prettyJSON(event.target.value, true);
      setRight(pretty);
    } else {
      setRight(event.target.value);
      const uggly = prettyJSON(event.target.value, false);
      setLeft(uggly);
    }
  };

  const handlePropertyChange = event => {
    setPath(event.target.value);
    localStorage.setItem('path', event.target.value);
  };

  const refreshPath = () => {
    const pretty = prettyJSON(left, true);
    setRight(pretty);
  };

  return (
    <div className="app bg-gray-100 font-sans min-h-screen">
      <Header />
      <div className="row sm:flex  p-8 px-4 pt-4 flex-1">
        <div className="col mt-4 sm:ml-4 sm:mt-0 sm:w-1/4">
          <Path
            handlePropertyChange={handlePropertyChange}
            path={path}
            refreshPath={refreshPath}
          />
        </div>
        <div className="col mt-4 sm:ml-4 sm:mt-0 sm:w-1/4">
          <h4 className="text-sm py-3 text-red-500 font-small">{error}</h4>
        </div>
      </div>
      <div
        className="row sm:flex  min-v-screen p-8 px-4 pt-4 flex-1 overflow-y-auto"
        style={{ height: `1000px` }}
      >
        <Editor
          title="Source"
          placeholder="Insert the json that you want to edit"
          value={left}
          handleChange={handleChange}
          type="source"
        />
        <Editor
          title="Output"
          placeholder="Output of the json"
          value={right}
          handleChange={handleChange}
          type="output"
        />
      </div>
    </div>
  );
}

export default App;
