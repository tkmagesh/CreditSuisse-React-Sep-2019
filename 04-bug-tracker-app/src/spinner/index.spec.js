import { spinnerReducer } from './index';
import { Spinner } from './index';
import { shallow } from 'enzyme';
import React from 'react';

describe('Spinner Reducer', () => {
	it('increments the current state by 1 for UP action', () => {
		//Arrange
			let action = { type : 'UP' };
			let expectedResult = 1;
				
		//Act
			let result = spinnerReducer(0, action)

		//Assert
			expect(result).toBe(expectedResult);
	});
});

describe('Spinner snapshot testing', () => {
	it('should match the snapshot', () => {

		  const component = shallow(<Spinner spinnerValue={0} up={()=>{}} down={()=>{}} doubleUp={()=>{}} doubleDown={()=>{}}/>);
		  expect(component).toMatchSnapshot();

	})

	it('should call the up action', () => {
		const upActionMock = jest.fn();

		const component = shallow(<Spinner spinnerValue={0} up={upActionMock} down={()=>{}} doubleUp={()=>{}} doubleDown={()=>{}}/>);

		component.find('input[type="button"][value="Increment"]').simulate('click');
		expect(upActionMock).toHaveBeenCalled();
	})
})