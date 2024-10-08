const tds = document.querySelectorAll('td.main_cont, td.nam');
tds.forEach(td => {
  const textNode = td.childNodes[0];

  // �e�L�X�g�m�[�h�����݂��A���e�L�X�g����łȂ��ꍇ
  if (textNode && textNode.nodeType === Node.TEXT_NODE && textNode.nodeValue.trim()) {
    const words = textNode.nodeValue.split(' ');
    const newText = words.map(word => {
      const number = word.replace(/[^a-zA-Z0-9]/g, '');
      return number ? `<span class="number">${word}</span>` : word;
    }).join(' ');
    td.innerHTML = newText;
  }
});









// �S�Ă�tr�v�f���擾
const trs = document.querySelectorAll('table tr');

// tr�v�f��z��ɕϊ�
const trsArray = Array.from(trs);

// �z����V���b�t������֐�
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// �z����V���b�t��
shuffleArray(trsArray);

// �e�[�u���v�f���擾
const table = trs[0].parentNode; // �ŏ���tr�v�f�̐e�v�f���e�[�u���v�f�Ɖ���

// �V���b�t�����ꂽ����tr�v�f���e�[�u���ɒǉ�
trsArray.forEach(tr => {
  table.appendChild(tr);
});