import React from 'react'
import { shallow } from 'enzyme'

import A from '..'

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const wrapper = shallow(<A>Click me</A>)
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('should have children', () => {
    const wrapper = shallow(<A>Click me</A>)
    expect(wrapper.contains('Click me')).toEqual(true)
  })

  it('should have href attribute', () => {
    const link = 'localhost:3000'
    const wrapper = shallow(<A href={link}>Click me</A>)
    expect(wrapper).toMatchSnapshot()
  })
})