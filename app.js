let isCaps = false; // если true - текст в upper case
let isEnLang = false;
let isShift = false;
let section = document.createElement('section');
section.classList.add('main');

document.body.append(section);

let div = document.createElement('div');
div.classList.add('main__title');

section.append(div);

let h1 = document.createElement('h1');
h1.textContent = 'RSS Виртуальная клавиатура';
h1.classList.add('h1');

div.append(h1);

let input = document.createElement('textarea');
input.setAttribute('id', 'inputBox');
input.setAttribute('name', 'input-box');
input.setAttribute('cols', '95');
input.setAttribute('rows', '10');

div.append(input);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let virtualKeyboard = document.createElement('div');
virtualKeyboard.classList.add('virtual-keyboard');

section.append(virtualKeyboard);

let divKL = document.createElement('div');
divKL.classList.add('keyboard-line');
virtualKeyboard.append(divKL);

let ё = document.createElement('button');
ё.textContent = 'ё';
ё.classList.add('small-button');
ё.setAttribute('type', 'button');
ё.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(ё);

let num1 = document.createElement('button');
num1.textContent = '1';
num1.classList.add('small-button');
num1.setAttribute('type', 'button');
num1.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num1);

let num2 = document.createElement('button');
num2.textContent = '2';
num2.classList.add('small-button');
num2.setAttribute('type', 'button');
num2.setAttribute('onclick', "addSymbolToInput(this);");


divKL.append(num2);

let num3 = document.createElement('button');
num3.textContent = '3';
num3.classList.add('small-button');
num3.setAttribute('type', 'button');
num3.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num3);

let num4 = document.createElement('button');
num4.textContent = '4';
num4.classList.add('small-button');
num4.setAttribute('type', 'button');
num4.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num4);

let num5 = document.createElement('button');
num5.textContent = '5';
num5.classList.add('small-button');
num5.setAttribute('type', 'button');
num5.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num5);


let num6 = document.createElement('button');
num6.textContent = '6';
num6.classList.add('small-button');
num6.setAttribute('type', 'button');
num6.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num6);

let num7 = document.createElement('button');
num7.textContent = '7';
num7.classList.add('small-button');
num7.setAttribute('type', 'button');
num7.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num7);


let num8 = document.createElement('button');
num8.textContent = '8';
num8.classList.add('small-button');
num8.setAttribute('type', 'button');
num8.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num8);

let num9 = document.createElement('button');
num9.textContent = '9';
num9.classList.add('small-button');
num9.setAttribute('type', 'button');
num9.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num9);

let num0 = document.createElement('button');
num0.textContent = '0';
num0.classList.add('small-button');
num0.setAttribute('type', 'button');
num0.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(num0);

let dash = document.createElement('button');
dash.textContent = '-';
dash.classList.add('small-button');
dash.setAttribute('type', 'button');
dash.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(dash);

let evenly = document.createElement('button');
evenly.textContent = '=';
evenly.classList.add('small-button');
evenly.setAttribute('type', 'button');
evenly.setAttribute('onclick', "addSymbolToInput(this);");

divKL.append(evenly);


let backspace = document.createElement('button');
backspace.textContent = 'Backspace';
backspace.classList.add('dig-button');
backspace.classList.add('black-button');
backspace.setAttribute('type', 'button');
backspace.setAttribute('onclick', "removeSymbol(this);");
divKL.append(backspace);

// ____________________________tab_________________________________________________

let divKLTab = document.createElement('div');
divKLTab.classList.add('keyboard-line');
virtualKeyboard.append(divKLTab);


let tab = document.createElement('button');
tab.textContent = 'Tab';
tab.classList.add('tab');
tab.classList.add('black-button');

divKLTab.append(tab);

let й = document.createElement('button');
й.textContent = 'й';
й.classList.add('small-button');
й.setAttribute('type', 'button');
й.setAttribute('onclick', "addSymbolToInput(this);");

divKLTab.append(й);

let ц = document.createElement('button');
ц.textContent = 'ц';
ц.classList.add('small-button');
ц.setAttribute('type', 'button');
ц.setAttribute('onclick', "addSymbolToInput(this);");

divKLTab.append(ц);

let у = document.createElement('button');
у.textContent = 'у';
у.classList.add('small-button');
у.setAttribute('type', 'button');
у.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(у);


let к = document.createElement('button');
к.textContent = 'к';
к.classList.add('small-button');
к.setAttribute('type', 'button');
к.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(к);

let е = document.createElement('button');
е.textContent = 'е';
е.classList.add('small-button');
е.setAttribute('type', 'button');
е.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(е);

let н = document.createElement('button');
н.textContent = 'н';
н.classList.add('small-button');
н.setAttribute('type', 'button');
н.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(н);


let г = document.createElement('button');
г.textContent = 'г';
г.classList.add('small-button');
г.setAttribute('type', 'button');
г.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(г);

let ш = document.createElement('button');
ш.textContent = 'ш';
ш.classList.add('small-button');
ш.setAttribute('type', 'button');
ш.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(ш);

let щ = document.createElement('button');
щ.textContent = 'щ';
щ.classList.add('small-button');
щ.setAttribute('type', 'button');
щ.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(щ);

let з = document.createElement('button');
з.textContent = 'з';
з.classList.add('small-button');
з.setAttribute('type', 'button');
з.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(з);

let х = document.createElement('button');
х.textContent = 'х';
х.classList.add('small-button');
х.setAttribute('type', 'button');
х.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(х);

let ъ = document.createElement('button');
ъ.textContent = 'ъ';
ъ.classList.add('small-button');
ъ.setAttribute('type', 'button');
ъ.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(ъ);

let slash = document.createElement('button');
slash.textContent = '|';
slash.classList.add('small-button');
slash.setAttribute('type', 'button');
slash.setAttribute('onclick', "addSymbolToInput(this);");
divKLTab.append(slash);

let del = document.createElement('button');
del.textContent = 'Del';
del.classList.add('black-button');
del.classList.add('del');
del.setAttribute('onclick', "handleDelete(this);");
divKLTab.append(del);



// ===================================Capslock++++++++++++++++++++++++++++++++++++++++


let divKLCL = document.createElement('div');
divKLCL.classList.add('keyboard-line');
virtualKeyboard.append(divKLCL);

let capsLock = document.createElement('button');
capsLock.textContent = 'CapsLock';
capsLock.classList.add('black-button');
capsLock.classList.add('dig-button');
capsLock.setAttribute('onclick', 'toggleCaps();');
divKLCL.append(capsLock);

let ф = document.createElement('button');
ф.textContent = 'ф';
ф.classList.add('small-button');
ф.setAttribute('type', 'button');
ф.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(ф);

let ы = document.createElement('button');
ы.textContent = 'ы';
ы.classList.add('small-button');
ы.setAttribute('type', 'button');
ы.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(ы);

let в = document.createElement('button');
в.textContent = 'в';
в.classList.add('small-button');
в.setAttribute('type', 'button');
в.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(в);

let а = document.createElement('button');
а.textContent = 'а';
а.classList.add('small-button');
а.setAttribute('type', 'button');
а.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(а);

let п = document.createElement('button');
п.textContent = 'п';
п.classList.add('small-button');
п.setAttribute('type', 'button');
п.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(п);

let р = document.createElement('button');
р.textContent = 'р';
р.classList.add('small-button');
р.setAttribute('type', 'button');
р.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(р);

let о = document.createElement('button');
о.textContent = 'о';
о.classList.add('small-button');
о.setAttribute('type', 'button');
о.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(о);

let л = document.createElement('button');
л.textContent = 'л';
л.classList.add('small-button');
л.setAttribute('type', 'button');
л.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(л);

let д = document.createElement('button');
д.textContent = 'д';
д.classList.add('small-button');
д.setAttribute('type', 'button');
д.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(д);

let ж = document.createElement('button');
ж.textContent = 'ж';
ж.classList.add('small-button');
ж.setAttribute('type', 'button');
ж.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(ж);

let э = document.createElement('button');
э.textContent = 'э';
э.classList.add('small-button');
э.setAttribute('type', 'button');
э.setAttribute('onclick', "addSymbolToInput(this);");
divKLCL.append(э);

let enter = document.createElement('button');
enter.textContent = 'Enter';
enter.classList.add('middle-button');
enter.classList.add('black-button');
enter.setAttribute('type', 'button');
enter.setAttribute('onclick', "handleClick(this);");
divKLCL.append(enter);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++Shift++++++++++++++++++++++++++++++++++++++++

let divKLShift = document.createElement('div');
divKLShift.classList.add('keyboard-line');
virtualKeyboard.append(divKLShift);

let shiftL = document.createElement('button');
shiftL.textContent = 'Shift';
shiftL.classList.add('black-button');
shiftL.classList.add('dig-button');
shiftL.setAttribute('onclick', "toggleShift();");
divKLShift.append(shiftL);

let я = document.createElement('button');
я.textContent = 'я';
я.classList.add('small-button');
я.setAttribute('type', 'button');
я.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(я);

let ч = document.createElement('button');
ч.textContent = 'ч';
ч.classList.add('small-button');
ч.setAttribute('type', 'button');
ч.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(ч);

let с = document.createElement('button');
с.textContent = 'с';
с.classList.add('small-button');
с.setAttribute('type', 'button');
с.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(с);

let м = document.createElement('button');
м.textContent = 'м';
м.classList.add('small-button');
м.setAttribute('type', 'button');
м.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(м);

let и = document.createElement('button');
и.textContent = 'и';
и.classList.add('small-button');
и.setAttribute('type', 'button');
и.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(и);

let т = document.createElement('button');
т.textContent = 'т';
т.classList.add('small-button');
т.setAttribute('type', 'button');
т.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(т);

let ь = document.createElement('button');
ь.textContent = 'ь';
ь.classList.add('small-button');
ь.setAttribute('type', 'button');
ь.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(ь);


let б = document.createElement('button');
б.textContent = 'б';
б.classList.add('small-button');
б.setAttribute('type', 'button');
б.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(б);

let ю = document.createElement('button');
ю.textContent = 'ю';
ю.classList.add('small-button');
ю.setAttribute('type', 'button');
ю.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(ю);

let dot = document.createElement('button');
dot.textContent = '.';
dot.classList.add('small-button');
dot.setAttribute('type', 'button');
dot.setAttribute('onclick', "addSymbolToInput(this);");
divKLShift.append(dot);

let up = document.createElement('button');
up.textContent = '▲';
up.classList.add('small-button');
up.classList.add('black-button');
divKLShift.append(up);

let shiftR = document.createElement('button');
shiftR.textContent = 'Shift';
shiftR.classList.add('black-button');
shiftR.classList.add('middle-button');
shiftR.setAttribute('onclick', "toggleShift();");
divKLShift.append(shiftR);



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\Ctrl\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let divKLCtrl = document.createElement('div');
divKLCtrl.classList.add('keyboard-line');
virtualKeyboard.append(divKLCtrl);

let ctrlL = document.createElement('button');
ctrlL.textContent = 'Ctrl';
ctrlL.classList.add('black-button');
ctrlL.classList.add('small-button');
divKLCtrl.append(ctrlL);

let win = document.createElement('button');
win.textContent = 'Win';
win.classList.add('black-button');
win.classList.add('small-button');
divKLCtrl.append(win);

let altL = document.createElement('button');
altL.textContent = 'Alt';
altL.classList.add('black-button');
altL.classList.add('small-button');
divKLCtrl.append(altL);

let space = document.createElement('button');
space.textContent = 'Space';
space.classList.add('black-button');
space.classList.add('space-button');
divKLCtrl.append(space);

let altR = document.createElement('button');
altR.textContent = 'Alt';
altR.classList.add('black-button');
altR.classList.add('small-button');
divKLCtrl.append(altR);

let left = document.createElement('button');
left.textContent = '◄';
left.classList.add('small-button');
left.classList.add('black-button');
divKLCtrl.append(left);

let pgDn = document.createElement('button');
pgDn.textContent = '▼';
pgDn.classList.add('small-button');
pgDn.classList.add('black-button');
divKLCtrl.append(pgDn);

let end = document.createElement('button');
end.textContent = '►';
end.classList.add('small-button');
end.classList.add('black-button');
end.setAttribute('type', 'button');
divKLCtrl.append(end);

let ctrlR = document.createElement('button');
ctrlR.textContent = 'Ctrl';
ctrlR.classList.add('black-button');
ctrlR.classList.add('small-button');
divKLCtrl.append(ctrlR);


let paragraphFirst = document.createElement('p');
paragraphFirst.textContent = 'Клавиатура создана в операционной системе Windows';
section.append(paragraphFirst);

let paragraphSecond = document.createElement('p');
paragraphSecond.textContent = 'Для переключения языка комбинация: лeвыe shift + alt';
section.append(paragraphSecond);

input.focus();

window.addEventListener('load', () => {
  const lang = localStorage.getItem('lang');
  if (lang) {
    isEnLang = lang === 'en';
    changeLetters();
  } else {
    localStorage.setItem('lang', isEnLang ? 'en' : 'ru');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey) {
    changeLanguages();
  } else if (event.shiftKey && !event.altKey) {
    toggleShift();
  } else if (event.ctrlKey) {
    hightlightBtn(ctrlL);
    hightlightBtn(ctrlR);
  }

  switch (event.code) {
    case 'Delete': hightlightBtn(del); break;
    case 'Space': hightlightBtn(space); break;
    case 'Backspace': hightlightBtn(backspace); break;
    case 'AltRight': hightlightBtn(altR); break;
    case 'AltLeft': hightlightBtn(altL); break;
    case 'ArrowUp': hightlightBtn(up); break;
    case 'ArrowDown': hightlightBtn(pgDn); break;
    case 'ArrowRight': hightlightBtn(end); break;
    case 'ArrowLeft': hightlightBtn(left); break;
    case 'MetaLeft': hightlightBtn(win); break;
    default: {
      const btns = Array.from(document.querySelectorAll('button'));

      const match = btns.find(el => {
        return el.textContent.includes(event.key);
      });

      if (match) {
        if (event.code === 'CapsLock') {
          toggleCaps();
        } else {
          hightlightBtn(match);
        }
      }
    }
  }
});

const addSymbolToInput = (btn) => {
  input.value = input.value + (isCaps || isShift ? btn.textContent.toUpperCase() : btn.textContent);

  hightlightBtn(btn);
};

const handleDelete = (btn) => {
  const event = new KeyboardEvent('keydown', { code: 'Delete' });
  btn.dispatchEvent(event);
}

const handleClick = (btn) => {
  let val = input.value;
  input.value =
    val.substring(0, input.selectionStart) +
    '\n' +
    val.substring(input.selectionEnd, val.length);

  hightlightBtn(btn);
};

const removeSymbol = (btn) => {
  let val = input.value;
  input.value = val.slice(0, -1);

  hightlightBtn(btn);

};

const hightlightBtn = (btn) => {
  input.focus();
  btn.classList.add('active');
  setTimeout(() => {
    btn.classList.remove('active');
  }, 300);
};

const toggleCaps = () => {
  isCaps = !isCaps;
  hightlightAlwaysBtn(capsLock);
};

const hightlightAlwaysBtn = (btn) => {
  input.focus();
  btn.classList.toggle('active');
};

const changeLanguages = () => {
  isEnLang = !isEnLang;
  localStorage.setItem('lang', isEnLang ? 'en' : 'ru');

  changeLetters();

  hightlightBtn(shiftL);
  hightlightBtn(altL);
};

const changeLetters = () => {
  ё.textContent = isEnLang ? '`' : 'ё';
  й.textContent = isEnLang ? 'q' : 'й';
  ц.textContent = isEnLang ? 'w' : 'ц';
  у.textContent = isEnLang ? 'e' : 'у';
  к.textContent = isEnLang ? 'r' : 'к';
  е.textContent = isEnLang ? 't' : 'е';
  н.textContent = isEnLang ? 'y' : 'н';
  г.textContent = isEnLang ? 'u' : 'г';
  ш.textContent = isEnLang ? 'i' : 'ш';
  щ.textContent = isEnLang ? 'o' : 'щ';
  з.textContent = isEnLang ? 'p' : 'з';
  х.textContent = isEnLang ? '[' : 'х';
  ъ.textContent = isEnLang ? ']' : 'ъ';

  ф.textContent = isEnLang ? 'a' : 'ф';
  ы.textContent = isEnLang ? 's' : 'ы';
  в.textContent = isEnLang ? 'd' : 'в';
  а.textContent = isEnLang ? 'f' : 'а';
  п.textContent = isEnLang ? 'g' : 'п';
  р.textContent = isEnLang ? 'h' : 'р';
  о.textContent = isEnLang ? 'j' : 'о';
  л.textContent = isEnLang ? 'k' : 'л';
  д.textContent = isEnLang ? 'l' : 'д';
  ж.textContent = isEnLang ? ';' : 'ж';
  э.textContent = isEnLang ? '\'' : 'э';

  я.textContent = isEnLang ? 'z' : 'я';
  ч.textContent = isEnLang ? 'x' : 'ч';
  с.textContent = isEnLang ? 'c' : 'с';
  м.textContent = isEnLang ? 'v' : 'м';
  и.textContent = isEnLang ? 'b' : 'и';
  т.textContent = isEnLang ? 'n' : 'т';
  ь.textContent = isEnLang ? 'm' : 'ь';
  б.textContent = isEnLang ? ',' : 'б';
  ю.textContent = isEnLang ? '.' : 'ю';
  dot.textContent = isEnLang ? '/' : '.';
};

const toggleShift = () => {
  isShift = !isShift;
  hightlightAlwaysBtn(shiftL);
  hightlightAlwaysBtn(shiftR);

  if (isEnLang) {
    // for En language
    ё.textContent = isShift ? '~' : '`';
    num2.textContent = isShift ? '@' : '2';
    num3.textContent = isShift ? '#' : '3';
    num4.textContent = isShift ? '$' : '4';
    num6.textContent = isShift ? '^' : '6';
    num7.textContent = isShift ? '&' : '7';
  } else {
    // for rus language
    num1.textContent = isShift ? '!' : '1';
    num2.textContent = isShift ? '"' : '2';
    num3.textContent = isShift ? '№' : '3';
    num4.textContent = isShift ? ';' : '4';
    num5.textContent = isShift ? '%' : '5';
    num6.textContent = isShift ? ':' : '6';
    num7.textContent = isShift ? '?' : '7';
  }

  num8.textContent = isShift ? '*' : '8';
  num9.textContent = isShift ? '(' : '9';
  num0.textContent = isShift ? ')' : '0';
  dash.textContent = isShift ? '_' : '-';
  evenly.textContent = isShift ? '+' : '=';

  slash.textContent = isShift ? '/' : '|';
  dot.textContent = isShift ? ',' : '.';
};

