import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const terminal = new Terminal();
terminal.open(document.getElementById('terminal'));
terminal.write('Welcome to your terminal demo\n$ ');
