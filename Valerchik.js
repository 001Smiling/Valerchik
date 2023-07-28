const printFunction = () => {

    const elements = document.querySelectorAll(".print")

    const print = (elem, index) => {
        const text = elem.textContent.replace(/\s+/g, ' ').trim();

        let count = 0;
        let newText = "";
        let interval;

        elem.textContent = "";
        elem.classList.remove("hidden");

        interval = setInterval(() => {
            newText += text[count];
            elem.textContent = newText;
            count++

            if (count === text.length) {
                clearInterval(interval);

                if (index + 1 < elements.length) {
                    for (let i = index + 1; i < elements.length; i++) {
                        elements[i].classList.add("hidden");
                    }
                    console.log(elements);
                    print(elements[index + 1], index + 1);
                }
            }
        }, 70);
    };

    if (elements.length > 0) {
        for (let i = 1; i < elements.length; i++) {
            elements[i].classList.add("hidden");
        }
        print(elements[0], 0);
    }
};

printFunction()