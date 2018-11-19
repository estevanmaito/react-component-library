import React from 'react'
import { shallow } from 'enzyme'

import Button from '..'

describe('<Button />', () => {
  it('should render a <button> tag', () => {
    const wrapper = shallow(<Button type="button" />)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('should not render a <button> tag', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button')).toHaveLength(0)
  })

  it('should render an <a> tag', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('should have children', () => {
    const wrapper = shallow(<Button>Click me</Button>)
    expect(wrapper.contains('Click me')).toEqual(true)
  })
})