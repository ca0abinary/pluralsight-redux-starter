import React from 'react';
import expect from 'expect';
import {mount,shallow} from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const wrapper = mount(<MuiThemeProvider><ManageCoursePage authors={[]}/></MuiThemeProvider>);
    });
});