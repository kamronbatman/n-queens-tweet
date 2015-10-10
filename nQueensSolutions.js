function nQueensSolutions(n, solution, leftDiagonals, columns, rightDiagonals) {
  // Create a row with all bits set.
  // This is for testing our base case
  var bitTotal = (1 << n)  - 1;

  // Start our solution as an empty string if needed
  var solution = solution || "";

  // Start our solutions as an empty string too
  var solutions = "";

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

    // We hit our base case
    if (newColumns == bitTotal) {
      solutions += solution + queen;
    } else {
      // We are going to recurse.
      var result = nQueensSolutions(n, solution + queen + ",", newLefts, newColumns, newRights);

      // If we already have a solution, and we got a result, then add a pipe before the result.
      solutions += solutions && results ? "|" + result : result;
    }

    // Take the queen off of our field so we can get the next queen position
    field -= queen;
  }

  return solutions;
}