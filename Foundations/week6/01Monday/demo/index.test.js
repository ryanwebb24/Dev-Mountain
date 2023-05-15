 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }
describe('formatTitle', () => {
  test('formatTitle output has same charater length as input', () => {
    expect(formatTitle(testData.title)).toHaveLength(testData.title.length)
    let testStr = "hello world"
    expect(formatTitle(testStr)).toHaveLength(testStr.length)
  })

  test('formatTitle is type string', () => {
    expect(typeof formatTitle(testData.title)).toBe('string')
  })
})