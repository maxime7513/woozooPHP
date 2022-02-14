var animatedSecuriteDetail = false; // POUR QUE LA FONCTION S'EXECUTE QUE 1 FOIS
function annotationSecurite() {
  const annotate = RoughNotation.annotate;
  const annotationGroup = RoughNotation.annotationGroup;
  const $ = (t) => document.querySelector(t);
  
  {
    // const a1 = annotate($('#course-securite h4'), { type: 'highlight', color: '#9be8ff' });
    const a2 = annotate($('#scelle'), { type: 'box', color: 'var(--blue-secondary)', padding: [1, 3] });
    const a3 = annotate($('#qrcode'), { type: 'box', color: 'var(--blue-secondary)', padding: [1, 3] });
    const a4 = annotate($('#code4'), { type: 'box', color: '#0eb3b7', padding: [1, 3] });
    const a5 = annotate($('#remp'), { type: 'underline', color: 'var(--blue-secondary)', padding: 2 });
    const a6 = annotate($('#dixm'), { type: 'circle', color: '#0eb3b7', padding: 8, iteration: 1, animationDuration: 1000});
    const ag = annotationGroup([a2, a3, a4, a5, a6]);
    ag.show();
  }
  // console.log('animation securite effectué');
  animatedSecuriteDetail = true; // LA FONCTION EST EFFECTUER ET NE PEUT PAS ETRE RELANCER
};