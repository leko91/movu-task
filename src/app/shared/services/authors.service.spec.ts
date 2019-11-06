import { AuthorsService } from './authors.service';

describe('MyService', () => {
  let authorsService;

  beforeEach(() => {
    authorsService = new AuthorsService();
  });

  it('should return ten books', () => {
    expect(authorsService.getAuthors().value.length).toBeGreaterThan(2);
    expect(authorsService.getAuthors().value[0].name).toBe('William Shakespeare');
  });
});
