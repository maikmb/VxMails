import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TemplatesListPage from '../../pages/TemplatesListPage/TemplatesListPage';
import TemplateEditorPage from '../../pages/TemplateEditorPage/TemplateEditorPage';
import Nav from '../Nav/Nav';

class MainLayout extends Component {

    render() {
        return (
            <>
                <Nav></Nav>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact={true} component={TemplatesListPage} />
                        <Route path="/editor" component={TemplateEditorPage} />
                    </Switch>
                </ BrowserRouter>
            </>
        );
    }
}

export default MainLayout;