import express  from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { Link, Switch, Route } from 'react-router-dom';

import App from './components/App';
import App1 from './components/App1';

import StaticRouter from 'react-router-dom/StaticRouter';
//import { renderRoutes } from 'react-router-config';

//import routes from './components/routes';

//import {AppServer} from './components/AppServer';

const app = express();

// app.use((req, res) => {
//   res.end('<p>Hello World!</p>');
// });

app.use((req, res) => {
    //const componentHTML = renderToString(<AppServer />);
    //const componentHTML = renderToString(<AppyServer />);
    let context = {};
    console.log(req.url);
    const componentHTML = renderToString(
        <StaticRouter location={req.url} context={context}>
            {/* <AppServer /> */}
            <div>
                <ul>
                    <li><Link to={'/app'}>App</Link></li>
                    <li><Link to={'/app1'}>App1</Link></li>
                </ul>
                {/* <Switch> */}
                    <Route exact path='/' component={ App } />
                    <Route path="/app" component={ App } />
                    <Route path="/app1" component={ App1 } />
                {/* </Switch> */}
            </div>
        </StaticRouter>
      );

    return res.end(componentHTML);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});