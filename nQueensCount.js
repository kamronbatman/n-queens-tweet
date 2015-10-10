function nQueensCount(n,leftDiagonals,columns,rightDiagonals) {
  // Create a row with all bits set.
  // This is for testing our base case
  var bitTotal = (1 << n)  - 1;

  // If we hit our base case, then we are going to start our solution counter at 1, if not, then 0
  var solutions = columns === bitTotal | 0;

  // Create a bit field.  This is inverted so we have bits set where we can place queens
  var field = ~(leftDiagonals | columns | rightDiagonals);

  // While we still have a bit in our field
  while ( field & bitTotal ) {
    // This is a trick to get the next bit in our inverted field, representing where we are placing our next queen
    var queen = field & -field;

    // Shift our lefts more left and include our new queen
    var newLefts = (leftDiagonals | queen) >> 1;

    // Shift our rights more right and include our new queen
    var newRights = (rightDiagonals | queen) << 1;

    // Add our new queen to our columns
    var newColumns = columns | queen;

    // Recurse to the next row, and add any solutions to our solution counter
    solutions += nQueensCount(n, newLefts, newColumns, newRights);

    // Take the queen off of our field so we can get the next queen position
    field -= queen;
  }

  return solutions;
}