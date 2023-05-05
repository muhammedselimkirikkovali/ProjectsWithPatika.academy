[22,27,16,2,18,6] -> Insertion Sort

- Yukarıdaki dizinin aşamaları:

1. [22,27,16,2,18,6]	(n)
   
2. [2,27,16,22,18,6]	(n-1)
 
3. [2,6,16,22,18,27]	(n-2)
 
4. [2,6,16,18,22,27]	(1)

- Big-O Gösterimi: O(n^2)

- Time Complexity: Dizi sıralandıktan sonra [18] sayısı ortada olduğu için Average Case kapsamında olur.

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

1. [7,3,5,8,2,9,4,15,6]  (n)

2. [2,3,5,8,7,9,4,15,6]

3. [2,3,4,8,7,9,5,15,6]

4. [2,3,4,5,7,9,8,15,6]