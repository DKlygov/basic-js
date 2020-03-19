module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }
  let teamNameArr = [];
  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      teamNameArr.push(members[i].trim().charAt(0).toUpperCase());
    }
  };

  return teamNameArr.sort().join("");
}