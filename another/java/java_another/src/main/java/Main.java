import tinkof_05_09_2023.z2.Solutions;

public class Main {
    public static void main(String[] args) {
        int n = 5;
        int m = 6;
        int[][] roads = {{1, 2, 8}, {2, 3, 6}, {2, 3, 2}, {3, 1, 4}, {5, 4, 1}, {4, 5, 8}};
        int result = Solutions.z5(n, m, roads);
        System.out.println(result); // О
    }
}
