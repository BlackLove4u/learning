import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('editor'), {
    value: `print("Hello World")`,
    language: 'python',
    theme: 'vs-dark',
});
// Add more configurations as needed
// Example: Adding a button to run the code
document.getElementById('runButton').addEventListener('click', () => {
    const code = monaco.editor.getModels()[0].getValue();
    console.log('Running code:', code);
    // Here you can add functionality to run the code, e.g., send it to a server or execute it in a sandbox
});
// Example: Adding a button to clear the editor
document.getElementById('clearButton').addEventListener('click', () => {
    monaco.editor.getModels()[0].setValue('');
    console.log('Editor cleared');
});
// Example: Adding a button to change the theme
document.getElementById('themeButton').addEventListener('click', () => {
    const currentTheme = monaco.editor.getTheme();
    const newTheme = currentTheme === 'vs-dark' ? 'light' : 'vs-dark';
    monaco.editor.setTheme(newTheme);
    console.log('Theme changed to:', newTheme);
});
// Example: Adding a button to save the code
document.getElementById('saveButton').addEventListener('click', () => {
    const code = monaco.editor.getModels()[0].getValue();
    // Here you can implement functionality to save the code, e.g., send it to a server or save it locally
    console.log('Code saved:', code);
}
);
// Example: Adding a button to load code
document.getElementById('loadButton').addEventListener('click', () => { 
    const code = `print("Loaded Code")`; // Replace with actual code loading logic
    monaco.editor.getModels()[0].setValue(code);
    console.log('Code loaded:', code);
}
);
// Example: Adding a button to format the code
document.getElementById('formatButton').addEventListener('click', () => {
    const code = monaco.editor.getModels()[0].getValue();
    // Here you can implement functionality to format the code, e.g., using a formatter library
    console.log('Code formatted:', code);
    // For demonstration, we'll just log the code
});
// Example: Adding a button to show editor statistics
document.getElementById('statsButton').addEventListener('click', () => {
    const model = monaco.editor.getModels()[0];
    const stats = {
        lineCount: model.getLineCount(),
        characterCount: model.getValue().length,
    };
    console.log('Editor statistics:', stats);
    // Here you can display the statistics in the UI as needed    
});                                                                            