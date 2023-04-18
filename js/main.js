function clickToEdit(){
    const editorContainer = document.getElementById('editor-container');
    editorContainer.style.display = 'block';

    if (event.target === editorContainer) {
        editorContainer.style.display = 'none';
    }
}   