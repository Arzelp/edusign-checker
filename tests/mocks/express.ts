const res = {} as unknown as Response;
res.json = jest.fn();
res.status = jest.fn(() => res)