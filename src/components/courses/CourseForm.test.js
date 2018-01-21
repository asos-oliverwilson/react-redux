// /* eslint-disable */
// import React, { Component } from 'react';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import CourseForm from './CourseForm';

// describe("COMPONENT: CourseForm", () => {
//     it("should call the onSave function if the save button is clicked.", () => {
//         const wrapper = shallow(
//             <CourseForm 
//             allAuthors={["Oliver Wilson"]}
//             course={  {
//                 id: "web-components-shadow-dom",
//                 title: "Web Component Fundamentals",
//                 watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
//                 authorId: "cory-house",
//                 length: "5:10",
//                 category: "HTML5"
//               }}
//             errors= {{
//                 id: "web-components-shadow-dom",
//                 title: "Web Component Fundamentals",
//                 watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
//                 authorId: "cory-house",
//                 length: "5:10",
//                 category: "HTML5"
//               }}
//             onChange={() => {}}
//             onSave={() => {}} 
//             saving={false} />
//         );
//         wrapper.find('input').simulate('click');
//         expect(onSave.to.have.been.called);
//     });
// });