it('reads env var set in local (project) config', () => {
    expect(process.env.MOD2_CONFIG_TEST).toEqual('mod2 test');
});

it('reads env var set in root config', () => {
    expect(process.env.ROOT_CONFIG_TEST).toEqual('root test');
});
