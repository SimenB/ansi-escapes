import test from 'ava';
import ansiEscapes, {cursorTo, setCwd, clearTerminal} from './index.js';

test('default export', t => {
	t.true(Object.keys(ansiEscapes).length > 0);
	t.is(typeof ansiEscapes.cursorTo, 'function');
	t.is(ansiEscapes.cursorTo(2, 2), '\u001B[3;3H');
});

test('named export(s)', t => {
	t.is(cursorTo, ansiEscapes.cursorTo);
	t.is(setCwd, ansiEscapes.setCwd);
});

test('clearTerminal', t => {
	t.is(typeof clearTerminal, 'string');
	t.true(clearTerminal.length > 0);
	// Should contain escape sequences
	t.true(clearTerminal.includes('\u001B'));
});
