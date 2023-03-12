const {arrayContainsObject, stringContainsWord}= require ('./arrayContainsObject')

test('arrayContainsObject', () => {
    const arr = [
      { id: 1, name: 'Anhelina' },
      { id: 2, name: 'Kamilla' },
      { id: 3, name: 'Amaia' },
    ];
    
    expect(arrayContainsObject(arr, { id: 2, name: 'Kamilla' })).toBe(true);
    expect(arrayContainsObject(arr, { id: 4, name: 'Alice' })).toBe(false);
  });

test('stringContainsWord', () => {
    const str = 'I am a pretty girl';
    
    expect(stringContainsWord(str, 'girl')).toBe(true);
    expect(stringContainsWord(str, 'boy')).toBe(false);
  });
  