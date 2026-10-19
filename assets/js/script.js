const loadPartial = async (target) => {
  const path = target.dataset.include;
  if (!path) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`${response.status}:${path}`);
    target.innerHTML = await response.text();
  }
  catch (error){
    console.error('共通パーツの読み込みに失敗しました',error);
  }
};

const targets = document.querySelectorAll('[data-include]');
await Promise.all([...targets].map(loadPartial));