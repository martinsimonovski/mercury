import React from 'react';

export const Path = props => {
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      props.refreshPath();
    }
  };
  return (
    <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Property name"
        aria-label="Property name"
        onChange={props.handlePropertyChange}
        onKeyPress={handleKeyPress}
        value={props.path}
      />
      <button
        className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        onClick={props.refreshPath}
      >
        Parse
      </button>
    </div>
  );
};
