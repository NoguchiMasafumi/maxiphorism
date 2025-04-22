const tds = document.querySelectorAll('td.main_cont, td.nam');
tds.forEach(td => {
  const textNode = td.childNodes[0];

  // テキストノードが存在し、かつテキストが空でない場合
  if (textNode && textNode.nodeType === Node.TEXT_NODE && textNode.nodeValue.trim()) {
    const originalText = textNode.nodeValue;
    const words = originalText.split(' ');

    if (td.classList.contains('main_cont')) {
      const newText = words.map(word => {
        const number = word.replace(/[^a-zA-Z0-9”]/g, '');
        return `<div class="cont">${word}</div>`;
      }).join(' ');
      td.innerHTML = newText;
    } else if (td.classList.contains('nam')) {
      const newText = words.map(word => {
        const number = word.replace(/[^a-zA-Z0-9”]/g, '');
        return `<div class="number">${word}</div>`;
      }).join(' ');
      td.innerHTML = newText;
    }
  }
});









// 全てのtr要素を取得
const trs = document.querySelectorAll('table tr');

// tr要素を配列に変換
const trsArray = Array.from(trs);

// 配列をシャッフルする関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 配列をシャッフル
shuffleArray(trsArray);

// テーブル要素を取得
const table = trs[0].parentNode; // 最初のtr要素の親要素がテーブル要素と仮定

// シャッフルされた順にtr要素をテーブルに追加
trsArray.forEach(tr => {
  table.appendChild(tr);
});
