
//map layout
const LAYOUT_MAP_ORIGINAL = {
  map:
    [
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 10, 11, 11, 12, 13, 10, 11, 11, 11, 12, 13, 7, 8, 13, 10, 11, 11, 11, 12, 13, 10, 11, 11, 12, 13, 9,
      5, 13, 7, 13, 13, 8, 13, 7, 13, 13, 13, 8, 13, 7, 8, 13, 7, 13, 13, 13, 8, 13, 7, 13, 13, 8, 13, 9,
      5, 13, 14, 15, 15, 16, 13, 14, 15, 15, 15, 16, 13, 14, 16, 13, 14, 15, 15, 15, 16, 13, 14, 15, 15, 16, 13, 9,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 10, 11, 11, 12, 13, 10, 12, 13, 10, 11, 11, 11, 11, 11, 11, 12, 13, 10, 12, 13, 10, 11, 11, 12, 13, 9,
      5, 13, 14, 15, 15, 16, 13, 7, 8, 13, 14, 15, 15, 17, 18, 15, 15, 16, 13, 7, 8, 13, 14, 15, 15, 16, 13, 9,
      5, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 9,
      19, 20, 20, 20, 20, 12, 13, 7, 21, 11, 11, 12, 13, 7, 8, 13, 10, 11, 11, 22, 8, 13, 10, 20, 20, 20, 20, 23,
      13, 13, 13, 13, 13, 5, 13, 7, 18, 15, 15, 16, 13, 14, 16, 13, 14, 15, 15, 17, 8, 13, 9, 13, 13, 13, 13, 13,
      13, 13, 13, 13, 13, 5, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 9, 13, 13, 13, 13, 13,
      13, 13, 13, 13, 13, 5, 13, 7, 8, 13, 24, 20, 25, 34, 34, 26, 20, 27, 13, 7, 8, 13, 9, 13, 13, 13, 13, 13,
      1, 1, 1, 1, 1, 16, 13, 14, 16, 13, 9, 13, 13, 13, 13, 13, 13, 5, 13, 14, 16, 13, 14, 1, 1, 1, 1, 1,
      13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9, 13, 13, 13, 13, 13, 13, 5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13,
      20, 20, 20, 20, 20, 12, 13, 10, 12, 13, 9, 13, 13, 13, 13, 13, 13, 5, 13, 10, 12, 13, 10, 20, 20, 20, 20, 20,
      13, 13, 13, 13, 13, 5, 13, 7, 8, 13, 28, 1, 1, 1, 1, 1, 1, 29, 13, 7, 8, 13, 9, 13, 13, 13, 13, 13,
      13, 13, 13, 13, 13, 5, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 9, 13, 13, 13, 13, 13,
      13, 13, 13, 13, 13, 5, 13, 7, 8, 13, 10, 11, 11, 11, 11, 11, 11, 12, 13, 7, 8, 13, 9, 13, 13, 13, 13, 13,
      0, 1, 1, 1, 1, 16, 13, 14, 16, 13, 14, 15, 15, 17, 18, 15, 15, 16, 13, 14, 16, 13, 14, 1, 1, 1, 1, 4,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 10, 11, 11, 12, 13, 10, 11, 11, 11, 12, 13, 7, 8, 13, 10, 11, 11, 11, 12, 13, 10, 11, 11, 12, 13, 9,
      5, 13, 14, 15, 17, 8, 13, 14, 15, 15, 15, 16, 13, 14, 16, 13, 14, 15, 15, 15, 16, 13, 7, 18, 15, 16, 13, 9,
      5, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 9,
      30, 11, 12, 13, 7, 8, 13, 10, 12, 13, 10, 11, 11, 11, 11, 11, 11, 12, 13, 10, 12, 13, 7, 8, 13, 10, 11, 31,
      32, 15, 16, 13, 14, 16, 13, 7, 8, 13, 14, 15, 15, 17, 18, 15, 15, 16, 13, 7, 8, 13, 14, 16, 13, 14, 15, 33,
      5, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 10, 11, 11, 11, 11, 22, 21, 11, 11, 12, 13, 7, 8, 13, 10, 11, 11, 22, 21, 11, 11, 11, 11, 12, 13, 9,
      5, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 16, 13, 14, 16, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 16, 13, 9,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 23
    ],
  points:
    [
      36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
      36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 38, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 38, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 38, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 38, 36,
      36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36,
      36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36,
      36, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 36,
      36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36,
      36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36,
      36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36
    ],
  row: 31,
  column: 28,
  tileWidth: 16,
  tileHeight: 16,
  totaldots: 242,
  totalEnerzier: 4,
  image: PACMAN_TILES
};



//map layout
const LAYOUT_MAP_PLAYER_VS_PLAYER = {
  map:
    [
      0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 13, 13, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 10, 11, 11, 12, 13, 13, 13, 7, 8, 13, 13, 7, 8, 13, 10, 11, 11, 11, 12, 13, 10, 11, 11, 12, 13, 9,
      5, 13, 7, 13, 13, 8, 13, 13, 13, 7, 8, 13, 13, 7, 8, 13, 7, 13, 13, 13, 8, 13, 7, 13, 13, 8, 13, 9,
      5, 13, 14, 15, 15, 16, 13, 13, 13, 14, 16, 13, 13, 14, 16, 13, 14, 15, 15, 15, 16, 13, 14, 15, 15, 16, 13, 9,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      19, 20, 13, 13, 20, 12, 13, 10, 12, 13, 10, 11, 11, 11, 11, 11, 11, 12, 13, 10, 12, 13, 10, 11, 11, 12, 13, 9,
      5, 13, 13, 13, 13, 5, 13, 7, 8, 13, 14, 15, 15, 17, 18, 15, 15, 16, 13, 7, 8, 13, 14, 15, 15, 16, 13, 9,
      5, 13, 13, 13, 13, 5, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 13, 13, 13, 5, 13, 7, 21, 11, 11, 12, 13, 7, 8, 13, 10, 11, 11, 22, 8, 13, 10, 20, 20, 20, 20, 23,
      13, 13, 13, 13, 13, 5, 13, 7, 18, 15, 15, 16, 13, 14, 16, 13, 14, 15, 15, 17, 8, 13, 9, 13, 13, 13, 13, 13,
      13, 13, 13, 13, 13, 5, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 9, 13, 13, 13, 13, 13,
      13, 13, 13, 13, 13, 5, 13, 7, 8, 13, 24, 20, 25, 34, 34, 26, 20, 27, 13, 7, 8, 13, 9, 13, 13, 13, 13, 13,
      0, 1, 13, 13, 1, 5, 13, 14, 16, 13, 9, 13, 13, 13, 13, 13, 13, 5, 13, 14, 16, 13, 14, 13, 13, 1, 1, 4,
      5, 13, 13, 13, 13, 5, 13, 13, 13, 13, 9, 13, 13, 13, 13, 13, 13, 5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 13, 13, 13, 5, 13, 10, 12, 13, 9, 13, 13, 13, 13, 13, 13, 5, 13, 10, 12, 13, 10, 13, 13, 13, 13, 9,
      5, 13, 13, 13, 13, 5, 13, 7, 8, 13, 28, 1, 1, 1, 1, 1, 1, 29, 13, 7, 8, 13, 9, 13, 13, 13, 13, 9,
      5, 13, 13, 13, 13, 5, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 9, 13, 13, 13, 13, 9,
      5, 13, 13, 13, 13, 5, 13, 7, 8, 13, 10, 11, 11, 11, 11, 11, 11, 12, 13, 7, 8, 13, 9, 13, 13, 13, 13, 9,
      0, 1, 13, 13, 1, 16, 13, 14, 16, 13, 14, 15, 15, 17, 18, 15, 15, 16, 13, 14, 16, 13, 14, 1, 1, 1, 1, 4,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 10, 11, 11, 12, 13, 10, 11, 11, 11, 12, 13, 7, 8, 13, 10, 11, 11, 11, 12, 13, 10, 11, 11, 12, 13, 9,
      5, 13, 14, 15, 17, 8, 13, 14, 15, 15, 15, 16, 13, 14, 16, 13, 14, 15, 15, 15, 16, 13, 7, 18, 15, 16, 13, 9,
      5, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 9,
      30, 11, 12, 13, 7, 8, 13, 10, 12, 13, 10, 11, 11, 11, 11, 11, 11, 12, 13, 10, 12, 13, 7, 8, 13, 10, 11, 31,
      32, 15, 16, 13, 14, 16, 13, 7, 8, 13, 14, 15, 15, 17, 18, 15, 15, 16, 13, 7, 8, 13, 14, 16, 13, 14, 15, 33,
      5, 13, 13, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 7, 8, 13, 13, 13, 13, 13, 13, 9,
      5, 13, 10, 11, 11, 11, 11, 22, 21, 11, 11, 12, 13, 7, 8, 13, 10, 11, 11, 22, 21, 11, 11, 11, 11, 12, 13, 9,
      5, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 16, 13, 14, 16, 13, 14, 15, 15, 15, 15, 15, 15, 15, 15, 16, 13, 9,
      5, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 9,
      19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 13, 13, 13, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 23
    ],
  points:
    [
      36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
      36, 37, 37, 37, 37, 38, 37, 37, 37, 36, 36, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 38, 37, 37, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 37, 37, 36, 36, 37, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 37, 37, 36, 36, 37, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 37, 37, 36, 36, 37, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36,
      36, 36, 37, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 37, 37, 37,
      36, 38, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 37, 37, 38,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 37, 37, 37,
      36, 36, 37, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 36, 36, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 37, 37, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 37, 37, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 37, 37, 36,
      36, 37, 37, 37, 37, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 37, 37, 37, 37, 36,
      36, 36, 37, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 36,
      36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 38, 37, 37, 37, 37, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 36,
      36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36,
      36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 37, 36, 36, 36,
      36, 37, 37, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 36, 36, 37, 37, 37, 37, 37, 37, 36,
      36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36,
      36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36, 36, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 36,
      36, 37, 37, 37, 38, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 38, 36,
      36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36
    ],
  row: 31,
  column: 28,
  tileWidth: 16,
  tileHeight: 16,
  totaldots: 331,
  totalEnerzier: 7,
  image: PACMAN_TILES
};
