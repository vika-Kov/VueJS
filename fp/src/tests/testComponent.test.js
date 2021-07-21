import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent'

describe('TestComponent', ()=>{
    test('Content of Test Component', ()=> {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: "Hello From test!"
            }
        })

        expect(wrapper.html()).toEqual(
            '<div>This message is: Hello From test! (mod)</div>'
        )
    })
})