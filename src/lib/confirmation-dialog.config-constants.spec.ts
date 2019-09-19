import { Messages } from './confirmation-dialog.config-constants';

describe(`Confirmation Dialog Constants`, () => {

  const constants = Messages;

  it(`should exist constants EN`, () => {
    expect(constants['en']).not.toBeUndefined();
  });

  it(`should exist constants ES`, () => {
    expect(constants['es']).not.toBeUndefined();
  });

});
