// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
// That returns sorted array by ascending.

// given
//      collection_1, collection_2 already sorted from min(0) to max
//      collection_3  already sorted from max to min(0)

// Please provide accessible repo of typescript project with unit test
// and provide how to setup dependency and execute code and unit
function merge_2_sorted(v1: number[], v2: number[]): number[] {
  // assume v1 and v2 are sorted, find merge of v1 and v2
  // using two pointers approach
  let res: number[] = [];
  let i1 = 0;
  let i2 = 0;
  let n1 = v1.length;
  let n2 = v2.length;
  while (i1 < n1 || i2 < n2) {
    if (i1 >= n1) {
      res.push(v2[i2]);
      i2++;
      continue;
    }
    if (i2 >= n2) {
      res.push(v1[i1]);
      i1++;
      continue;
    }
    if (v1[i1] < v2[i2]) {
      res.push(v1[i1]);
      i1++;
    } else {
      res.push(v2[i2]);
      i2++;
    }
  }
  return res;
}

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let res_1_2 = merge_2_sorted(collection_1, collection_2);
  collection_3.reverse();
  return merge_2_sorted(res_1_2, collection_3);
}
