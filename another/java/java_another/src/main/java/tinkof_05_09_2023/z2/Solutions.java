package tinkof_05_09_2023.z2;

import java.util.*;


public class Solutions {
    public static class RoadState {
        int u, w;

        public RoadState(int u, int w) {
            this.u = u;
            this.w = w;
        }
    }




    public static int z1(int s, int... prices) {
        int max = 0;
        for (int i = 0; i < prices.length; i++) {
            int price = prices[i];
            if (max > price && price <= s) {
                max = price;
            }
        }
        return max;
    }

    public static int z2(String s) {

        String sheriff = "sheriff";
        if (s.length() < sheriff.length()) {
            System.out.println(2);
            return 0;
        }

        Map<Character, Integer> dictionary = new HashMap<>();
        dictionary.put('s', 1);
        dictionary.put('h', 1);
        dictionary.put('e', 1);
        dictionary.put('r', 1);
        dictionary.put('i', 1);
        dictionary.put('f', 2);
        Map<Character, Integer> letters = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char sym = s.charAt(i);
            if (dictionary.containsKey(sym)) {
                letters.put(sym, letters.getOrDefault(sym, 0) + 1);
            }
        }
        if (letters.size() != dictionary.size()) {
            return 0;
        }
        int min = Integer.MAX_VALUE;
        for (Character sym : letters.keySet()) {
            int val = letters.get(sym);
            int newVal = val / dictionary.get(sym);
            if (min > newVal) {
                min = newVal;
            }
        }
        return min == Integer.MAX_VALUE ? 0 : min;
    }

    public static boolean z3(int[] a, int[] b) {
        int n = a.length;
        int start = 0;
        int end = n - 1;
        while (start <= end && a[start] == b[start]) {
            start++;
        }
        while (end >= start && a[end] == b[end]) {
            end--;
        }
        if (start > end) {
            return true;
        }
        int[] subA = Arrays.copyOfRange(a, start, end + 1);
        int[] subB = Arrays.copyOfRange(b, start, end + 1);
        Arrays.sort(subA);
        return Arrays.equals(subA, subB);
    }

    public static void z4(int n, int[] denominations) {
        int nSum = n;
        Arrays.sort(denominations); // Сортируем номиналы по возрастанию
        int[] count = new int[denominations.length]; // Массив для хранения количества купюр каждого номинала

        // Начинаем с самой большой купюры
        int index = denominations.length - 1;

        while (nSum > 0 && index >= 0) {
            int currentDenomination = denominations[index];
            int numberOfNotesToWithdraw = Math.min(nSum / currentDenomination, 2);
            count[index] = numberOfNotesToWithdraw;
            nSum -= numberOfNotesToWithdraw * currentDenomination;
            index--;
        }

        if (nSum == 0) {
            int countCup = 0;
            StringBuilder s = new StringBuilder();
            for (int i = 0; i < denominations.length; i++) {
                for (int j = 0; j < count[i]; j++) {
                    countCup++;
                    s.append(denominations[i]);
                    if (!(i == denominations.length - 1 && j == count[i] - 1)) {
                        s.append(" ");
                    }
                }
            }
            System.out.println(countCup);
            System.out.println(s);
        } else {
            System.out.println(-1);
        }
    }


    public static int z5(int n, int m, int[][] roads) {
        ArrayList<ArrayList<RoadState>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        int maxW = 0;
        for (int i = 0; i < m; i++) {
            int u = roads[i][0] - 1;
            int v = roads[i][1] - 1;
            int w = roads[i][2];
            graph.get(u).add(new RoadState(v, w));
            graph.get(v).add(new RoadState(u, w));
            maxW = Math.max(maxW, w);
        }

        int left = 0;
        int right = maxW;
        int ans = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (check(n, graph, mid)) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return ans;
    }

    public static boolean check(int n, ArrayList<ArrayList<RoadState>> graph, int limit) {
        boolean[] visited = new boolean[n];
        int components = 0;

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                components++;

                Queue<Integer> queue = new LinkedList<>();
                queue.add(i);
                visited[i] = true;

                while (!queue.isEmpty()) {
                    int u = queue.poll();

                    for (RoadState road : graph.get(u)) {
                        if (!visited[road.u] && road.w <= limit) {
                            queue.add(road.u);
                            visited[road.u] = true;
                        }
                    }
                }
            }
        }

        return components == 1;
    }





    public static void main(String[] args) {
    }
}


