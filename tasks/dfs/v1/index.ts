class GraphNode {
    name
    visited
    color
}

enum Status {
    WHITE,//не вошли
    GRAY,//только вошли/в процессе
    BLACK//ушли/посещенная
}

function dfs(): void {

}

class User {
    static instance: User | null;
    name: string;

    private constructor(name: string) {
        this.name = name;
    }

    public static create(name: string) {
        if (this.instance) {
            return this;
        } else {
            return new User(name);
        }
    }

    public display(): void {
        console.log(1);
    }
}

const u = User.create("u");
const u1 = User.create("u1");
console.log(u === u1)
