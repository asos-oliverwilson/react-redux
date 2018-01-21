/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import AboutPage from './AboutPage';

describe("COMPONENT: AboutPage", () => {
    it("should display with a H1 and p element with the correct text.", () => {
        const wrapper = shallow(
            <AboutPage />
        );
        expect(wrapper.find('h1').text()).toEqual('About');
        expect(wrapper.find('p').text())
        .toEqual('Move over Mark Zuckerberg, Ollie Wilson is the new billionaire in town.');
    });
});