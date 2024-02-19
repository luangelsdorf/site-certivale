export function getExcerpt(string, wordLimit = 24) {
  let cleanText = string.replace(/(<([^>]+)>)/gi, "").split(' ').slice(0, wordLimit).join(' ').replaceAll('&nbsp;', '');
  const lastChar = cleanText.at(-1);
  switch (lastChar) {
    case '.':
    case ',':
    case '!':
    case '?':
      cleanText = cleanText.slice(0, -1);
  }
  cleanText += '…';
  return cleanText;
}

export const hasCategory = (post, category = '') => !!post.attributes.categories.data.filter(cat => cat.attributes.slug === category).length;

export function toFormatted(text = '') {
  const phrases = text
    .replaceAll('/*', '$')
    .split('*');

  const markedPhrases = phrases.map((phrase, i) => {
    if (i % 2 === 1) {
      return <b key={i}>{phrase.replaceAll('$', '*')}</b>;
    } else {
      return <>{phrase.replaceAll('$', '*')}</>;
    }
  })

  return (
    <>
      {markedPhrases.map((p, i) => <span key={i}>{p}</span>)}
    </>
  );
}