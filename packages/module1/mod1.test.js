it('reads env var set in local (project) config', () => {
    expect(process.env.MOD1_TEST).toEqual('mod1 test');
});

it('reads env var set in root config', () => {
    expect(process.env.ROOT_TEST).toEqual('root test');
});
