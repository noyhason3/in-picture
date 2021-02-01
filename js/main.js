//Model:
var gNextNum;
var gModal = document.querySelector('.modal');
var gWinModal = document.querySelector('.win-modal');
var gBtn = document.querySelector('.play-again');
var gQuests = [
  { id: 1, opts: ['pineapple', 'apple', 'banana'], correctOptIndex: 1 },
  { id: 2, opts: ['mango', 'watermalon', 'lemon'], correctOptIndex: 0 },
  { id: 3, opts: [ 'malon', 'strawberry', 'grapes'], correctOptIndex: 2 },
];
//-----------------------------------//
var quests = createQuests();
function init() {
  gNextNum = 1;
  renderQuest(quests);
}

function createQuests() {
  var quests = [];
  for (var i = 0; i < gQuests.length; i++) {
    var quest = gQuests[i].opts;
    quests.push(quest);
  }
  return quests;
}

function renderQuest(quests) {
  // var strHtml = '';

  strHtml = `<tr>
      <th class="question">
      <img src="${gNextNum}.jpg" alt="fruit"></th>
      <span>what is in the picture?</span></tr>`;

  for (var j = 0; j < quests[gNextNum - 1].length; j++) {
    var optIdx = j;
    strHtml += `<tr class="quest">
        <td class="quest" onclick="checkAnswer(${optIdx})">${
      quests[gNextNum - 1][j]
    }</td></tr>`;

    var board = document.querySelector('tbody');
    board.innerHTML = strHtml;
  }
}

function checkAnswer(optIdx) {
  if (optIdx === gQuests[gNextNum - 1].correctOptIndex) {
    console.log(gNextNum);
    console.log(gQuests.length);
    if (gNextNum === gQuests.length) {
      gameOver();
      // gWinModal.style.opacity = '1';
      // gBtn.style.opacity = '1';
      // return;
    }
    gNextNum++;
    closeModal();
    renderQuest(quests);
  } else openModal();
}

function gameOver(){
  gWinModal.style.opacity = '1';
  gBtn.style.opacity = '1';
  return;
}


function playAgain() {
  gBtn.style.opacity = '0';
  gWinModal.style.opacity = '0';
  init();
}

function openModal() {
  gModal.style.opacity = '1';
  setTimeout(closeModal, 5000);
}

function closeModal() {
  var modal = document.querySelector('.modal');
  modal.style.opacity = '0';
}
