import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route path="*" component={() => <h1>Erro 404</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;