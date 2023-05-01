
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

divKL.append(ё);

let num1 = document.createElement('button');
num1.textContent = '1';
num1.classList.add('small-button');

divKL.append(num1);

let num2 = document.createElement('button');
num2.textContent = '2';
num2.classList.add('small-button');

divKL.append(num2);

let num3 = document.createElement('button');
num3.textContent = '3';
num3.classList.add('small-button');

divKL.append(num3);

let num4 = document.createElement('button');
num4.textContent = '4';
num4.classList.add('small-button');

divKL.append(num4);

let num5 = document.createElement('button');
num5.textContent = '5';
num5.classList.add('small-button');

divKL.append(num5);


let num6 = document.createElement('button');
num6.textContent = '6';
num6.classList.add('small-button');

divKL.append(num6);

let num7 = document.createElement('button');
num7.textContent = '7';
num7.classList.add('small-button');

divKL.append(num7);


let num8 = document.createElement('button');
num8.textContent = '8';
num8.classList.add('small-button');

divKL.append(num8);

let num9 = document.createElement('button');
num9.textContent = '9';
num9.classList.add('small-button');

divKL.append(num9);

let num0 = document.createElement('button');
num0.textContent = '0';
num0.classList.add('small-button');

divKL.append(num0);

let dash = document.createElement('button');
dash.textContent = '-';
dash.classList.add('small-button');

divKL.append(dash);

let evenly = document.createElement('button');
evenly.textContent = '=';
evenly.classList.add('small-button');

divKL.append(evenly);


let backspace = document.createElement('button');
backspace.textContent = 'Backspace';
backspace.classList.add('dig-button');
backspace.classList.add('black-button');

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

divKLTab.append(й);

let ц = document.createElement('button');
ц.textContent = 'ц';
ц.classList.add('small-button');

divKLTab.append(ц);

let у = document.createElement('button');
у.textContent = 'у';
у.classList.add('small-button');
divKLTab.append(у);


let к = document.createElement('button');
к.textContent = 'к';
к.classList.add('small-button');
divKLTab.append(к);

let е = document.createElement('button');
е.textContent = 'е';
е.classList.add('small-button');
divKLTab.append(е);

let н = document.createElement('button');
н.textContent = 'н';
н.classList.add('small-button');
divKLTab.append(н);


let г = document.createElement('button');
г.textContent = 'г';
г.classList.add('small-button');
divKLTab.append(г);

let ш = document.createElement('button');
ш.textContent = 'ш';
ш.classList.add('small-button');
divKLTab.append(ш);

let щ = document.createElement('button');
щ.textContent = 'щ';
щ.classList.add('small-button');
divKLTab.append(щ);

let з = document.createElement('button');
з.textContent = 'з';
з.classList.add('small-button');
divKLTab.append(з);

let х = document.createElement('button');
х.textContent = 'х';
х.classList.add('small-button');
divKLTab.append(х);

let ъ = document.createElement('button');
ъ.textContent = 'ъ';
ъ.classList.add('small-button');
divKLTab.append(ъ);

let Ampersand = document.createElement('button');
Ampersand.textContent = "|";
Ampersand.classList.add('small-button');
divKLTab.append(Ampersand);

let del = document.createElement('button');
del.textContent = 'Del';
del.classList.add('black-button');
del.classList.add('del');
divKLTab.append(del);



// ===================================Capslock++++++++++++++++++++++++++++++++++++++++


let divKLCL = document.createElement('div');
divKLCL.classList.add('keyboard-line');
virtualKeyboard.append(divKLCL);

let capsLock = document.createElement('button');
capsLock.textContent = 'CapsLock';
capsLock.classList.add('black-button');
capsLock.classList.add('dig-button');
divKLCL.append(capsLock);

let ф = document.createElement('button');
ф.textContent = 'ф';
ф.classList.add('small-button');
divKLCL.append(ф);

let ы = document.createElement('button');
ы.textContent = 'ы';
ы.classList.add('small-button');
divKLCL.append(ы);

let в = document.createElement('button');
в.textContent = 'в';
в.classList.add('small-button');
divKLCL.append(в);

let а = document.createElement('button');
а.textContent = 'а';
а.classList.add('small-button');
divKLCL.append(а);

let п = document.createElement('button');
п.textContent = 'п';
п.classList.add('small-button');
divKLCL.append(п);

let р = document.createElement('button');
р.textContent = 'р';
р.classList.add('small-button');
divKLCL.append(р);

let о = document.createElement('button');
о.textContent = 'о';
о.classList.add('small-button');
divKLCL.append(о);

let л = document.createElement('button');
л.textContent = 'л';
л.classList.add('small-button');
divKLCL.append(л);

let д = document.createElement('button');
д.textContent = 'д';
д.classList.add('small-button');
divKLCL.append(д);

let ж = document.createElement('button');
ж.textContent = 'ж';
ж.classList.add('small-button');
divKLCL.append(ж);

let э = document.createElement('button');
э.textContent = 'э';
э.classList.add('small-button');
divKLCL.append(э);

let enter = document.createElement('button');
enter.textContent = 'Enter';
enter.classList.add('middle-button');
enter.classList.add('black-button');
divKLCL.append(enter);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++Shift++++++++++++++++++++++++++++++++++++++++

let divKLShift = document.createElement('div');
divKLShift.classList.add('keyboard-line');
virtualKeyboard.append(divKLShift);

let shiftL = document.createElement('button');
shiftL.textContent = 'Shift';
shiftL.classList.add('black-button');
shiftL.classList.add('dig-button');
divKLShift.append(shiftL);

let я = document.createElement('button');
я.textContent = 'я';
я.classList.add('small-button');
divKLShift.append(я);

let ч = document.createElement('button');
ч.textContent = 'ч';
ч.classList.add('small-button');
divKLShift.append(ч);

let с = document.createElement('button');
с.textContent = 'с';
с.classList.add('small-button');
divKLShift.append(с);

let м = document.createElement('button');
м.textContent = 'м';
м.classList.add('small-button');
divKLShift.append(м);

let и = document.createElement('button');
и.textContent = 'и';
и.classList.add('small-button');
divKLShift.append(и);

let т = document.createElement('button');
т.textContent = 'т';
т.classList.add('small-button');
divKLShift.append(т);

let ь = document.createElement('button');
ь.textContent = 'ь';
ь.classList.add('small-button');
divKLShift.append(ь);


let б = document.createElement('button');
б.textContent = 'б';
б.classList.add('small-button');
divKLShift.append(б);

let ю = document.createElement('button');
ю.textContent = 'ю';
ю.classList.add('small-button');
divKLShift.append(ю);

let dot = document.createElement('button');
dot.textContent = '.';
dot.classList.add('small-button');
divKLShift.append(dot);

let up = document.createElement('button');
up.textContent = 'PgUp';
up.classList.add('small-button');
up.classList.add('black-button');
divKLShift.append(up);

let shiftR = document.createElement('button');
shiftR.textContent = 'Shift';
shiftR.classList.add('black-button');
shiftR.classList.add('middle-button');
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
left.textContent = 'Home';
left.classList.add('small-button');
left.classList.add('black-button');
divKLCtrl.append(left);

let pgDn = document.createElement('button');
pgDn.textContent = 'PgDn';
pgDn.classList.add('small-button');
pgDn.classList.add('black-button');
divKLCtrl.append(pgDn);

let end = document.createElement('button');
end.textContent = 'End';
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


document.addEventListener('keypress', (event) => {

  const btns = Array.from(document.querySelectorAll('button'));

  const match = btns.find(el => {
    return el.textContent.includes(event.key);
  });

  if (match) {
    match.classList.add('active');
    setTimeout(() => {
      match.classList.remove('active');
    }, 1000);
  }
});