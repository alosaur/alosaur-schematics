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
    const options: IParseOptions = {
      name: 'foo'
    };
    const location: ILocation = parser.parse(options);
    expect(location.name).toEqual('foo');
    expect(location.path).toEqual('/');
  });
  it('should handle just the name', () => {
    const options: IParseOptions = {
      name: 'foo',
      path: 'bar'
    };
    const location: ILocation = parser.parse(options);
    expect(location.name).toEqual('foo');
    expect(location.path).toEqual('/bar');
  });
  it('should handle name has a path (sub-dir)', () => {
    const options: IParseOptions = {
      name: 'bar/foo',
      path: 'baz'
    };
    const location: ILocation = parser.parse(options);
    expect(location.name).toEqual('foo');
    expect(location.path).toEqual('/baz/bar');
  });

  it('should handle name has a higher path', () => {
    const options: IParseOptions = {
      name: '../foo',
      path: 'bar/baz'
    };
    const location: ILocation = parser.parse(options);
    expect(location.name).toEqual('foo');
    expect(location.path).toEqual('/bar');
  });

  it('should handle name has a higher path above root', () => {
    const options: IParseOptions = {
      name: '../../../foo',
      path: 'baz'
    };
    expect(() => {
      return parser.parse(options);
    }).toThrow();
  });
});
