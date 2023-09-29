const addTaskButton = document.getElementById("addTask");
addTaskButton.style.backgroundColor = "green";
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const checkbox = document.createElement('input');

addTaskButton.style.borderRadius = '10px';

// Função para mudar a cor do botão quando clicado

function changeButtonColor() {
    const taskText = taskInput.value.trim();
    console.log(taskText)
    if (taskText == "") {
        alert("Digite algo no campo de texto!")
    }
    else {
        addTaskButton.style.backgroundColor = changeButtonBehavior();
        addTaskButton.textContent = "Tarefa Adicionada!";
        const li = document.createElement('li');
        const span = document.createElement("span");
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        span.textContent = taskText;
        li.appendChild(span);
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    // Aplicar um estilo ao texto quando a checkbox é marcada
                    span.style.textDecoration = 'line-through';
                } else {
                    // Remover o estilo quando a checkbox é desmarcada
                    span.style.textDecoration = 'none';
                }
            });
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
// Adicione um ouvinte de enevnto ao botão

addTaskButton.addEventListener("click", changeButtonColor);

// Função para gerar código hexadecimal da cor aleatório e muda o texto do botão

function changeButtonBehavior() {
    const letters = "0123456789ABECDF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//COnfigurando o Enter
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        changeButtonColor();
    }
});
