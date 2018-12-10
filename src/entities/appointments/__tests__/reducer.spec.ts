import reducer from '../reducer';

describe('entities/appointments reducer', () => {
  test('has correct initial state', () => {
    // @ts-ignore: undefined
    expect(reducer(undefined, { type: 'REDUX/@@INIT' })).toEqual({ byId: {} });
  });
});
