/* eslint-disable */
import React, { Component } from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Header from './Header';
import LoadingDots from './LoadingDots';

const createHeader = (isLoading) => {
    const component = shallow(<Header loading={isLoading} />);
    const LoadingDotsComponent = <LoadingDots interval={100} dots={20} />;
    return {
        wrapper: component,
        LoadingDotsComponent: LoadingDotsComponent
    };
};

describe("COMPONENT: Header", () => {
    it("should display dots if loading is true", () => {
        const {wrapper, LoadingDotsComponent} = createHeader(true);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(LoadingDotsComponent)).toEqual(true);
    });
    it("should not display dots if loading is false", () => {
        const {wrapper, LoadingDotsComponent} = createHeader(false);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(LoadingDotsComponent)).toEqual(false);
    });
});