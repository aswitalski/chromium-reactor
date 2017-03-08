describe('Template => get value', () => {

  const Template = Reactor.Template;

  const resolved = [
    [ undefined, null ],
    [ null, null ],
    [ '', '' ],
    [ [], null ],
    [ {}, null ],
    [ 5, '5' ],
    [ 'inherit', 'inherit' ],
    [ [100, 'px'], '100px' ],
    [ [12, 'r', 'em'], '12rem' ],
  ];

  resolved.forEach(([v1, v2, d1, d2]) => {
    it(`${d1 || JSON.stringify(v1)} === ${d2 || JSON.stringify(v2)}`, () => {
      assert.equal(Template.getAttributeValue(v1), v2);
    });
  });

  it('resolves transform value', () => {

    // given
    const transform = {
      translate: [10, 'px'],
      rotate: undefined,
      skew: null,
      scale: '',
      perspective: () => {},
      unknown: 666,

    };

    // when
    const value = Template.getStyleValue(transform, 'transform');

    // then
    assert.equal(value, 'translate(10px)');
  })

  it('resolves filter value', () => {

    // given
    const filter = {
      contrast: [10],
      hueRotate: '',
      opacity: undefined,
      sepia: null,
      blur: '4px',
      unknown: 666,
      saturate: () => {},
    };

    // when
    const value = Template.getStyleValue(filter, 'filter');

    // then
    assert.equal(value, 'contrast(10) blur(4px)');
  })

});
