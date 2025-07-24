import { mount } from '@vue/test-utils';
import { useTagsStore } from '@/stores/tags';
import TagCard from './TagCard.vue';

const tagsStore = useTagsStore();

function mountComponent() {
  return mount(TagCard, {
    props: {
      tag: {
        id: 1,
        name: 'Tag example',
      },
    },
  });
}

describe('TagCard component', () => {
  it('renders tag name correctly', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('b').text()).toBe('Tag example');
  });

  it('renders edit state after clicking edit button', async () => {
    const wrapper = mountComponent();

    await wrapper.findAllComponents({ name: 'main-button' }).at(0)?.trigger('click');

    const textField = wrapper.findComponent({ name: 'text-field-input' });
    expect(textField.isVisible()).toBe(true);
    expect(textField.props('modelValue')).toBe('Tag example');
  });

  it('calls updateTag action and resets state to view after editing tag', async () => {
    const wrapper = mountComponent();

    // Click edit button
    await wrapper.findAllComponents({ name: 'main-button' }).at(0)?.trigger('click');

    // Update field value
    await wrapper.findComponent({ name: 'text-field-input' }).setValue('New input value');

    // Click save button
    await wrapper.findComponent({ name: 'main-button' }).trigger('click');

    expect(tagsStore.updateTag).toHaveBeenCalledWith({ id: 1, name: 'New input value' });
  });
});
