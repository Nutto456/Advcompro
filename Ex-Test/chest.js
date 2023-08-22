function canMove(piece, start_position, end_position) {
    piece = piece.toLowerCase();
    const startCol = start_position.charCodeAt(0) - 'a'.charCodeAt(0);
    const startRow = parseInt(start_position.charAt(1));
    const endCol = end_position.charCodeAt(0) - 'a'.charCodeAt(0);
    const endRow = parseInt(end_position.charAt(1));
  
    if (piece === "rook") {
      return startCol === endCol || startRow === endRow;
    } else if (piece === "bishop") {
      return Math.abs(startCol - endCol) === Math.abs(startRow - endRow);
    } else if (piece === "queen") {
      return startCol === endCol || startRow === endRow || Math.abs(startCol - endCol) === Math.abs(startRow - endRow);
    } else {
      return false;
    }
  }
  
  console.log(canMove("Rook", "A8", "H8"));   
  console.log(canMove("Bishop", "A7", "G1"));  
  console.log(canMove("Queen", "C4", "D6"));   
  