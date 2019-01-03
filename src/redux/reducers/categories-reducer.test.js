import reducer from './categories-reducer';
import types from '../action-types';

const initialState = {
  categories: [],
  category: ''
};

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_CATEGORIES', () => {
    const categories = [1, 2, 3];
    expect(
      reducer(undefined, { type: types.SET_CATEGORIES, categories })
    ).toEqual({
      categories,
      category: ''
    });
  });

  it('should handle SET_ACTIVE_CATEGORY', () => {
    const category = 'hello';
    expect(
      reducer(undefined, { type: types.SET_ACTIVE_CATEGORY, category })
    ).toEqual({
      category,
      categories: []
    });
  });
});
