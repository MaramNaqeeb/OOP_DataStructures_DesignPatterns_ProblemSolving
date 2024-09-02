class Solution {

  public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int num : nums) {
      if (map.containsKey(num)) {
        map.put(num, map.get(num) + 1);
      } else {
        map.put(num, 1);
      }
    }

    PriorityQueue<Integer> minheap = new PriorityQueue<>((a, b) ->
      map.get(a) - map.get(b)
    );
    for (int num : map.keySet()) {
      minheap.offer(num);

      if (minheap.size() > k) {
        minheap.poll();
      }
    }
    int[] result = new int[k];
    for (int i = 0; i < k; i++) {
      result[i] = minheap.poll();
    }
    return result;
  }
}
