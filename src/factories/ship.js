const Ship = (length, startPos, direction) => {
  const shipCoords = [];
  const damagedCoords = [];
  const hits = [];
  let lengthCount = length;
  let xCoord = startPos[0];
  let yCoord = startPos[1];

  if (direction === 'HORIZONTAL') {
    while (lengthCount > 0) {
      const coord = [xCoord, yCoord];
      shipCoords.push(coord);
      xCoord += 1;
      lengthCount -= 1;
    }
  } else if (direction === 'VERTICAL') {
    while (lengthCount > 0) {
      const coord = [xCoord, yCoord];
      shipCoords.push(coord);
      yCoord += 1;
      lengthCount -= 1;
    }
  }

  const hit = (attackCoord) => {
    if (JSON.stringify(shipCoords).includes(JSON.stringify(attackCoord))) {
      hits.push(true);
      damagedCoords.push(attackCoord);
      return true;
    }
    return false;
  };

  const isSunk = () => {
    if (hits.length === length) {
      return true;
    }
    return false;
  };

  return {
    shipCoords,
    damagedCoords,
    hit,
    isSunk,
  };
};

export default Ship;
