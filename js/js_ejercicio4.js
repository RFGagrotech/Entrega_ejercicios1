const input = document.getElementById("search");
const list = document.getElementById("list");

//Creo una lista predefinida como la del ejemplo
const animals = ["Perro", "Gato", "Pez", "Castór", "Rata", "Ardilla", "Ornitorrinco"];

//Mostrar lista inicial
function renderList(items) {
    list.innerHTML = "";

    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    })
}

//mostrar lista inicial
renderList(animals);

// evento mientras escribe
input.addEventListener("input", () => {
    let text = input.ariaValueMax.trim().toLowerCase();

    let filtered = animals.filter(animal =>
        animal.toLowerCase().includes(text)
    );

    renderList(filtered); 
});