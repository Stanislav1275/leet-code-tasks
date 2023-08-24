import LinkedList from "./LinkedList";

(() => {
    const t = new LinkedList();
    t
        .prepend(1)
        .append(2)


    console.log(
        t.toArray()
    );
})();
