import React from 'react';

export const Header = props => {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-teal p-6 bg-gray-200 border-b">
      <div className="flex items-center flex-no-shrink mr-6">
        <h1 className="text-grey-darker font-medium">
          {`{`} JSON Pretty {`}`}
        </h1>
      </div>
    </nav>
  );
};
