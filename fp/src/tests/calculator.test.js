import { expect, it } from '@jest/globals'
import { mount } from '@vue/test-utils'
import Calculator from '../components/Calculator'

describe('Calculator test', ()=>{
    it('Test operand1 input value', async ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test operand2 input value', async ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand2]')
        operand1Input.setValue('2')

        // operand1Input.element.value = '1'
        // operand1Input.trigger('input')

        expect(wrapper.vm.operand2).toBe(2)
    })

})

describe('Calculator test methods', ()=>{
    it('Test sum operation', async ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('100')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('100')

        const sumOperationBtn = wrapper.find('button[name="+"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(200)
    })

    it('Div', async ()=> {
        const wrapper = mount(Calculator)

        const operand1Input = wrapper.find('input[name=operand1]')
        operand1Input.setValue('4')


        const operand2Input = wrapper.find('input[name=operand2]')
        operand2Input.setValue('2')

        const sumOperationBtn = wrapper.find('button[name="/"]')
        sumOperationBtn.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

})