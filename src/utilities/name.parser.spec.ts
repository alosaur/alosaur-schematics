import {
  ILocation,
  NameParser,
  IParseOptions
} from './name.parser';

describe('Name Parser', () => {
  let parser: NameParser;

  beforeAll(() => {
    return parser = new NameParser();
  });

  it('should handle no path', () => {
    expect.assertions(2);

    const options: IParseOptions = {
      name: 'foo'
    };
    const location: ILocation = parser.parse(options);

    expect(location.name).toStrictEqual('foo');
    expect(location.path).toStrictEqual('/');
  });

  it('should handle just the name', () => {
    expect.assertions(2);

    const options: IParseOptions = {
      name: 'foo',
      path: 'bar'
    };
    const location: ILocation = parser.parse(options);

    expect(location.name).toStrictEqual('foo');
    expect(location.path).toStrictEqual('/bar');
  });

  it('should handle name has a path (sub-dir)', () => {
    expect.assertions(2);

    const options: IParseOptions = {
      name: 'bar/foo',
      path: 'baz'
    };
    const location: ILocation = parser.parse(options);

    expect(location.name).toStrictEqual('foo');
    expect(location.path).toStrictEqual('/baz/bar');
  });

  it('should handle name has a higher path', () => {
    expect.assertions(2);

    const options: IParseOptions = {
      name: '../foo',
      path: 'bar/baz'
    };
    const location: ILocation = parser.parse(options);

    expect(location.name).toStrictEqual('foo');
    expect(location.path).toStrictEqual('/bar');
  });

  it('should handle name has a higher path above root', () => {
    expect.assertions(1);

    const options: IParseOptions = {
      name: '../../../foo',
      path: 'baz'
    };

    expect(() => {
      return parser.parse(options);
    }).toThrow();
  });
});
