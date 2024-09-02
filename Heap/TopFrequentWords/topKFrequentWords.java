import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {

  public List<String> topKFrequent(String[] words, int k) {
    /* Here I count the frequency of each word using Hashmap
    The map has keys as strings and the frequency of the words as integers */
    Map<String, Integer> map = new HashMap<>();
    // I traverse the array and check the frequency of words
    for (int i = 0; i < words.length; i++) {
      //if the word exists in the map, I incerement its frequency by 1
      if (map.containsKey(words[i])) {
        map.put(words[i], map.get(words[i]) + 1);
      } else {
        //if the word does not exist in the map, I set its frequency to 1
        map.put(words[i], 1);
      }
    }
    //I create a minheap using a priority queue to track the top frequent words.
    PriorityQueue<String> minheap = new PriorityQueue<>((a, b) ->
      /* 'a' and 'b' are strings in the PriorityQueue

      if the frequency of 'a' and 'b' are different, 
      I subtract the frequency of 'a' from the frequency of 'b' 
      to get the difference between their frequencies to get them in descending order

      if 'a' and 'b' have the same frequency, I use the built in function compareTo() to order the strings alphabetically */
      map.get(b) != map.get(a) ? map.get(b) - map.get(a) : a.compareTo(b)
    );
    // I traverse the keys of the map and add each word to the minheap.
    for (String word : map.keySet()) {
      minheap.offer(word);
    }
    List<String> result = new ArrayList<>();
    // here I traverse the minheap starting from 0 index to k.
    for (int i = 0; i < k; i++) {
      // here I extract the top frequent words from the minheap and add them to the result
      result.add(minheap.poll());
    }
    // I return the result that contains the top frequent words extracted from the minheap
    return result;
  }
}
