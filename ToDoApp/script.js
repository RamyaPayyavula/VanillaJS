class ToDoApp{
    constructor() {
        this.todoList = [];
        this.length = 0;
        this.status = '';
    }

    create() {
        const textArea = document.getElementById('text-area')
        if (textArea.value.length > 0) {
            const todo = document.createElement('div');
            const todoList = document.getElementById('todoList')
            const edit = document.createElement('img');
            todo.id = `todo${this.length}`
            todo.innerText = textArea.value;
            todo.contentEditable = false;
            todo.className = "todo-list-item"
            edit.src = "./edit.jpeg";
            edit.id = `edit-${todo.id}`;
            edit.onclick = (event) => {
                event.stopPropagation();
                this.edit(todo.id);
            }
            const remove = document.createElement('img')
            remove.src = './trash.jpg';
            remove.onclick = () => this.delete(todo.id);
            textArea.value = "";
            todo.appendChild(remove);
            todo.appendChild(edit)
            todoList.appendChild(todo);
            this.length++;                        
        }
    }
    edit(id) {
        const todo = document.getElementById(id);
        const edit = document.getElementById(`edit-${id}`);
        if (this.status === 'edit') this.status = 'save';
        else this.status = 'edit';
        if (this.status === 'edit') {
            todo.contentEditable = true;
            edit.src = "./save.png";
        }
        if (this.status === 'save') {
            todo.contentEditable = false;
            edit.src = "./edit.jpeg";
        }
    }
    
    delete(id) {
        const todo = document.getElementById(id);
        todo.remove();
    }
}

const todoApp = new ToDoApp();