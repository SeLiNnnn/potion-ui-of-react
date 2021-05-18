/**
 *  程序出Bug了？
 *        ∩∩
 *      （´･ω･）
 *     ＿| ⊃／(＿＿_
 *    ／ └-(＿＿＿／
 *    ￣￣￣￣￣￣￣
 *   算了反正不是我写的
 *      ⊂⌒／ヽ-、＿
 *    ／⊂_/＿＿＿＿ ／
 *    ￣￣￣￣￣￣￣
 * @Author: SeLiNnnn
 * @Description: Codes create the world.
 * @Date: 2021-05-18 11:09
 **/

test('test-common-matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('test-to-be-true-or-false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})


test('test-number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('test-object', () => {
  // 值相同 而不是完全相同 这里不能用toBe
  expect({name: 'selin'}).toEqual({name: 'selin'})
})
