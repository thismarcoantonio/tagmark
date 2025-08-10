import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useStorage } from '@/helpers/useStorage';
import type { Mark } from '@/types/Mark';

export const useMarksStore = defineStore('marks', () => {
  const index = useStorage<number>('marks_index', 0);
  const marks = useStorage<{ [id: Mark['id']]: Mark }>('marks', []);

  function addMark(mark: Omit<Mark, 'id'>) {
    // Increase index to be used as id
    index.value += 1;
    marks.value[index.value] = { id: index.value, ...mark };
  }

  function getMarkById(id: Mark['id']) {
    return marks.value[id];
  }

  function updateMark(mark: Mark) {
    if (!marks.value[mark.id]) throw Error('Mark not found');
    marks.value[mark.id] = mark;
  }

  function deleteTag(mark: Mark) {
    if (!marks.value[mark.id]) throw Error('Mark not found');
    delete marks.value[mark.id];
  }

  const marksList = computed(() => Object.values(marks.value));

  return { marks: marksList, addMark, getMarkById, updateMark, deleteTag };
});
