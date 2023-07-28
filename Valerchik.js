const printFunction = () => {

    const elements = document.querySelectorAll(".print")

    const print = (elem) => {
        const text = elem.textContent.replace(/\s+/g, ' ').trim();

        let count = 0;
        let newText = "";
        let interval;

        elem.textContent = "";

        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText;
            count++

            if (count === text.length) {
                clearInterval(interval)
            }
        }, 50)
    }

    elements.forEach((elem) => {
        print(elem);
    })
}

printFunction()