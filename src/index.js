import React from 'react';
import ReactDOM from 'react-dom';
import SwaggerUI from 'swagger-ui-react';

ReactDOM.render(
  <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />,
  document.getElementById('app')
);

module.hot.accept();
