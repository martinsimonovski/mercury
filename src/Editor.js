import React from 'react';

const handleClick = (value, id) => {
  const copyText = document.getElementById(id);
  copyText.select();
  document.execCommand('copy');
};

export const Editor = props => {
  return (
    <div className="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2 h-full">
      <div className="box border rounded flex flex-col shadow bg-white h-full">
        <div className="box__title bg-gray-200 px-3 py-2 border-b relative">
          <span className="text-sm text-grey-darker font-medium">
            {props.title}
          </span>
          <button
            className="absolute right-0 top-0 my-1 mx-1 bg-white text-sm hover:bg-gray-100 text-gray-500 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
            onClick={e => handleClick(props.value, props.type)}
          >
            Copy
          </button>
        </div>
        <textarea
          id={props.type}
          className="text-grey-darkest flex-1 p-2 m-1 bg-transparent resize-none"
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => props.handleChange(e, props.type)}
        />
      </div>
    </div>
  );
};
