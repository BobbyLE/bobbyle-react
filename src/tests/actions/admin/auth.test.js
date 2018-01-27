import { login, logout } from '../../../actions/admin/auth';

test('should generate login action object', () => {
  const uid = 'abc123';
  const displayName = 'Bobby Le';
  const email = 'name@mail.com';
  const photoURL = 'http://site.com/image.jpg';
  const action = login({uid, displayName, email, photoURL});
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    displayName,
    email,
    photoURL
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
