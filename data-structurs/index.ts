import LinkedList from "./LinkedList";

(() => {
    const t = new LinkedList();
    t.prepend(1);
    t.prepend(2);
    t.prepend(2);

    console.log(
        t.toArray()
    );
})();
