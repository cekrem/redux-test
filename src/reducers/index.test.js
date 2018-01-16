/* eslint-env jest */
import rootReducer from './index'

let state = {}

describe('rootReducer', () => {
  beforeEach(() => {
    state = {}
  })

  it('returns proper default state', () => {
    expect(rootReducer(state, {}))
    .toEqual({
      list: []
    })
  })

  it('can add entry to list', () => {
    expect((rootReducer(state, { type: 'ADD' })).list.length === 1)
    .toBeTruthy()
  })

  it('can clear list entries', () => {
    const stateWithList = {
      list: [
        'foo',
        'boo'
      ]
    }
    expect(rootReducer(stateWithList, { type: 'CLEAR' }))
    .toEqual({
      list: []
    })
  })
})
