import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TestVuexComponent from '../components/TestVuexComp'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Actions from TestComponents', () => {
    let actions
    let store

    beforeEach(()=>{
        actions = {
            addData: jest.fn()
        }

        store = new Vuex.Store({
            actions
        })
    })


    it('run action with onSave', ()=>{
        const wrapper = shallowMount(TestVuexComponent, { store, localVue })
        const dateInput = wrapper.find('input')
        dateInput.element.value = '11.06.2020'
        dateInput.trigger('input')


        const btn = wrapper.find('button')
        btn.trigger('click')
        expect(actions.addData).toHaveBeenCalled()
        
    })
})