import { shallowMount } from '@vue/test-utils'
import Pokemon from '@/components/Pokemon.vue'

describe('Pokemon.vue', () => {
  it('renders pokemon name correctly', () => {
    const id = 'bulbasaur';
    const wrapper = shallowMount(Pokemon, {
      propsData: {
        id: id
      }
    })

    expect(wrapper.text()).toMatch(`${id.charAt(0).toUpperCase() + id.slice(1)}`)
  })

  it('renders correct pokemon type', async () => {
    const id = 'bulbasaur';
    const wrapper = shallowMount(Pokemon, {
      propsData: {
        id: id
      }
    })

    await wrapper.vm.$nextTick()

    const types = wrapper.vm.types
    expect(types).toEqual([
      { name: 'grass', image: expect.any(String) },
      { name: 'poison', image: expect.any(String) }
    ])
  })

  it('renders correct pokemon weight', async () => {
    const id = 'bulbasaur';
    const wrapper = shallowMount(Pokemon, {
      propsData: {
        id: id
      }
    })

    await wrapper.vm.$nextTick()

    const weight = wrapper.vm.weight
    expect(weight).toBe(69)
  })

  it('renders correct pokemon height', async () => {
    const id = 'bulbasaur';
    const wrapper = shallowMount(Pokemon, {
      propsData: {
        id: id
      }
    })

    await wrapper.vm.$nextTick()

    const height = wrapper.vm.height
    expect(height).toBe(7)
  })
})
